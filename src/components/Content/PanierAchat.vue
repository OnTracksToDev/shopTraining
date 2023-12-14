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
    <h3 class="mb-4">Contenu du panier</h3>
    <ul class="list-group">
      <li v-for="(item, index) in getPanierState" :key="item.id" class="list-group-item d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center">
          <img :src="item.imgUrl" :alt="item.imgAlt" class="img-thumbnail mr-3 me-4" style="width: 50px; height: 50px;">
          <div>
            <p class="mb-0">{{ item.nom }}</p>
            <p class="mb-0"><strong>{{ item.prix }}€</strong> x {{ item.quantite }}</p>
          </div>
        </div>
        <button @click="retirerDuPanierAction(index)" class="btn btn-danger">Retirer du panier</button>
      </li>
    </ul>
    <p class="mt-3"><strong>Total:</strong> 💸 {{ calculerTotalState }}€</p>
    <button class="btn btn-success">Procéder au paiement</button>
  </div>
  <div v-else class="text-center mt-4">
    <h3>Votre panier est vide pour le moment... 🛍️</h3>
  </div>
</template>
