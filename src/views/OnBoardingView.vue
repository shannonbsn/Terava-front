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
    <div class="info-traveller">
      <h3>Localisation actuelle</h3>
      <span>Madagascar</span>
    </div>
    <div class="navigation--block">
      <h2>Chercher un voyage</h2>
      <var-form ref="form" :disabled="disabled" :readonly="readonly" scroll-to-error="start">
        <var-space direction="column" :size="[14, 0]">
          <var-input placeholder="Please input username" :rules="v => !!v || 'The username cannot be empty'"
            v-model="formData.username" />
          <var-input type="password" placeholder="Please input password"
            :rules="[v => !!v || 'The password cannot be empty', (v) => v.length >= 8 || 'The password cannot be less than 8 characters']"
            v-model="formData.password" />
          <var-select placeholder="Please select department" :rules="v => !!v || 'The select cannot be empty'"
            v-model="formData.department">
            <var-option label="Eat department" />
            <var-option label="Sleep department" />
            <var-option label="Play game department" />
          </var-select>
        </var-space>
      </var-form>
    </div>
    <BlockCompatibles headline="Mes voyages" :larger="true" />

    <router-link to="/travel/create" class="navigation--block">
      <h2>Organiser un voyage</h2>
    </router-link>
    <router-link to="/matching" class="navigation--block">
      <h2>Rencontrer</h2>
    </router-link>
  </main>
  <TheFooter />
</template>

<style scoped>
main {
  grid-template-rows: auto,repeat(3, 1fr);
  gap: 20px;
}

a {
  text-decoration: none;
}

.info-traveller{
  padding: 20px;
  border-radius: 10px;
  background: var(--orange);
}

.navigation--block {
  /* background-color: var(--blue-lighter); */
  border:1px solid var(--blue-light);
  border-radius: 10px;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* align-items: center; */
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
}
</style>
