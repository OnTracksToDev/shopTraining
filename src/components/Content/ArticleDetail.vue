<script>
import { mapState } from 'pinia'
import { useArticlesStore } from '@/stores/articles'

export default {
  name: 'ArticleDetail',
  props: {
    articleId: {
      type: [Number, String],
      required: false,
      default: function () {
        return null
      }
    }
  },
  computed: {
    ...mapState(useArticlesStore, ['getArticleById']),
    getCurrentArticle() {
      return this.getArticleById(this.articleId)
    }
  }
}
</script>

<template>
  <div class="card" style="width: 30rem;">
    <h2 class="card-header">Details article</h2>
    <div class="card-body" v-if="getCurrentArticle != null">
      <p class="card-text">ID : {{ getCurrentArticle.id }}</p>
      <p class="card-text">Nom : {{ getCurrentArticle.nom }}</p>
      <p class="card-text">Prix : {{ getCurrentArticle.prix }} €</p>
      <img :src="getCurrentArticle.image" class="card-img-top img-fluid" alt="" />
    </div>
  </div>
</template>
