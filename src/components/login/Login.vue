<script setup>

</script>
<template>
  <div class="content flex column">
    <div class="logo">
      <img src="../../assets/logo.svg" alt="Logo Terava" />
    </div>
    <h1 class="slogan">SLOGAN/PROMESSE</h1>
    <div class="buttons-wrapper flex column">
      <button class="btn blue" @click="creerCompte">Créer compte</button>
      <button class="btn blue" @click="seConnecter">Se connecter</button>
    </div>
  </div>
</template>

<style scoped>

.logo img {
  width: 150px;
}

.slogan {
  margin: 20px 0;
  font-size: 1.5em;
}

.buttons-wrapper{
  gap:10px;
}

button{
  width:270px
}
</style>
