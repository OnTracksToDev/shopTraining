<script>
import ListeArticle from '@/components/Content/ListeArticle.vue'
import FilterPanel from '@/components/Content/FilterPanel.vue'

export default {
  name: 'ArticlesPage',
  components: {
    ListeArticle,
    FilterPanel
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
    </section>
    <section class="col-12">
      <filter-panel/>
      <liste-article/>

    </section>
  </section>
</template>


