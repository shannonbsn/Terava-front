<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const search = ref('')

const messages = ref([
  { name: 'Mathilde', preview: 'Salut! prête pour le voyage ?', time: 'il y a 13 heures' },
  { name: 'Hercule', preview: "Coucou, je cherche quelqu'un pour...", time: 'il y a 23 heures' },
  { name: 'Layla', preview: 'Heyyy comment vas tu depuis...', time: 'il y a 37 heures' },
])

const filteredMessages = computed(() =>
  messages.value.filter((m) => m.name.toLowerCase().includes(search.value.toLowerCase())),
)

function goToChat(name) {
  router.push(`/messages/${encodeURIComponent(name)}`)
}
</script>

<template>
  <div class="message-list">
    <h2>Messages</h2>
    <input type="text" placeholder="Rechercher" v-model="search" />
    <ul>
      <li
        v-for="msg in filteredMessages"
        :key="msg.name"
        @click="goToChat(msg.name)"
        style="cursor: pointer"
      >
        <strong>{{ msg.name }}</strong> : {{ msg.preview }} <em>({{ msg.time }})</em>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.message-list {
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  padding: 24px;
  max-width: 600px;
  margin: 20px auto;
  font-family: 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif;
}

h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
}

input[type='text'] {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  margin-bottom: 20px;
  transition: border 0.2s;
}

input[type='text']:focus {
  border-color: #609cff;
  outline: none;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  padding: 12px 16px;
  border-radius: 12px;
  transition: background-color 0.2s;
}

li:hover {
  background-color: #f3f6ff;
}

li strong {
  color: #333;
}

li em {
  font-size: 0.9em;
  color: #777;
}
</style>
