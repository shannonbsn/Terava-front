<script setup>
import { ref, watch } from 'vue'
const props = defineProps({
  contact: String,
})

const messages = ref([])
const newMessage = ref('')

watch(
  () => props.contact,
  (newContact) => {
    if (newContact === 'Mathilde') {
      messages.value = [
        { sender: 'Mathilde', text: 'Salut! prête pour le voyage ?', date: '30 janvier, 20:35' },
      ]
    } else {
      messages.value = []
    }
  },
  { immediate: true },
)

function sendMessage() {
  if (newMessage.value.trim()) {
    messages.value.push({ sender: 'me', text: newMessage.value.trim() })
    newMessage.value = ''
  }
}
</script>

<template>
  <div class="chat-window">
    <h3>{{ contact }} <span class="status">EN LIGNE</span></h3>
    <div class="messages">
      <div
        v-for="(msg, index) in messages"
        :key="index"
        class="bubble"
        :class="{ me: msg.sender === 'me' }"
      >
        {{ msg.text }}
        <div class="timestamp" v-if="msg.date">{{ msg.date }}</div>
      </div>
    </div>
    <form @submit.prevent="sendMessage">
      <input type="text" v-model="newMessage" placeholder="Écris ton message ici..." />
      <button type="submit">Envoyer</button>
    </form>
  </div>
</template>

<style scoped>
.chat-window {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
}

.chat-window h3 {
  margin-bottom: 10px;
}

.status {
  font-size: 0.8em;
  color: green;
  margin-left: 10px;
}

.messages {
  flex-grow: 1;
  margin-bottom: 15px;
  max-height: 300px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.bubble {
  max-width: 70%;
  padding: 10px 15px;
  border-radius: 20px;
  background-color: #eee;
  align-self: flex-start;
  position: relative;
}

.bubble.me {
  background-color: #d1e7dd;
  align-self: flex-end;
}

.timestamp {
  font-size: 0.75em;
  color: #888;
  margin-top: 5px;
}

form {
  display: flex;
  gap: 10px;
}

form input {
  flex-grow: 1;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #ccc;
}

form button {
  padding: 10px 20px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 20px;
  cursor: pointer;
}

form button:hover {
  background-color: #0056b3;
}
</style>
