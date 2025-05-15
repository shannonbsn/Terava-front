<script setup>
import TheHeader from '@/components/TheHeader.vue';
import ProfilCompatibles from '@/components/account/ProfilCompatibles.vue';
import { onMounted, onUnmounted } from 'vue'

const bodyClass = 'onboarding-view'

onMounted(() => {
  document.body.classList.add(bodyClass)
})

onUnmounted(() => {
  document.body.classList.remove(bodyClass)
})
</script>

<template>
  <TheHeader />
  <main>
    <ProfilCompatibles />
  </main>
</template>
