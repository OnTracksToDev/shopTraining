import { defineStore } from 'pinia'
import listeArticle from '@/data/listeArticle'

export const useArticlesStore = defineStore('articles', {
  state: () => ({
    articles: listeArticle,
    filters: {
      category: 'Toutes',
      alphabeticalOrder: null,
      priceOrder: null
    }
  }),
  getters: {
    getAllArticles: (state) => state.articles,

    getArticleById: (state) => (id) => {
      const item = state.articles.find((item) => item.id == id)
      return item
    },
    getCategories: (state) => {
      // Set pour garantir des uniquescatégorie
      const uniqueCategories = new Set(state.articles.map((article) => article.category))

      // Set en un tableau
      return [...uniqueCategories]
    },
    getFilteredArticles: (state) => {
      let filteredArticles = [...state.articles];
    
      // category filter
      if (state.filters.category && state.filters.category !== 'Toutes') {
        filteredArticles = filteredArticles.filter(
          (article) => article.category === state.filters.category
        );
      }
      // price order
      if (state.filters.priceOrder) {
        if (state.filters.priceOrder === 'asc') {
          filteredArticles.sort((a, b) => a.prix - b.prix);
        } else if (state.filters.priceOrder === 'desc') {
          filteredArticles.sort((a, b) => b.prix - a.prix);
        }
        console.log('prix')
      }
    
      
    
      // alphabetical order
      if (state.filters.alphabeticalOrder) {
        if (state.filters.alphabeticalOrder === 'asc') {
          filteredArticles.sort((a, b) => a.nom.localeCompare(b.nom));
        } else if (state.filters.alphabeticalOrder === 'desc') {
          filteredArticles.sort((a, b) => b.nom.localeCompare(a.nom));
        }
        console.log('alphabet')
      }
    
      return filteredArticles;
    }
                  },
  actions: {
    addArticleToList(item) {
      this.articles.push(item)
    },
    updateArticleToList(item) {
      const index = this.articles.findIndex((el) => {
        return el.id === item.id
      })
      if (index != -1) {
        this.articles[index] = item
      }
    },
    deleteArticleFromList(item) {
      const index = this.articles.findIndex((el) => {
        return el.id === item.id
      })
      if (index != -1) {
        this.articles.splice(index, 1)
      }
    },
    setCategoryFilter(category) {
      this.filters.category = category
    },

    setAlphabeticalOrderFilter(order) {
      this.filters.alphabeticalOrder = order
    },

    setPriceOrderFilter(order) {
      this.filters.priceOrder = order
    }
  }
})
