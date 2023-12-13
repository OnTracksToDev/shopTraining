<script>
import { mapState, mapActions } from 'pinia'
import { usePanierStore } from '@/stores/panier'

export default {
  methods: {
    ...mapActions(usePanierStore, {
      retirerDuPanierAction: 'retirerDuPanier'
    })
  },
  computed: {
    ...mapState(usePanierStore, {
      getPanierState: 'getPanier',
      calculerTotalState: 'calculerTotal'
    })
  }
}
</script>

<template>
  <div v-if="getPanierState.length > 0" class="container mt-4">
    <h3>Contenu du panier</h3>
    <ul class="list-group">
      <li v-for="(item, index) in getPanierState" :key="item.id" class="list-group-item d-flex justify-content-between align-items-center">
        <!-- Ajout de la balise img pour afficher la photo -->
        <div class="d-flex align-items-center">
          <img :src="item.imgUrl" :alt="item.imgAlt" class="img-thumbnail mr-3" style="width: 50px; height: 50px;">
          {{ item.nom }} : {{ item.prix }}€ x {{ item.quantite }}
        </div>
        <button @click="retirerDuPanierAction(index)" class="btn btn-danger">Retirer du panier</button>
      </li>
    </ul>
    <p class="mt-3">Total:💸 {{ calculerTotalState }}€</p>
  </div>
  <div v-else>
    <h3>Votre panier est vide pour le moment... 🛍️</h3>
  </div>
</template>
