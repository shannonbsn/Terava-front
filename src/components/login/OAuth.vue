<script setup>

</script>
<template>
  <div class="content flex column">
    <div class="brand">
      <div class="logo">
        <img src="../../assets/logo.svg" alt="Logo Terava" />
      </div>
      <h1 class="slogan">SLOGAN/PROMESSE</h1>
    </div>
    <div class="buttons-wrapper flex column">
      <button class="btn outline icon" @click="creerCompte"><img src="../../assets/apple-icon.svg"
          alt="Icone apple">S'inscrire avec Apple</button>
      <button class="btn outline icon" @click="creerCompte"><img src="../../assets/facebook-icon.svg"
          alt="Icone faceboook">S'inscrire avec Facebook</button>
      <button class="btn outline icon" @click="creerCompte">S'inscrire avec Google</button>
      <button class="btn outline icon" @click="creerCompte"><img src="../../assets/mail-icon.svg"
          alt="Icone Email">S'inscrire avec Email</button>
    </div>
    <a href="" class="back" @click="seConnecter">retour</a>
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
</style>
