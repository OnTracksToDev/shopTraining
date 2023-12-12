import { defineStore } from 'pinia';

export const useArticlesStore = defineStore('articles', {
  state: () => ({
    articles: [
      { id: 1, nom: 'Apple', prix: 10, image: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { id: 2, nom: 'Peach', prix: 15, image: 'https://images.pexels.com/photos/1268122/pexels-photo-1268122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { id: 3, nom: 'Orange', prix: 20, image: 'https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { id: 4, nom: 'Banana', prix: 25, image: 'https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { id: 5, nom: 'Grape', prix: 30, image: 'https://images.pexels.com/photos/23042/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600' },
      { id: 6, nom: 'Cherry', prix: 35, image: 'https://images.pexels.com/photos/109274/pexels-photo-109274.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { id: 7, nom: 'Pumpkin', prix: 40, image: 'https://images.pexels.com/photos/633480/pexels-photo-633480.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { id: 8, nom: 'Strawberry', prix: 45, image: 'https://images.pexels.com/photos/70746/strawberries-red-fruit-royalty-free-70746.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { id: 9, nom: 'Watermelon', prix: 50, image: 'https://images.pexels.com/photos/5946081/pexels-photo-5946081.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { id: 10, nom: 'Blueberry', prix: 55, image: 'https://images.pexels.com/photos/440122/pexels-photo-440122.jpeg?auto=compress&cs=tinysrgb&w=600' },
    ]
      }),

  getters: {
    getAllArticles: (state) => state.articles,

    getArticleById: (state) => (id) => {
      const item = state.articles.find(item => item.id == id)
      return item
  }
  },

});