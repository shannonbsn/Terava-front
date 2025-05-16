<script setup>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import BlockCompatibles from '@/components/account/BlockCompatibles.vue';
import SearchForm from '@/components/onboarding/SearchForm.vue';
import CurrentStatus from '@/components/onboarding/CurrentStatus.vue';
import MeetTravellers from '@/components/onboarding/MeetTravellers.vue';
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
      <MeetTravellers/>
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

.meetings {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
}
</style>
