<template>
  <div class="filter-panel container mt-4">
    <h3 class="mb-3">Filtrer les articles :</h3>

    <div class="row">
      <!-- catégorie -->
      <div class="col-md-2 mb-3">
        <label for="category" class="form-label">Catégorie:</label>
        <select class="form-select" id="category" v-model="selectedCategory" @change="updateCategoryFilter">
          <option value="Toutes">Toutes</option>
          <option v-for="category in uniqueCategories" :key="category">{{ category }}</option>
        </select>
      </div>

      <!-- ordre alphabétique -->
      <div class="col-md-2 mb-3">
        <label for="alphabeticalOrder" class="form-label">Ordre alphabétique:</label>
        <select class="form-select" id="alphabeticalOrder" v-model="selectedAlphabeticalOrder" @change="updateAlphabeticalOrderFilter">
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </div>

      <!-- prix -->
      <div class="col-md-2 mb-3">
        <label for="priceOrder" class="form-label">Prix:</label>
        <select class="form-select" id="priceOrder" v-model="selectedPriceOrder" @change="updatePriceOrderFilter">
          <option value="asc">Croissant</option>
          <option value="desc">Décroissant</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia';
import { useArticlesStore } from '@/stores/articles';

export default {
  data() {
    return {
      selectedCategory: 'Toutes',
      selectedAlphabeticalOrder: 'asc',
      selectedPriceOrder: 'asc',
    };
  },
  computed: {
    ...mapState(useArticlesStore, ['articles']),
    //catégories uniques
    //catégories de la liste des articles
    uniqueCategories() {
      return [...new Set(this.articles.map(article => article.category))];
    },
  },
  methods: {
    updateCategoryFilter() {
    useArticlesStore().setCategoryFilter(this.selectedCategory);
    },
    updateAlphabeticalOrderFilter() {
      useArticlesStore().setAlphabeticalOrderFilter(this.selectedAlphabeticalOrder);
    },
    updatePriceOrderFilter() {
      useArticlesStore().setPriceOrderFilter(this.selectedPriceOrder);
    },
  },
};
</script>
