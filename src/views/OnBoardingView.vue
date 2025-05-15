<script setup>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import BlockCompatibles from '@/components/account/BlockCompatibles.vue';
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
  <main class="flex column">
    <BlockCompatibles />
    <BlockCompatibles />
    <BlockCompatibles />
    <button class="btn blue" @click="$router.push('/home')">Créer voyage</button>
  </main>
  <TheFooter />
</template>

<style scoped>
main {
  gap:30px;
  align-items: center;
  width: 100%;
}
</style>

