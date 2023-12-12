<script>
import { mapState } from 'pinia'
import { useArticlesStore } from '@/stores/articles'

export default {
  computed: {
    ...mapState(useArticlesStore, {
      getAllArticlesState: 'getAllArticles'
    })
  }
}
</script>

<template>
  <div class="container mt-4">
    <h2>Liste de Produits de la boutique</h2>
    <ul class="list-group">
      <li v-for="article in getAllArticlesState" :key="article.index" class="list-group-item d-flex justify-content-between align-items-center">
        <div>
          {{ article.nom }} : {{ article.prix }}€
        </div>
        <router-link
          :to="{ name: 'ArticleDetail', params: { id: article.id } }"
          class="btn btn-success"
        >
          VOIR
        </router-link>
      </li>
    </ul>
  </div>
</template>
