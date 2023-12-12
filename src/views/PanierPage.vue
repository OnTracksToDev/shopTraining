<script>
import ListeArticle from '@/components/Content/ListeArticle.vue'
import PanierAchat from '@/components/Content/PanierAchat.vue'

export default {
  components: {
    ListeArticle,
    PanierAchat
  }
}
</script>

<template>
    <div class="container mt-4"> 
      <h1 class="mb-4">Shopping App</h1>
      <ListeArticle></ListeArticle>
      <PanierAchat></PanierAchat>
    </div>
  </template>
  