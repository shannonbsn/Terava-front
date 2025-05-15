<script setup>
import router from '@/router';
import { h, ref } from 'vue'
import { useRoute } from 'vue-router'
</script>
<template>
  <footer>
    <div class="footer-wrapper flex">
      <router-link to="/" class="nav-icon">
        <img src="../assets/home-icon.svg" alt="Icone homepage" />
      </router-link>
      <router-link to="/" class="nav-icon">
        <img src="../assets/travel-icon.svg" alt="Icone homepage" />
      </router-link>
      <router-link to="/" class="nav-icon">
        <img src="../assets/messenger-icon.svg" alt="Icone homepage" />
      </router-link>
      <router-link to="/" class="nav-icon">
        <img src="../assets/home-icon.svg" alt="Icone homepage" />
      </router-link>
    </div>
  </footer>
</template>

<style scoped>
footer{
  position: sticky;
  bottom: 0;
  background:#fff;
  height: 80px;
}

.footer-wrapper {
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
}
</style>
