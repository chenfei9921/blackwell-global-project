<template>
  <form class="space-y-4 md:space-y-6" @submit.prevent="login">
    <div v-if="errorMessage" class="text-red-500 text-sm">{{ errorMessage }}</div>
    <div>
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Email
      </label>
      <input
        v-model="email"
        type="email"
        name="email"
        id="email"
        required
        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="name@company.com"
      />
    </div>
    <div>
      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Password
      </label>
      <input
        v-model="password"
        type="password"
        name="password"
        id="password"
        required
        placeholder="••••••••"
        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
    <button type="submit" class="w-full button-login" :disabled="loading">
      {{ loading ? 'Signing in...' : 'Sign in' }}
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const errorMessage = ref('')
const loading = ref(false)

const login = async () => {
  errorMessage.value = ''
  loading.value = true

  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.value, password: password.value }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.statusMessage || 'Login Failed')
    }

    alert('Login successful!')
  } catch (error) {
    errorMessage.value = error.message
  } finally {
    loading.value = false
  }
}
</script>

<style lang="css">
.button-login {
  margin-left: auto;
  display: inline-block;
  background: linear-gradient(to top, #c95a0b, #e56717, #ff7f30);
  color: white;
  padding: 12px 28px;
  font-size: 1rem;
  font-weight: 400;
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;
}
.button-login:hover {
  opacity: 0.9;
}
.button-login:active {
  transform: scale(0.95);
}
</style>
