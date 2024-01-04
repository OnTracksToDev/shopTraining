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
  },
  computed: {
    ...mapState(useArticlesStore, ['articles','getFilteredArticles']),
    // Calcule le tableau d'articles pour la page actuelle
    paginatedArticles() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage
      const endIndex = startIndex + this.itemsPerPage
      return this.getFilteredArticles.slice(startIndex, endIndex)
    },
    // Calcule le nombre total de pages
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
            <button @click="editArticle(item)" class="btn btn-primary">
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
            <button @click="deleteArticle(item)" class="btn btn-danger">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"
                />
              </svg>
            </button>
            <router-link
              :to="{ name: 'ArticleDetail', params: { id: item.id } }"
              class="btn btn-warning"
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
        <div v-for="item in getFilteredArticles" :key="item.id" class="col-md-3 mb-4">
          <div class="card">
            <img
              :src="item.imgUrl"
              class="card-img-top img-fluid"
              :alt="item.imgAlt"
              style="aspect-ratio: 10/9"
            />
            <div class="card-body">
              <h5 class="card-title">{{ item.nom }}</h5>
              <p class="card-text">{{ item.prix }}€</p>
            </div>

            <div class="card-footer text-center">
              <button @click="ajouterAuPanier(item)" class="btn btn-success">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M20 15v3h3v2h-3v3h-2v-3h-3v-2h3v-3zm3-5l-.04.29L22 13.8a6.005 6.005 0 0 0-9 5.2c0 .7.13 1.37.35 2H5.5c-.78 0-1.46-.45-1.79-1.1L1.1 10.44L1 10c0-.55.45-1 1-1h4.58l4.6-6.57a.997.997 0 0 1 1.65.01L17.42 9H22c.55 0 1 .45 1 1m-9 5c0-1.1-.89-2-2-2s-2 .9-2 2s.9 2 2 2s2-.89 2-2m1-6l-3-4.26L9 9z"
                  />
                </svg>
              </button>
              <router-link
                :to="{ name: 'ArticleDetail', params: { id: item.id } }"
                class="btn btn-warning"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20">
                  <path
                    fill="currentColor"
                    d="M16.02 2.036a2 2 0 0 1 1.986 1.997l.008 4.95a2 2 0 0 1-.586 1.417l-.359.359a4.5 4.5 0 1 0-6.31 6.31a2 2 0 0 1-2.79-.038L3.02 12.083a2 2 0 0 1 .002-2.83l6.682-6.665a2 2 0 0 1 1.425-.584zM13 6a1 1 0 1 0 2 0a1 1 0 0 0-2 0m3.303 9.596a3.5 3.5 0 1 0-.707.707l2.55 2.55a.5.5 0 1 0 .708-.707zM16 13.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"
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

.card:hover {
  transform: scale(1.05);
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
}

.card:hover img {
  filter: brightness(80%);
}
</style>
