<script>
export default {
  name: 'MainLayout'
}
</script>
<template>
  <header>
    <slot name="header"></slot>
  </header>
  <div class="container">
    <main>
      <slot></slot>
    </main>
  </div>
  <footer>
    <slot name="footer"></slot>
  </footer>
</template>
