<script setup>

</script>
<template>
  <div class="accueil">
    <div class="logo">
      <img src="../../assets/logo.svg" alt="Logo Terava" />
    </div>
    <h2 class="slogan">SLOGAN/PROMESSE</h2>
    <div class="boutons">
      <button @click="creerCompte">Créer compte</button>
      <button @click="seConnecter">Se connecter</button>
    </div>
  </div>
</template>

<style scoped>
.accueil {
  text-align: center;
  background: linear-gradient(to right, #ff9966, #66ccff);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.logo img {
  width: 150px;
}

.slogan {
  margin: 20px 0;
  font-size: 1.5em;
}

.boutons button {
  margin: 10px;
  padding: 10px 20px;
  font-size: 1em;
}
</style>
