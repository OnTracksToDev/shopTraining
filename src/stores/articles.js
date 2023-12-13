import { defineStore } from 'pinia'
import listeArticle from '@/data/listeArticle'

export const useArticlesStore = defineStore('articles', {
  state: () => ({
    articles: listeArticle
  }),
  getters: {
    getAllArticles: (state) => state.articles,

    getArticleById: (state) => (id) => {
      const item = state.articles.find((item) => item.id == id)
      return item
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
    }
  }
})
