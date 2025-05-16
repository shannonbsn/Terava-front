<script setup>
import Login from '@/components/login/Login.vue'
import { onMounted, onUnmounted } from 'vue'
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import CurrentStatus from '@/components/onboarding/CurrentStatus.vue';
import { RouterLink } from 'vue-router';

const bodyClass = 'account-view'

onMounted(() => {
  document.body.classList.add(bodyClass)
})

onUnmounted(() => {
  document.body.classList.remove(bodyClass)
})

let imgUrl = new URL('../../assets/thumbnail-poca.jpg', import.meta.url).href
</script>

<template>
  <TheHeader />
  <main class="grid">
    <div class="info-user--wrapper flex">
      <div class="thmb-circle img-wrapper">
        <img src="../../assets/profil-joyce.jpg" />
      </div>
      <div class="col-right">
        <p class="name">Nom du compte</p>
        <p>Nom utilisateur</p>
      </div>

    </div>
    <CurrentStatus />
    <div class="content">
      <hr>
      <h2>Prochain voyage</h2>
      <div class="next-trip card" :style="{ background: 'url(' + imgUrl + ')' }">
        <span class="name">Voyage</span>
      </div>
      <hr>
      <h3>Vos derniers voyages</h3>
      <div class="last-trip cards--list">
        <div class="card" :style="{ backgroundImage: 'url('+ imgUrl +')' }">
          <span class="name">Voyage</span>
        </div>
      </div>
      <hr>
      <h2>Mon Dashboard</h2>
      <nav>
        <ul>
          <RouterLink to="/profil">
            <li>Mon profil</li>
          </RouterLink>
          <RouterLink to="/mytrips">
            <li>Gérer mes voyages</li>
          </RouterLink>
          <RouterLink to="/infos">
            <li>Gérer mes informations</li>
          </RouterLink>
          <RouterLink to="/addressbook">
            <li>Carnet d'adresse</li>
          </RouterLink>
        </ul>
      </nav>
    </div>
  </main>
  <TheFooter />
</template>

<style scoped>

.content{
  margin-bottom: 30px;
}

h2{
  margin-top:20px;
  margin-bottom: 20px;
}

h3{
  margin-top: 10px;
  margin-bottom: 10px;
}

.thmb-circle {
  width: 80px;
  height: 80px;
  border: 3px solid #000;
}

.thmb-circle img {
  height: 100%;
  object-fit: cover;
}

.info-user--wrapper {
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-bottom: 20px;
}

p {
  margin: 0;
}

.name {
  font-weight: 600;
  font-size: 24px;
  margin: 0;
}

.card {
  height: 120px;
  width: 100%;
  position: relative;
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  box-shadow: 0px 4px 10px 0px #00000040;
}

.card .name {
  position: absolute;
  left: 10px;
  bottom: 10px;
  color: white;
  font-weight: 700;
}

.last-trip .card::before{
  content:'';
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(255,255,255,0.5);
  left: 0;
  top: 0;
  z-index: 10;
}

.last-trip .card .name{
  z-index: 10;
}
</style>
