<script>
import { mapState, mapActions } from 'pinia'
import { useArticlesStore } from '@/stores/articles'
import { usePanierStore } from '@/stores/panier'
import PaginationComp from '@/components/Content/PaginationComp.vue'

export default {
  name: 'ListeArticle',
  emits: ['editArticleItem', 'deleteArticleItem'],

  components: {
    PaginationComp
  },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 8 // Le nombre d'articles par page
    }
  },
  props: {
    articleListArray: {
      type: Array,
      required: false,
      default: function () {
        return null
      }
    },
    adminMode: {
      type: Boolean,
      required: false,
      default: function () {
        return false
      }
    }
  },
  methods: {
    ...mapActions(useArticlesStore, {
      deleteArticleFromListAction: 'deleteArticleFromList'
    }),
    ...mapActions(usePanierStore, {
      ajouterAuPanierAction: 'ajouterAuPanier'
    }),

    editArticle(item) {
      this.$emit('editArticleItem', item)
    },
    deleteArticle(item) {
      this.deleteArticleFromListAction(item)
      this.$emit('deleteArticleItem', item)
    },
    ajouterAuPanier(item) {
      this.ajouterAuPanierAction(item)
    },
    changePage(page) {
      this.currentPage = page
    },
    limitCharacters(text, limit) {
    return text.length > limit ? text.slice(0, limit) + '...' : text;
  },
  },
  computed: {
    ...mapState(useArticlesStore, ['articles', 'getFilteredArticles']),
    // Calcule le tableau d'articles pour la page actuelle
    paginatedArticles() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage
      const endIndex = startIndex + this.itemsPerPage
      return this.getFilteredArticles.slice(startIndex, endIndex)
    }, // Calcule le nombre total de pages
    totalPages() {
      return Math.ceil(this.getFilteredArticles.length / this.itemsPerPage)
    }
  }
}
</script>

<template>
  <div class="container">
    <section>
      <!-- Affichage Admin -->
      <ul v-if="adminMode" class="list-group">
        <li
          v-for="item in articles"
          :key="item.id"
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <img
            :src="item.imgUrl"
            :alt="item.imgAlt"
            class="img-thumbnail mr-3 me-4"
            style="width: 80px; height: 80px"
          />
          <div>{{ item.nom }} : {{ item.prix }}€</div>
          <div>
            <button @click="editArticle(item)" class="btn btn-custom_green btn-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1" />
                  <path d="M20.385 6.585a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3zM16 5l3 3" />
                </g>
              </svg>
            </button>
            <button @click="deleteArticle(item)" class="btn btn-custom_red btn-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"
                />
              </svg>
            </button>
            <router-link
              :to="{ name: 'ArticleDetail', params: { id: item.id } }"
              class="btn btn-custom_violet btn-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20">
                <path
                  fill="currentColor"
                  d="M16.02 2.036a2 2 0 0 1 1.986 1.997l.008 4.95a2 2 0 0 1-.586 1.417l-.359.359a4.5 4.5 0 1 0-6.31 6.31a2 2 0 0 1-2.79-.038L3.02 12.083a2 2 0 0 1 .002-2.83l6.682-6.665a2 2 0 0 1 1.425-.584zM13 6a1 1 0 1 0 2 0a1 1 0 0 0-2 0m3.303 9.596a3.5 3.5 0 1 0-.707.707l2.55 2.55a.5.5 0 1 0 .708-.707zM16 13.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"
                />
              </svg>
            </router-link>
          </div>
        </li>
      </ul>
      <!-- Affichage Article -->
      <div v-else class="row">
        <PaginationComp
          :currentPage="currentPage"
          :totalPages="totalPages"
          @page-change="changePage"
        />
        <div v-for="item in paginatedArticles" :key="item.id" class="col-md-3 mb-4">
          <div class="card">
            <img
              :src="item.imgUrl"
              class="card-img-top img-fluid mx-auto"
              :alt="item.imgAlt"
            />
            <div class="card-body">
              <h5 class="card-title">{{ limitCharacters(item.nom, 18) }}</h5>
                            <p class="card-text">{{ item.prix }}€</p>
            </div>

            <div class="card-footer d-flex justify-content-around align-items-center">
              <button @click="ajouterAuPanier(item)" class="btn btn-custom_green">
                <svg height="30" viewBox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M25.5 3C23.02 3 21 5.02 21 7.5s2.02 4.5 4.5 4.5S30 9.98 30 7.5 27.98 3 25.5 3zm0 1C27.44 4 29 5.56 29 7.5S27.44 11 25.5 11 22 9.44 22 7.5 23.56 4 25.5 4zm0 1c-.277 0-.5.223-.5.5V7h-1.5c-.277 0-.5.223-.5.5s.223.5.5.5H25v1.5c0 .277.223.5.5.5s.5-.223.5-.5V8h1.5c.277 0 .5-.223.5-.5s-.223-.5-.5-.5H26V5.5c0-.277-.223-.5-.5-.5zm-15 11h13c.277 0 .5.223.5.5s-.223.5-.5.5h-13c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm-1-4h12c.277 0 .5.223.5.5s-.223.5-.5.5h-12c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm12 10c-1.375 0-2.5 1.125-2.5 2.5s1.125 2.5 2.5 2.5 2.5-1.125 2.5-2.5-1.125-2.5-2.5-2.5zm0 1c.834 0 1.5.666 1.5 1.5s-.666 1.5-1.5 1.5-1.5-.666-1.5-1.5.666-1.5 1.5-1.5zm-10-1C10.125 22 9 23.125 9 24.5s1.125 2.5 2.5 2.5 2.5-1.125 2.5-2.5-1.125-2.5-2.5-2.5zm0 1c.834 0 1.5.666 1.5 1.5s-.666 1.5-1.5 1.5-1.5-.666-1.5-1.5.666-1.5 1.5-1.5zM.508 4c-.67 0-.677 1 0 1H4.1c.074.355.64 3.055 1.314 6.23.358 1.686.724 3.406 1.018 4.766.293 1.36.505 2.327.588 2.633.132.494.256 1.055.62 1.544.362.488 1 .826 1.86.826h13.992c.86 0 1.498-.338 1.862-.826.363-.49.486-1.05.62-1.545.087-.332.224-1.103.41-2.07.183-.97.4-2.093.6-2.947.165-.613-.856-.88-.972-.226-.206.884-.427 2.012-.612 2.984-.185.973-.347 1.832-.392 2-.136.506-.263.945-.457 1.206-.194.262-.42.424-1.058.424H9.5c-.638 0-.864-.162-1.06-.424-.193-.26-.32-.7-.456-1.205-.05-.193-.28-1.227-.574-2.585-.293-1.358-.66-3.076-1.017-4.764-.716-3.373-1.4-6.624-1.4-6.624-.048-.23-.252-.396-.49-.396zm7.994 4c-.665 0-.657 1 0 1h9.992c.672 0 .657-1 0-1z"
                  />
                </svg>
              </button>
              <router-link
                :to="{ name: 'ArticleDetail', params: { id: item.id } }"
                class="btn btn-primary"
              >
                <svg height="30" viewBox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.5 17c-.13.004-.253.058-.344.15L.64 26.652c-.896.893-.776 2.134-.105 2.81.67.674 1.913.795 2.81-.103l9.49-9.49c.492-.472-.25-1.182-.706-.708l-9.49 9.49c-.58.58-1.07.43-1.396.104-.326-.328-.47-.826.102-1.397l9.517-9.503c.326-.318.084-.857-.363-.857zm8.45-14.93c-1.604.213-3.146.91-4.39 2.063-.49.453.21 1.17.68.734 2.18-2.02 5.392-2.445 8.022-1.06.58.332 1.053-.603.465-.885-1.5-.79-3.17-1.064-4.776-.852zM20 0c-5.517 0-10 4.483-10 10s4.483 10 10 10 10-4.483 10-10S25.517 0 20 0zm0 1c4.976 0 9 4.024 9 9s-4.024 9-9 9-9-4.024-9-9 4.024-9 9-9z"
                  />
                </svg>
              </router-link>
            </div>
          </div>
        </div>
        <PaginationComp
          :currentPage="currentPage"
          :totalPages="totalPages"
          @page-change="changePage"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.card {

  position: relative;
  overflow: hidden;
  transition:
    transform 0.4s,
    box-shadow 0.3s;
}
.card img{
  aspect-ratio: 9/8;
  max-height:350px;
  
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
}

.card:hover img {
  filter: brightness(80%);
}
</style>
