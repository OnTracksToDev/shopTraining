<script>
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
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Image</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li v-for="(item, index) in navItems" :key="index">
            <a :href="item.link ? item.link : '#'" :class="item.class ? item.class : null"
              :target="item.target ? item.target : '_self'" class="nav-link">
              {{ item.name ? item.name : 'link' }}
            </a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown link
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li v-for="(item, index) in userNavItems" :key="index">
                <a :href="item.link ? item.link : '#'" :class="item.class ? item.class : null"
                  :target="item.target ? item.target : '_self'" class="dropdown-item">
                  {{ item.name ? item.name : 'link' }}
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
