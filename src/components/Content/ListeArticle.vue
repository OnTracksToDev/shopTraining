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
  <div class="container row">
    <h2 class="text-center">Liste de Produits de la boutique</h2>

    <section>
      <ul class="list-group">
        <li
          v-for="item in articles"
          :key="item.id"
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <div>{{ item.nom }} : {{ item.prix }}€</div>

          <div v-if="adminMode== true">
            <button @click="ajouterAuPanier(item)" class="btn btn-success">Ajouter panier</button>

            <button @click="editArticle(item)" class="btn btn-primary">Éditer</button>
            <button @click="deleteArticle(item)" class="btn btn-danger">Supprimer</button>
            <router-link
              :to="{ name: 'ArticleDetail', params: { id: item.id } }"
              class="btn btn-warning"
            >
              Voir Détail
            </router-link>
          </div>
          <!-- <div v-else>
            <button @click="ajouterAuPanier(item)" class="btn btn-success">AJouter panier</button>
            <router-link
              :to="{ name: 'ArticleDetail', params: { id: item.id } }"
              class="btn btn-warning"
            >
              Voir Détail
            </router-link>

          </div> -->
        </li>
      </ul>
    </section>
  </div>
</template>
