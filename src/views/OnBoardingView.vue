<script setup>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import BlockCompatibles from '@/components/account/BlockCompatibles.vue';
import SearchForm from '@/components/onboarding/SearchForm.vue';
import CurrentStatus from '@/components/onboarding/CurrentStatus.vue';
import { RouterLink } from 'vue-router';
import { onMounted, onUnmounted, reactive, ref } from 'vue'

const bodyClass = 'onboarding-view'

onMounted(() => {
  document.body.classList.add(bodyClass)
})

onUnmounted(() => {
  document.body.classList.remove(bodyClass)
})

const cardsArray = [
  { name: 'Grèce', image: new URL('../assets/thumbnail-grece.jpg', import.meta.url).href },
  { name: 'Brésil', image: new URL('../assets/thumbnail-ponta.jpg', import.meta.url).href },
  { name: 'Maroc', image: new URL('../assets/thumbnail-maroc.jpg', import.meta.url).href },
  { name: 'Brésil', image: new URL('../assets/thumbnail-caldeira.jpg', import.meta.url).href }
]
</script>

<template>
  <TheHeader />
  <main class="grid">
    <CurrentStatus/>
    <div class="navigation--block">
      <SearchForm/>
    </div>
    <BlockCompatibles headline="Mes voyages prévus" :larger="true" :cards="cardsArray" />
    <RouterLink to="/match" class="navigation--block meetings">
      <h2>Rencontrer des voyageurs</h2>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="lucide lucide-waypoints-icon lucide-waypoints">
        <circle cx="12" cy="4.5" r="2.5" />
        <path d="m10.2 6.3-3.9 3.9" />
        <circle cx="4.5" cy="12" r="2.5" />
        <path d="M7 12h10" />
        <circle cx="19.5" cy="12" r="2.5" />
        <path d="m13.8 17.7 3.9-3.9" />
        <circle cx="12" cy="19.5" r="2.5" />
      </svg>
      <div class="users--wrapper flex">
        <div class="thumbnail"><img src="../assets/profil-bertrand.jpg" alt="Photo profil" /></div>
        <div class="thumbnail"><img src="../assets/profil-katerina.jpg" alt="Photo profil" /></div>
        <div class="thumbnail"><img src="../assets/profil-joyce.jpg" alt="Photo profil" /></div>
        <div class="thumbnail"><img src="../assets/profil-jorge.jpg" alt="Photo profil" /></div>
        <div class="thumbnail"><img src="../assets/profil-layla.jpg" alt="Photo profil" /></div>
      </div>

    </RouterLink>
    <div class="navigation--block">
      <h2>Organiser un voyage</h2>
      <RouterLink to="/travel/create">
        <button class="btn blue large">Créer un voyage</button>
      </RouterLink>
      <RouterLink to="/travel/create">
        <button class="btn blue outline large">Gérer mes voyages</button>
      </RouterLink>
    </div>

  </main>
  <TheFooter />
</template>

<style scoped>
main {
  margin-bottom: 30px;
  gap: 20px;
}

a {
  text-decoration: none;
}

h2{
  margin:0;
  align-self: flex-start;
  font-size: 18px;
}

.navigation--block {
  border-radius: 10px;
  align-self: stretch;
  display: flex;
  gap:15px;
  flex-direction: column;
  justify-content: flex-start;
  padding: 5px;
  box-sizing: border-box;
  width: 100%;
}

.navigation--block:not(:last-child){
  padding-bottom: 30px;
  border-bottom: 1px solid var(--grey-medium);
}

.users--wrapper .thumbnail{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-left: -10px;
}

.users--wrapper .thumbnail img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.meetings{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
}

</style>
