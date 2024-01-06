<script>
import ListeArticle from '@/components/Content/ListeArticle.vue'
import ArticleForm from '@/components/Form/ArticleForm.vue'

export default {
  name: 'ArticlesPage',
  components: {
    ListeArticle,
    ArticleForm
  },
  data() {
    return {
      editMode: false,
      articleToEdit: null
    }
  },
  methods: {
    editArticleItemFun(item) {
      this.editMode = true
      this.articleToEdit = item
    },
    reset() {
      this.articleToEdit = null
      this.editMode = false
    }
  },
  mounted() {
    this.reset()
  }
}
</script>

<template>
  <section class="container row">
    <section class="col-12">
      <h2 class="text-center">Gestion Articles</h2>
    </section>
    <section class="col-lg-7">
      <liste-article 
      @editArticleItem="editArticleItemFun" 
      :adminMode="true" 
      />

    </section>
    <section class="col-lg-5">
      <article-form
        @updateArticleToList="reset"
        :editMode="editMode"
        :articleToEdit="articleToEdit"
      />
    </section>
  </section>
</template>
