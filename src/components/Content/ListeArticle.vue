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

    <section class="row">
      <div v-for="item in articles" :key="item.id" class="col-md-3 mb-4">
        <!-- Adjust col-md-3 to control the number of cards per row on medium screens -->
        <div class="card">
          <img :src="item.imgUrl" class="card-img-top img-fluid" :alt="item.imgAlt" style="aspect-ratio: 10/9;">
          <!-- Add img-fluid class to make images responsive -->
          <!-- Add style="object-fit: cover;" to maintain aspect ratio -->
          <div class="card-body">
            <h5 class="card-title">{{ item.nom }}</h5>
            <!-- Conditionally render the description -->
            <p class="card-text" v-if="!adminMode">{{ item.description }}</p>
            <p class="card-text">{{ item.prix }}€</p>
          </div>
          <div v-if="adminMode" class="card-footer text-center">
            <button @click="editArticle(item)" class="btn btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21 12a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1m-15 .76V17a1 1 0 0 0 1 1h4.24a1 1 0 0 0 .71-.29l6.92-6.93L21.71 8a1 1 0 0 0 0-1.42l-4.24-4.29a1 1 0 0 0-1.42 0l-2.82 2.83l-6.94 6.93a1 1 0 0 0-.29.71m10.76-8.35l2.83 2.83l-1.42 1.42l-2.83-2.83ZM8 13.17l5.93-5.93l2.83 2.83L10.83 16H8Z"/></svg>
            </button>
            <button @click="deleteArticle(item)" class="btn btn-danger">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M0 0h24v24H0z"/><path fill="currentColor" d="M20 6a1 1 0 0 1 .117 1.993L20 8h-.081L19 19a3 3 0 0 1-2.824 2.995L16 22H8c-1.598 0-2.904-1.249-2.992-2.75l-.005-.167L4.08 8H4a1 1 0 0 1-.117-1.993L4 6zm-9.489 5.14a1 1 0 0 0-1.218 1.567L10.585 14l-1.292 1.293l-.083.094a1 1 0 0 0 1.497 1.32L12 15.415l1.293 1.292l.094.083a1 1 0 0 0 1.32-1.497L13.415 14l1.292-1.293l.083-.094a1 1 0 0 0-1.497-1.32L12 12.585l-1.293-1.292l-.094-.083zM14 2a2 2 0 0 1 2 2a1 1 0 0 1-1.993.117L14 4h-4l-.007.117A1 1 0 0 1 8 4a2 2 0 0 1 1.85-1.995L10 2z"/></g></svg>
            </button>
            <router-link :to="{ name: 'ArticleDetail', params: { id: item.id } }" class="btn btn-warning">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0"/><path d="M12 18c-.328 0-.652-.017-.97-.05C7.858 17.618 5.18 15.635 3 12c2.4-4 5.4-6 9-6c3.465 0 6.374 1.853 8.727 5.558M15 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0m5.2 2.2L22 22"/></g></svg>            </router-link>
          </div>
          <div v-else class="card-footer text-center">
            <button @click="ajouterAuPanier(item)" class="btn btn-success">
            
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 14 14"><path fill="currentColor" fill-rule="evenodd" d="M3.505.078a.75.75 0 0 1 .746.675l.285 2.833h7.549a1.431 1.431 0 0 1 1.217.6a1.432 1.432 0 0 1 .199 1.286l-1.239 3.725V9.2a1.431 1.431 0 0 1-1.417.973H4.994a1.431 1.431 0 0 1-1.431-1.24L3.08 4.135a.501.501 0 0 1-.002-.052l-.252-2.506H1.177a.75.75 0 0 1 0-1.5zm7.15 11.566a1.178 1.178 0 1 1 0 2.356a1.178 1.178 0 0 1 0-2.356m-3.969 1.178a1.178 1.178 0 1 0-2.355 0a1.178 1.178 0 0 0 2.355 0m1.626-7.759a.625.625 0 0 0-.625.625v.687H7a.625.625 0 1 0 0 1.25h.687v.687a.625.625 0 0 0 1.25 0v-.687h.687a.625.625 0 1 0 0-1.25h-.687v-.687a.625.625 0 0 0-.625-.625" clip-rule="evenodd"/></svg>            </button>
            <router-link :to="{ name: 'ArticleDetail', params: { id: item.id } }" class="btn btn-warning">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0"/><path d="M12 18c-.328 0-.652-.017-.97-.05C7.858 17.618 5.18 15.635 3 12c2.4-4 5.4-6 9-6c3.465 0 6.374 1.853 8.727 5.558M15 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0m5.2 2.2L22 22"/></g></svg>            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
