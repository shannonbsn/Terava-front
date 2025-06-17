import { defineStore } from 'pinia'
import api from '@/services/api'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    error: null,
  }),
  actions: {
    async register(userData) {
      try {
        const response = await api.post('/users', userData)
        this.user = response.data
        this.error = null
        return true
      } catch (error) {
        console.error('Erreur register', error)
        if (error.response) {
          console.error('Status:', error.response.status)
          console.error('Data:', error.response.data)
          this.error = error.response.data.message || JSON.stringify(error.response.data)
        } else if (error.request) {
          this.error = 'Pas de réponse du serveur'
        } else {
          this.error = error.message
        }
        if (error.response?.data?.errors) {
          console.table(error.response.data.errors)
        }

        return false
      }
    }

  }
})