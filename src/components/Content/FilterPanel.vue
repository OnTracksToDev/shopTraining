<template>
    <div class="filter-panel container mt-4">
      <h3 class="mb-3">Filtrer les articles :</h3>
  
      <div class="row">
        <!-- catégorie -->
        <div class="col-md-2 mb-3">
          <label for="category" class="form-label">Catégorie:</label>
          <select class="form-select" id="category">
            <option selected>Toutes</option>
            <option>category</option>
          </select>
        </div>
  
        <!-- ordre alphabétique -->
        <div class="col-md-2 mb-3">
          <label for="alphabeticalOrder" class="form-label">Ordre alphabétique:</label>
          <select class="form-select" id="alphabeticalOrder">
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>
        </div>
  
        <!-- prix -->
        <div class="col-md-2 mb-3">
          <label for="priceOrder" class="form-label">Prix:</label>
          <select class="form-select" id="priceOrder">
            <option value="asc">Croissant</option>
            <option value="desc">Décroissant</option>
          </select>
        </div>
      </div>
    </div>
  </template>
  