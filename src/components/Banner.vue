<!-- eslint-disable vue/multi-word-component-names -->
<script setup></script>
<template>
  <section class="section">
    <div
      id="carouselExampleInterval"
      class="carousel slide overflow-hidden object-cover"
      style="height: 250px"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <img
            src="https://cdn.pixabay.com/photo/2023/06/26/02/57/man-8088588_640.jpg"
            class="d-block w-100"
            style="object-fit: cover; height: 250px"
            alt="..."
          />
        </div>
        <div class="carousel-item" data-bs-interval="10000">
          <img
            src="https://cdn.pixabay.com/photo/2023/06/16/13/30/md500-8068034_1280.jpg"
            class="d-block w-100"
            style="object-fit: cover; height: 250px"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://cdn.pixabay.com/photo/2023/06/18/04/57/crimson-collared-tanager-8071235_640.jpg"
            class="d-block w-100"
            style="object-fit: cover; height: 250px"
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
