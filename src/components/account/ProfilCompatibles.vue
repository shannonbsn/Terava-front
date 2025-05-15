<script setup>
import router from '@/router';
import Swiper from 'swiper';


const swiper = new Swiper('.cards-list', {
  slidesPerView: 2,
  spaceBetween: 10,
});


</script>
<template>
  <div class="wrapper">
    <div class="subtitle flex">
      <h2>Profils compatibles</h2>
      <a href="#" class="see-all">Voir plus</a>
    </div>
    <div class="swiper cards-list">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide card">
          <img class="" src="../../assets/profil-layla.jpg">
          <span class="name">Layla</span>
        </div>
        <div class="swiper-slide card">
          <img class="" src="../../assets/profil-layla.jpg">
          <span class="name">Layla</span>
        </div>
        <div class="swiper-slide card">
          <img class="" src="../../assets/profil-layla.jpg">
          <span class="name">Layla</span>
        </div>
      </div>
      <!-- If we need pagination -->
      <div class="swiper-pagination"></div>

      <!-- If we need scrollbar -->
      <div class="swiper-scrollbar"></div>
    </div>
  </div>
</template>

<style scoped>

.swiper {
  width: 100%;
  height: 100%;
}
.card{
  width:128px;
  height:150px;
  position:relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 4px 10px 0px #00000040;
}

.card img{
  width:100%;
  height:100%;
  object-fit: cover;
}

.card .name{
  position:absolute;
  left: 10px;
  bottom: 10px;
  color:white;
  font-weight: 700;
}
</style>
