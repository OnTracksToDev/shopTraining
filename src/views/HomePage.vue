<template>
  <div class="container-fluid p-0">
    <!-- Header -->
    <header class="custom-header text-center mb-5">
      <h1 class="display-3 font-weight-bold">Bienvenue dans notre boutique en ligne</h1>
      <router-link :to="{ name: 'Articles' }" class="btn btn-warning btn-lg mt-3">
        <p class="lead">Découvrez nos produits de haute qualité</p>
      </router-link>
    </header>

    <!-- À propos de nous -->
    <section class="text-center mb-5">
      <h2 class="mb-4">À propos de nous</h2>
      <div class="card mx-auto mb-5" style="width: 300px;">
        <img src="@/assets/images/decologo.png" class="card-img-top rounded-circle" alt="Deco Logo">
        
      </div>
          <p class="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
    </section>

    <!-- Services -->
    <section class="text-center mb-5">
      <h2 class="mb-4">Nos Services</h2>
      <p class="lead">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </section>

    <!-- Produits populaires -->
    <section class="text-center mb-5">
      <h2 class="mb-4">Produits populaires</h2>
      <p class="lead">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </section>

    <!-- Contact -->
    <section class="text-center mb-5">
      <h2 class="mb-4">Contactez-nous</h2>
      <p class="lead">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <a href="#" class="btn btn-primary">Nous contacter</a>
    </section>
  </div>
</template>

<style scoped>
.custom-header {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url('https://cdn.pixabay.com/photo/2016/04/18/13/53/room-1336497_1280.jpg');
  background-size: cover;
  background-position: center;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}

.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.card:hover {
  transform: scale(1.05);
}
</style>
