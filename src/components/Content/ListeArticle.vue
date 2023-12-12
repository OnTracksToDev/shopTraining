<script>
import { mapState, mapActions } from 'pinia'
import { useArticlesStore } from '@/stores/articles'
import { usePanierStore } from '@/stores/panier'

export default {
  methods: {
    ...mapActions(usePanierStore, {
      ajouterAuPanierAction: 'ajouterAuPanier'
    })
  },
  computed: {
    ...mapState(useArticlesStore, {
      getAllArticlesState: 'getAllArticles'
    })
  }
}
</script>

<template>
  <div class="container mt-4">
    <h2>Liste d'Articles</h2>
    <ul class="list-group">
      <li v-for="article in getAllArticlesState" :key="article.id" class="list-group-item d-flex justify-content-between align-items-center">
        <div>
          {{ article.nom }} : {{ article.prix }}€
        </div>
        <button @click="ajouterAuPanierAction(article)" class="btn btn-primary">Ajouter au panier</button>
      </li>
    </ul>
  </div>
</template>
