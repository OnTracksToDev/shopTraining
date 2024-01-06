<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    }
  },
  methods: {
    goToPage(page) {
      if (page !== this.currentPage) {
        this.$emit('page-change', page)
      }
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.goToPage(this.currentPage - 1)
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.goToPage(this.currentPage + 1)
      }
    }
  }
}
</script>

<template>
    <div class="d-flex justify-content-center">
      <nav aria-label="Page navigation">
        <ul class="pagination">
          <li :class="{ disabled: currentPage === 1 }" class="page-item">
            <button @click="goToPage(1)" class="page-link page-link-custom" aria-label="First">
              <span aria-hidden="true">&laquo;&laquo;</span>
            </button>
          </li>
          <li :class="{ disabled: currentPage === 1 }" class="page-item">
            <button @click="previousPage" class="page-link page-link-custom" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>
  
          <li
            v-for="page in totalPages"
            :key="page"
            :class="{ active: currentPage === page }"
            class="page-item"
          >
            <button @click="goToPage(page)" class="page-link page-link-custom">{{ page }}</button>
          </li>
  
          <li :class="{ disabled: currentPage === totalPages }" class="page-item">
            <button @click="nextPage" class="page-link page-link-custom" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
          <li :class="{ disabled: currentPage === totalPages }" class="page-item">
            <button @click="goToPage(totalPages)" class="page-link page-link-custom" aria-label="Last">
              <span aria-hidden="true">&raquo;&raquo;</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </template>
  

<style>
.pagination li {
  margin: 0 3px;
}
.pagination a {
    cursor: pointer;
}


</style>
