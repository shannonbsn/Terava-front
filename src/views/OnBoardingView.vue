<script setup>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import BlockCompatibles from '@/components/account/BlockCompatibles.vue';
import { RouterLink } from 'vue-router';
import { onMounted, onUnmounted, reactive, ref } from 'vue'

const bodyClass = 'onboarding-view'

onMounted(() => {
  document.body.classList.add(bodyClass)
})

onUnmounted(() => {
  document.body.classList.remove(bodyClass)
})

const formData = reactive({
  username: '',
  password: '',
  department: '',
  gender: undefined,
  license: false,
  range: 10,
  count: 0,
  group: [],
  score: 0,
  like: [],
  files: []
})
const form = ref(null)
const disabled = ref(false)
const readonly = ref(false)

</script>

<template>
  <TheHeader />
  <main class="grid">
    <div class="info-traveller flex">
      <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="lucide lucide-map-pin-icon lucide-map-pin">
          <path
            d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
          <circle cx="12" cy="10" r="3" />
        </svg> Madagascar</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="lucide lucide-pencil-icon lucide-pencil">
        <path
          d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
        <path d="m15 5 4 4" />
      </svg>
    </div>
    <div class="navigation--block">
      <h2>Chercher un voyage</h2>
      <var-form ref="form" :disabled="disabled" :readonly="readonly" scroll-to-error="start">
        <var-space direction="column" :size="[14, 0]">
          <var-input placeholder="Mots-clefs" v-model="formData.keyword" />
          <var-select placeholder="Choisir un pays" v-model="formData.country">
            <var-option label="France" />
            <var-option label="Pologne" />
            <var-option label="Brésil" />
          </var-select>
          <var-input placeholder="Chercher une ville" v-model="formData.city" />
        </var-space>
      </var-form>
    </div>
    <BlockCompatibles headline="Mes voyages prévus" :larger="true" />
    <RouterLink to="/matching" class="navigation--block meetings">
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
  grid-template-rows: auto,repeat(4, 1fr);
  gap: 20px;
}

a {
  text-decoration: none;
}

h2{
  margin:0;
}

.info-traveller{
  padding: 15px;
  justify-content: space-between;
  border-radius: 10px;
  background: var(--orange);
  color: #fff;
}

.info-traveller span{
  display: flex;
  align-items: center;
  gap: 10px;
}

.navigation--block {
  /* border:1px solid var(--blue-light); */
  border-radius: 10px;
  align-self: stretch;
  display: flex;
  gap:15px;
  flex-direction: column;
  justify-content: flex-start;
  padding: 5px 20px;
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
