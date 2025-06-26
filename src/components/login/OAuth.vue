<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()
const showSignUpForm = ref(false)

const formData = ref({
  email: '',
  password: '',
})

const errors = ref({})
const userStore = useUserStore()

function creerCompte() {
  showSignUpForm.value = true
}

function retour() {
  showSignUpForm.value = false
}

async function validateForm() {
  errors.value = {}

  if (!formData.value.email || !/\S+@\S+\.\S+/.test(formData.value.email)) {
    errors.value.email = 'Email invalide'
  }

  if (!formData.value.password || formData.value.password.length < 6) {
    errors.value.password = 'Mot de passe requis (6 caractères minimum)'
  }

  if (Object.keys(errors.value).length === 0) {
    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        email: formData.value.email,
        password: formData.value.password,
      })

      const user = response.data?.user
      if (user) {
        await userStore.setUser(user)
        router.push('/board')
      } else {
        errors.value.email = 'Erreur inconnue, veuillez réessayer.'
      }
    } catch (err) {
      if (err.response?.status === 401) {
        errors.value.email = 'Email ou mot de passe incorrect'
        errors.value.password = 'Email ou mot de passe incorrect'
      } else {
        console.error('Erreur serveur :', err)
        alert('Erreur technique lors de la connexion.')
      }
    }
  }
}
</script>

<template>
  <div class="content flex column">
    <template v-if="!showSignUpForm">
      <div class="brand">
        <div class="logo">
          <img src="../../assets/logo.svg" alt="Logo Terava" />
        </div>
        <h1 class="slogan">Votre compagnon de voyage fiable !</h1>
      </div>
      <div class="buttons-wrapper flex column">
        <button class="btn outline icon" @click="creerCompte">
          <img src="../../assets/apple-icon.svg" alt="Icone apple" /> S'inscrire avec Apple
        </button>
        <button class="btn outline icon" @click="creerCompte">
          <img src="../../assets/facebook-icon.svg" alt="Icone facebook" /> S'inscrire avec Facebook
        </button>
        <button class="btn outline icon" @click="creerCompte">S'inscrire avec Google</button>
        <button class="btn outline icon" @click="creerCompte">
          <img src="../../assets/mail-icon.svg" alt="Icone Email" /> S'inscrire avec Email
        </button>
      </div>
      <a href="" class="back" @click="retour">Retour</a>
    </template>

    <template v-else>
      <h2>Se connecter</h2>
      <form @submit.prevent="validateForm">
        <var-input type="email" placeholder="Email" v-model="formData.email" />
        <p v-if="errors.email" class="error">{{ errors.email }}</p>

        <var-input type="password" placeholder="Mot de passe" v-model="formData.password" />
        <p v-if="errors.password" class="error">{{ errors.password }}</p>

        <button type="submit" class="btn blue">Se connecter</button>
      </form>
      <button class="btn outline" @click="retour">Retour</button>
    </template>
  </div>
</template>

<style scoped>
.brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  width: 218px;
  display: flex;
  justify-content: center;
}

.logo img {
  width: 100%;
}

.buttons-wrapper {
  gap: 10px;
}

.btn {
  color: #000;
  width: 270px;
}

.btn.outline {
  border-color: var(--orange);
}

.error {
  color: red;
  font-size: 0.9em;
}
</style>
