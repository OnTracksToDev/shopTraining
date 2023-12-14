<script>
import { usePanierStore } from '@/stores/panier'
import { mapState } from 'pinia'

export default {
  name: 'MainNav',
  props: {
    navItems: {
      type: Array,
      required: false,
      default: function () {
        return null
      }
    },
    userNavItems: {
      type: Array,
      required: false,
      default: function () {
        return null
      }
    }
  },
  computed: {
    ...mapState(usePanierStore, ['nombreTotalArticles'])
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">
        <img
          src="../../assets/images/decologo.png"
          alt="Logo"
          width="60"
          height="60"
          class="d-inline-block align-text-top rounded-circle"
        />
      </RouterLink>

      <div>
        <div>
          <RouterLink to="/panier" class="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M5.525 21q-.675 0-1.2-.413T3.6 19.525l-2.55-9.25Q.925 9.8 1.213 9.4T2 9h4.75l4.4-6.55q.125-.2.35-.325T11.975 2q.25 0 .475.125t.35.325L17.2 9H22q.5 0 .788.4t.162.875l-2.55 9.25q-.2.65-.725 1.063t-1.2.412zM12 17q.825 0 1.413-.587T14 15q0-.825-.587-1.412T12 13q-.825 0-1.412.588T10 15q0 .825.588 1.413T12 17M9.175 9H14.8l-2.825-4.2z"
              />
            </svg>
            <span v-if="nombreTotalArticles > 0" class="badge bg-danger rounded-circle ml-1">
              {{ nombreTotalArticles }}
            </span>
          </RouterLink>
        </div>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto">
          <li v-for="(item, index) in navItems" :key="index">
            <RouterLink
              :to="item.link ? item.link : '#'"
              :class="item.class ? item.class : null"
              :target="item.target ? item.target : '_self'"
              class="nav-link"
            >
              {{ item.name ? item.name : 'link' }}
            </RouterLink>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown link
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li v-for="(item, index) in userNavItems" :key="index">
                <RouterLink
                  :to="item.link ? item.link : '#'"
                  :class="item.class ? item.class : null"
                  :target="item.target ? item.target : '_self'"
                  class="dropdown-item"
                >
                  {{ item.name ? item.name : 'link' }}
                </RouterLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
