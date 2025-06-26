<script setup>
import { ref, computed } from 'vue'

const search = ref('')
const invites = ref([{ name: 'Jorge', preview: 'Hey! How are you?', time: 'il y a 13 heures' }])

const filteredInvites = computed(() =>
  invites.value.filter((i) => i.name.toLowerCase().includes(search.value.toLowerCase())),
)
</script>

<template>
  <div class="invitations">
    <h2>Invitations par message</h2>
    <input type="text" placeholder="Rechercher" v-model="search" />
    <ul>
      <li v-for="invite in filteredInvites" :key="invite.name">
        <strong>{{ invite.name }}</strong> : {{ invite.preview }} <em>({{ invite.time }})</em>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.invitations {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.invitations h2 {
  margin-bottom: 10px;
}

.invitations input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.invitations ul {
  list-style: none;
  padding: 0;
}

.invitations li {
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}
</style>
