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
  <div v-if="getCurrentArticle != null" class="card mb-3" style="max-height: 100vh;">
    <div class="row g-0">
      <div class="col-md-4">
        <img :src="getCurrentArticle.imgUrl" class="img-fluid rounded-start" :alt="getCurrentArticle.imgAlt" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ getCurrentArticle.nom }}</h5>
          <p class="card-text">Prix : {{ getCurrentArticle.prix }} €</p>
          <p class="card-text">{{ getCurrentArticle.description }}</p>
          <p class="card-text">{{ getCurrentArticle.prioriteDescription }}</p>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="alert alert-danger mt-5" role="alert">
  <div class="card-body">
    <p class="card-text">Aucun article correspondant</p>
  </div>
</div>
</template>
