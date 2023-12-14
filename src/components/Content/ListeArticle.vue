<script>
import { mapState, mapActions } from 'pinia'
import { useArticlesStore } from '@/stores/articles'
import { usePanierStore } from '@/stores/panier'

export default {
  name: 'ListeArticle',
  emits: ['editArticleItem', 'deleteArticleItem'],
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
    }
  },
  computed: {
    ...mapState(useArticlesStore, ['articles'])
  }
}
</script>

<template>
  <div class="container">
    <h2 class="text-center">Liste de Produits de la boutique</h2>

    <section>
      <!-- Affichage Admin -->
      <ul v-if="adminMode" class="list-group">
        <li
          v-for="item in articles"
          :key="item.id"
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <div>{{ item.nom }} : {{ item.prix }}€</div>

          <div>
            <button @click="editArticle(item)" class="btn btn-primary">Éditer</button>
            <button @click="deleteArticle(item)" class="btn btn-danger">Supprimer</button>
            <router-link
              :to="{ name: 'ArticleDetail', params: { id: item.id } }"
              class="btn btn-warning"
            >
              Voir Détail
            </router-link>
          </div>
        </li>
      </ul>

      <!-- Affichage lien Articles -->
      <div v-else class="row">
        <div v-for="item in articles" :key="item.id" class="col-md-3 mb-4">
          <div class="card">
            <img
              :src="item.imgUrl"
              class="card-img-top img-fluid"
              :alt="item.imgAlt"
              style="aspect-ratio: 10/9"
            />
            <div class="card-body">
              <h5 class="card-title">{{ item.nom }}</h5>
              <p class="card-text" v-if="!adminMode">{{ item.description }}</p>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0" />
                    <path
                      d="M12 18c-.328 0-.652-.017-.97-.05C7.858 17.618 5.18 15.635 3 12c2.4-4 5.4-6 9-6c3.465 0 6.374 1.853 8.727 5.558M15 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0m5.2 2.2L22 22"
                    />
                  </g>
                </svg>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
