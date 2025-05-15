<script setup>
import { reactive, ref } from 'vue'

const step = ref(1)

const active = ref(0)

function next() {
}

const formData = reactive({
  phone: '',
  firstname: '',
  lastname: '',
  gender: undefined,
  files: [],
  research: ''
})
const form = ref(null)
const disabled = ref(false)
const readonly = ref(false)
const infoUser = ref(false)

function nextStep() {
  active.value = (active.value + 1) % 4
  step.value++
}

const files = ref([
  {
    url: 'https://varletjs.org/cat.jpg',
    cover: 'https://varletjs.org/cat.jpg'
  },
  {
    url: 'https://www.runoob.com/try/demo_source/mov_bbb.mp4',
    cover: 'https://varletjs.org/cover.jpg'
  }
])
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
      <div :key="step">
        <template v-if="step === 1">
          <h2 class="heading">Quel est ton numéro de téléphone ? </h2>
          <var-input placeholder="Téléphone" :rules="v => !!v || 'Le téléphone ne peut pas être vide'"
            v-model="formData.phone" />
          <button class="btn blue simple-icon" @click="nextStep">
            <img src="../../assets/arrow-right.svg">
          </button>
        </template>
        <template v-else-if="step === 2">
          <h2 class="heading">Ton identité</h2>
          <var-space direction="column" :size="[14, 0]">
            <var-input placeholder="Prénom" :rules="v => !!v || 'Le prénom ne peut pas être vide'"
              v-model="formData.firstname" />
            <var-input placeholder="Nom" :rules="v => !!v || 'Le nom ne peut pas être vide'"
              v-model="formData.lastname" />
            <var-radio-group :rules="v => !!v || 'The gender cannot be empty'" v-model="formData.gender">
              <var-radio :checked-value="1">Male</var-radio>
              <var-radio :checked-value="2">Female</var-radio>
            </var-radio-group>
            <button class="btn blue simple-icon" @click="nextStep">
              <img src="../../assets/arrow-right.svg">
            </button>
          </var-space>
        </template>
        <template v-else-if="step === 3">
          <h2 class="heading">Ajoute une photo de profil pour que les autres voyageurs puissent mieux te connaître !
          </h2>
          <var-uploader v-model="files" />
          <button class="btn blue simple-icon" @click="nextStep">
            <img src="../../assets/arrow-right.svg">
          </button>
        </template>
        <template v-else-if="step === 4">
          <h2 class="heading">Que recherches-tu sur Terava ?
          </h2>
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
  height: 500px;
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

.content{
  position: relative;
}

.btn.simple-icon {
  position: absolute;
  bottom:30%;
}

</style>
