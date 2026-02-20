<template>
  <div class="min-h-screen bg-gradient-to-tr from-green-50 to-yellow-50 flex flex-col items-center justify-center p-4">
    
    <div class="w-full max-w-md">
      <div class="mb-6 flex items-center justify-start">
        <router-link to="/" class="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2 text-sm font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Retour à l'accueil
        </router-link>
      </div>

      <div class="bg-white rounded-3xl shadow-xl p-8 py-10">
        
        <div class="flex flex-col items-center mb-8">
          <!-- Logo Placeholder -->
          <div class="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mb-4">
            <span class="text-sn-red text-lg">
              <img src="@/assets/images/logo.png" alt="Logo" class="w-12 h-12" />
            </span>
          </div>
          
          <h1 class="text-2xl font-bold text-gray-900 mb-2 tracking-tight">Connexion</h1>
          <p class="text-gray-500 text-center text-sm leading-relaxed px-4">
            Accédez à votre espace Consortium Jeunesse Sénégal
          </p>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-5">
          <div>
            <label for="email" class="block text-sm font-bold text-gray-900 mb-2">Adresse email</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <input type="email" id="email" v-model="email" placeholder="votre.email@exemple.sn" class="block w-full pl-11 pr-4 py-3 bg-gray-50 border-transparent rounded-xl focus:border-sn-green focus:ring-1 focus:ring-sn-green focus:bg-white transition-colors text-gray-900 placeholder-gray-400 outline-none" required>
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between mb-2">
              <label for="password" class="block text-sm font-bold text-gray-900">Mot de passe</label>
              <a href="#" class="text-sm font-medium text-sn-green hover:underline">Mot de passe oublié ?</a>
            </div>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <input type="password" id="password" v-model="password" placeholder="••••••••" class="block w-full pl-11 pr-4 py-3 bg-gray-50 border-transparent rounded-xl focus:border-sn-green focus:ring-1 focus:ring-sn-green focus:bg-white transition-colors text-gray-900 placeholder-gray-400 outline-none" required>
            </div>
          </div>

          <div class="flex items-center pt-1 pb-4">
            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-sn-green focus:ring-sn-green border-gray-300 rounded cursor-pointer">
            <label for="remember-me" class="ml-2 block text-sm font-bold text-gray-900 cursor-pointer">
              Se souvenir de moi
            </label>
          </div>

          <button type="submit" class="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-sn-green hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sn-green transition-colors">
            Se connecter
          </button>
        </form>

        <div class="mt-8 text-center text-sm font-medium">
          <span class="text-gray-500">Vous n'avez pas de compte ?</span>
          <router-link to="/register" class="text-sn-green hover:underline ml-1">Inscrivez-vous</router-link>
        </div>

        <div class="mt-8 pt-6 border-t border-gray-100 text-center">
            <p class="text-xs text-gray-400">Pour tester, utilisez n'importe quelle adresse email et mot de passe</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')

const handleLogin = () => {
    // Basic mock navigation for now
    console.log("Login attempt:", email.value)
    // router.push('/dashboard')
}
</script>
