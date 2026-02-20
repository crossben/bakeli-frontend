<template>
  <div class="min-h-screen bg-gradient-to-tr from-green-50 to-yellow-50 flex flex-col items-center justify-center p-4">
    
    <div class="w-full max-w-md my-8">
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
          
          <h1 class="text-2xl font-bold text-gray-900 mb-2 tracking-tight">Inscription</h1>
          <p class="text-gray-500 text-center text-sm leading-relaxed px-4">
            Rejoignez le Consortium Jeunesse Sénégal
          </p>
        </div>

        <form @submit.prevent="handleRegister" class="space-y-5">
          <!-- Error Display -->
          <div v-if="authStore.error" class="bg-red-50 text-sn-red text-sm p-3 rounded-lg border border-red-100 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
            {{ authStore.error }}
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label for="prenom" class="block text-sm font-bold text-gray-900 mb-2">Prénom</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input type="text" id="prenom" v-model="form.prenom" placeholder="Amadou" class="block w-full pl-11 pr-4 py-3 bg-gray-50 border-transparent rounded-xl focus:border-sn-green focus:ring-1 focus:ring-sn-green focus:bg-white transition-colors text-gray-900 placeholder-gray-400 outline-none" required>
              </div>
            </div>
            
            <div>
              <label for="nom" class="block text-sm font-bold text-gray-900 mb-2">Nom</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input type="text" id="nom" v-model="form.name" placeholder="Diop" class="block w-full pl-11 pr-4 py-3 bg-gray-50 border-transparent rounded-xl focus:border-sn-green focus:ring-1 focus:ring-sn-green focus:bg-white transition-colors text-gray-900 placeholder-gray-400 outline-none" required>
              </div>
            </div>
          </div>

          <div>
            <label for="email" class="block text-sm font-bold text-gray-900 mb-2">Adresse email</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <input type="email" id="email" v-model="form.email" placeholder="votre.email@exemple.sn" class="block w-full pl-11 pr-4 py-3 bg-gray-50 border-transparent rounded-xl focus:border-sn-green focus:ring-1 focus:ring-sn-green focus:bg-white transition-colors text-gray-900 placeholder-gray-400 outline-none" required>
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-bold text-gray-900 mb-2">Mot de passe</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <input type="password" id="password" v-model="form.password" placeholder="••••••••" class="block w-full pl-11 pr-4 py-3 bg-gray-50 border-transparent rounded-xl focus:border-sn-green focus:ring-1 focus:ring-sn-green focus:bg-white transition-colors text-gray-900 placeholder-gray-400 outline-none" required>
            </div>
          </div>

          <div>
            <label for="password_confirmation" class="block text-sm font-bold text-gray-900 mb-2">Confirmer le mot de passe</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <input type="password" id="password_confirmation" v-model="form.password_confirmation" placeholder="••••••••" class="block w-full pl-11 pr-4 py-3 bg-gray-50 border-transparent rounded-xl focus:border-sn-green focus:ring-1 focus:ring-sn-green focus:bg-white transition-colors text-gray-900 placeholder-gray-400 outline-none" required>
            </div>
          </div>

          <div class="flex items-start pt-1 pb-4">
            <div class="flex items-center h-5">
              <input id="terms" name="terms" type="checkbox" v-model="form.terms" class="h-4 w-4 text-sn-green focus:ring-sn-green border-gray-300 rounded cursor-pointer" required>
            </div>
            <div class="ml-3 text-sm flex-1">
              <label for="terms" class="font-bold text-gray-900 cursor-pointer">
                J'accepte <a href="#" class="text-sn-green hover:underline">conditions d'utilisation</a> et la <a href="#" class="text-sn-green hover:underline">politique de confidentialité</a>
              </label>
            </div>
          </div>

          <button type="submit" :disabled="authStore.isLoading" class="w-full flex justify-center items-center gap-2 py-3.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-sn-green hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sn-green transition-colors disabled:opacity-70">
            <svg v-if="authStore.isLoading" class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {{ authStore.isLoading ? 'Inscription en cours...' : 'S\'inscrire' }}
          </button>
        </form>

        <div class="mt-8 text-center text-sm font-medium">
          <span class="text-gray-500">Vous avez déjà un compte ?</span>
          <router-link to="/login" class="text-sn-green hover:underline ml-1">Connectez-vous</router-link>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const form = reactive({
    name: '',
    prenom: '',
    email: '',
    password: '',
    password_confirmation: '',
    terms: false
})

const handleRegister = async () => {
    if (form.password !== form.password_confirmation) {
        authStore.error = "Les mots de passe ne correspondent pas.";
        return;
    }

    const payload = {
        name: form.name,
        prenom: form.prenom,
        email: form.email,
        password: form.password,
        password_confirmation: form.password_confirmation
    }

    const success = await authStore.register(payload);
    
    if (success) {
        if (authStore.user?.role === 'admin') {
            router.push('/admin');
        } else {
            router.push('/connected');
        }
    }
}
</script>
