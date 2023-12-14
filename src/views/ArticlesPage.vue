<script>
import ListeArticle from '@/components/Content/ListeArticle.vue'

export default {
  name: 'ArticlesPage',
  components: {
    ListeArticle,
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
      <h2 class="text-center">La boutique</h2>
    </section>
    <section class="col-12">
      <liste-article/>

    </section>
  </section>
</template>
