<!-- eslint-disable vue/multi-word-component-names -->
<script setup></script>
<template>
  <section class="section">
    <div
      id="carouselExampleInterval"
      class="carousel slide overflow-hidden object-cover banner"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <img
            src="../assets/images/banner-new.png"
            class="d-block w-100 banner"
            style="object-fit: cover"
            alt="..."
          />
        </div>
        <div class="carousel-item" data-bs-interval="10000">
          <img
            src="../assets/images/banner-new.png"
            class="d-block w-100 banner"
            style="object-fit: cover"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="../assets/images/banner-new.png"
            class="d-block w-100 banner"
            style="object-fit: cover"
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </section>
</template>
<style scoped>
.banner {
  height: 250px;
}

@media (min-width: 992px) {
  .banner {
    height: 400px;
  }
}
</style>
