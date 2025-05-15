<script setup>
import { reactive, ref } from 'vue'

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
</script>
<template>
  <div class="content flex column">
    <h2 class="heading">Ton identité</h2>
    <var-space direction="column" :size="[14, 0]">
      <var-input placeholder="Prénom" :rules="v => !!v || 'Le prénom ne peut pas être vide'"
        v-model="formData.firstname" />
      <var-input placeholder="Nom" :rules="v => !!v || 'Le nom ne peut pas être vide'" v-model="formData.lastname" />
      <var-radio-group :rules="v => !!v || 'The gender cannot be empty'" v-model="formData.gender">
        <var-radio :checked-value="1">Male</var-radio>
        <var-radio :checked-value="2">Female</var-radio>
      </var-radio-group>

      <button class="btn blue simple-icon"><img src="../../assets/arrow-right.svg"></button>
    </var-space>
  </div>
</template>

<style scoped>

input[type="phone"] {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
}

.content{
  position: relative;
}

.btn.simple-icon {
  position: absolute;
  bottom:30%;
}

</style>
