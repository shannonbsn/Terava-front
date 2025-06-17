<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/userStore'

const router = useRouter()
const userStore = useUserStore()

const step = ref(1)
const active = ref(0)

const formData = reactive({
  phone: '',
  firstname: '',
  lastname: '',
  gender: null,
  files: [],
  research: ''
})

const files = ref([
  {
    url: 'https://varletjs.org/cat.jpg',
    cover: 'https://varletjs.org/cat.jpg'
  }
])

function nextStep() {
  if (step.value === 4) {
    submitForm()
  } else {
    active.value = (active.value + 1) % 4
    step.value++
  }
}

async function submitForm() {
  const userPayload = {
    username: formData.firstname.toLowerCase() + '.' + formData.lastname.toLowerCase(),
    email: formData.phone + '@exemple.com',
    password: 'password-temporaire',
    accept_policy: true
  }
  console.log('Payload envoyé :', userPayload)

  const success = await userStore.register(userPayload)

  if (success) {
    router.push('/board')
  } else {
    alert(userStore.error)
  }
}
</script>

<template>
  <div class="content flex column">
    <var-steps :active="active">
      <var-step>Step1</var-step>
      <var-step>Step2</var-step>
      <var-step>Step3</var-step>
      <var-step>Step4</var-step>
    </var-steps>

    <transition name="slide-fade" mode="out-in">
      <div class="form-wrapper" :key="step">
        <template v-if="step === 1">
          <h2 class="heading">Quel est ton numéro de téléphone ? </h2>
          <var-input placeholder="Téléphone" :rules="v => !!v || 'Le téléphone est requis'" v-model="formData.phone" />
          <button class="btn blue simple-icon" @click="nextStep">
            <img src="../../assets/arrow-right.svg">
          </button>
        </template>

        <template v-else-if="step === 2">
          <h2 class="heading">Ton identité</h2>
          <var-space direction="column" :size="[14, 0]">
            <var-input placeholder="Prénom" :rules="v => !!v || 'Le prénom est requis'" v-model="formData.firstname" />
            <var-input placeholder="Nom" :rules="v => !!v || 'Le nom est requis'" v-model="formData.lastname" />
            <var-radio-group :rules="v => !!v || 'Le genre est requis'" v-model="formData.gender">
              <var-radio :checked-value="1">Homme</var-radio>
              <var-radio :checked-value="2">Femme</var-radio>
            </var-radio-group>
          </var-space>
          <button class="btn blue simple-icon" @click="nextStep">
            <img src="../../assets/arrow-right.svg">
          </button>
        </template>

        <template v-else-if="step === 3">
          <h2 class="heading">Ajoute une photo de profil</h2>
          <var-uploader v-model="files" />
          <button class="btn blue simple-icon" @click="nextStep">
            <img src="../../assets/arrow-right.svg">
          </button>
        </template>

        <template v-else-if="step === 4">
          <h2 class="heading">Que recherches-tu ?</h2>
          <textarea placeholder="Je recherche..." v-model="formData.research" />
          <button class="btn blue simple-icon" @click="nextStep">
            <img src="../../assets/arrow-right.svg">
          </button>
        </template>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(.55, 0, .1, 1);
}
.slide-fade-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
textarea {
  width: 100%;
  height: 50vh;
  padding: 20px;
  border: none;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.4);
  resize: none;
  font-size: 1.2em;
  line-height: 1.3em;
  font-family: 'Inter UI', sans-serif;
  color: #5a5a5a;
}
.content {
  position: relative;
  margin-top: 100px;
}
.form-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 2;
}
.simple-icon {
  position: absolute;
  bottom: 0;
  align-self: center;
}
</style>
