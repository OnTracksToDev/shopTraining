import { defineStore } from 'pinia'

export const usePanierStore = defineStore('panier', {
  state: () => ({
    panier: []
  }),

  getters: {
    getPanier: (state) => state.panier,
    calculerTotal: (state) => {
      return state.panier.reduce((acc, curV) => acc + curV.prix * curV.quantite, 0)
    }
  },
  actions: {
    ajouterAuPanier(article) {
      //verifie présence nouvel article dans le panier
      const index = this.panier.findIndex((item) => item.id === article.id)

      if (index !== -1) {
        //verifie si article est dans panier
        this.panier[index].quantite++ //incremente qté
      } else {
        this.panier.push({ ...article, quantite: 1 }) //ajout avec qté a 1
      }
    },
    retirerDuPanier(index) {
      // Si  qté > 1
      if (this.panier[index].quantite > 1) {
        this.panier[index].quantite-- //décrémente qté
      } else {
        this.panier.splice(index, 1) // retire article du panier
      }
    }
  }
})
