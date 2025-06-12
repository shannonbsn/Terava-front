<script setup>
import { ref } from 'vue'

// Variable pour contrôler l'affichage du formulaire
const showSignUpForm = ref(false)

// Fonction pour afficher le formulaire d'inscription
function creerCompte() {
  showSignUpForm.value = true
}

// Fonction pour revenir à l'écran principal
function retour() {
  showSignUpForm.value = false
}

// Données du formulaire d'inscription
const formData = ref({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  acceptPolicy: false
})

const errors = ref({})

// Validation du formulaire
function validateForm() {
  errors.value = {}

  if (!formData.value.username) {
    errors.value.username = 'Le nom d\'utilisateur est requis'
  }
  
  if (!formData.value.email || !/\S+@\S+\.\S+/.test(formData.value.email)) {
    errors.value.email = 'Un email valide est requis'
  }

  if (!formData.value.password || formData.value.password.length < 6) {
    errors.value.password = 'Le mot de passe doit contenir au moins 6 caractères'
  }

  if (formData.value.password !== formData.value.confirmPassword) {
    errors.value.confirmPassword = 'Les mots de passe ne correspondent pas'
  }

  if (!formData.value.acceptPolicy) {
    errors.value.acceptPolicy = 'Vous devez accepter la politique de confidentialité'
  }

  if (Object.keys(errors.value).length === 0) {
    alert('Compte créé avec succès !')
  }
}
</script>

<template>
  <div class="content flex column">
    <!-- Affichage de l'écran principal -->
    <template v-if="!showSignUpForm">
      <div class="brand">
        <div class="logo">
          <img src="../../assets/logo.svg" alt="Logo Terava" />
        </div>
        <h1 class="slogan">SLOGAN/PROMESSE</h1>
      </div>
      <div class="buttons-wrapper flex column">
        <button class="btn outline icon" @click="creerCompte">
          <img src="../../assets/apple-icon.svg" alt="Icone apple"> S'inscrire avec Apple
        </button>
        <button class="btn outline icon" @click="creerCompte">
          <img src="../../assets/facebook-icon.svg" alt="Icone facebook"> S'inscrire avec Facebook
        </button>
        <button class="btn outline icon" @click="creerCompte">S'inscrire avec Google</button>
        <button class="btn outline icon" @click="creerCompte">
          <img src="../../assets/mail-icon.svg" alt="Icone Email"> S'inscrire avec Email
        </button>
      </div>
      <a href="" class="back" @click="retour">Retour</a>
    </template>

    <!-- Affichage du formulaire de création de compte -->
    <template v-else>
      <h2>Créer un compte</h2>
      <form @submit.prevent="validateForm">
        <var-input placeholder="Nom d'utilisateur" v-model="formData.username"/>
        <p v-if="errors.username" class="error">{{ errors.username }}</p>

        <var-input type="email" placeholder="Email" v-model="formData.email"/>
        <p v-if="errors.email" class="error">{{ errors.email }}</p>

        <var-input type="password" placeholder="Mot de passe" v-model="formData.password"/>
        <p v-if="errors.password" class="error">{{ errors.password }}</p>

        <var-input type="password" placeholder="Confirmer le mot de passe" v-model="formData.confirmPassword"/>
        <p v-if="errors.confirmPassword" class="error">{{ errors.confirmPassword }}</p>

        <var-checkbox v-model="formData.acceptPolicy">J'accepte la politique de confidentialité</var-checkbox>
        <p v-if="errors.acceptPolicy" class="error">{{ errors.acceptPolicy }}</p>

        <button type="submit" class="btn blue">Créer un compte</button>
      </form>
      <button class="btn outline" @click="retour">Retour</button>
    </template>
  </div>
</template>

<style scoped>
.brand{
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

.btn{
  color:#000;
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
