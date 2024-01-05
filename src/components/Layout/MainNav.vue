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
            <svg height="30" viewBox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m10.5 17h14c.278 0 .5.223.5.5s-.222.5-.5.5h-14c-.276 0-.5-.223-.5-.5s.224-.5.5-.5zm-1-4h16c.278 0 .5.223.5.5s-.222.5-.5.5h-16c-.276 0-.5-.223-.5-.5s.224-.5.5-.5zm-9-8c-.653 0-.67 1 0 1h3.6c.078.346.64 2.81 1.312 5.736.717 3.126 1.452 7.32 1.606 7.893.132.494.255 1.055.62 1.544.362.488 1 .826 1.862.826h16c.86 0 1.5-.338 1.863-.826.364-.49.487-1.05.62-1.545.265-.993 1.62-6.944 1.89-7.952.152-.566.202-1.156.022-1.69s-.72-.988-1.395-.988h-20c-.653 0-.66 1 0 1h20c.325 0 .366.07.447.31.08.238.076.674-.04 1.108-.267.992-1.62 6.945-1.89 7.953-.135.506-.262.945-.456 1.206-.194.262-.42.424-1.06.424h-16c-.64 0-.866-.162-1.06-.424-.195-.26-.322-.7-.458-1.205-.114-.426-.88-4.732-1.595-7.856-.717-3.125-1.4-6.125-1.4-6.125-.05-.229-.253-.389-.488-.389zm23 18c-1.373 0-2.5 1.125-2.5 2.5s1.127 2.5 2.5 2.5c1.376 0 2.5-1.125 2.5-2.5s-1.123-2.5-2.5-2.5zm0 1c.836 0 1.5.666 1.5 1.5s-.664 1.5-1.5 1.5c-.833 0-1.5-.666-1.5-1.5s.667-1.5 1.5-1.5zm-12-1c-1.372 0-2.5 1.125-2.5 2.5s1.127 2.5 2.5 2.5c1.376 0 2.5-1.125 2.5-2.5s-1.123-2.5-2.5-2.5zm0 1c.836 0 1.5.666 1.5 1.5s-.664 1.5-1.5 1.5c-.833 0-1.5-.666-1.5-1.5s.667-1.5 1.5-1.5z"
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
