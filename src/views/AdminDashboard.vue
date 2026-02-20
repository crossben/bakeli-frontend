<template>
  <div class="min-h-screen bg-[#F8FAFC] flex">
    
    <!-- Sidebar -->
    <aside class="w-64 bg-white border-r border-gray-200 flex flex-col hidden md:flex fixed h-full select-none">
      <div class="p-6 flex items-center gap-3">
        <div class="w-8 h-8 flex items-center justify-center text-white font-bold">
           <span class="text-sn-yellow">
             <img src="@/assets/images/logo.png" alt="Logo" class="w-8 h-8 rounded-full">
           </span>
        </div>
        <span class="font-bold text-xl text-gray-900 tracking-tight">CJS</span>
      </div>

      <div class="px-6 mb-8">
        <div class="bg-gray-50 rounded-xl p-3 flex items-center gap-3 border border-gray-100">
           <div class="w-10 h-10 rounded-full bg-sn-green text-white flex items-center justify-center font-bold text-sm">
             {{ userInitials }}
           </div>
           <div class="flex-1 min-w-0">
             <div class="text-sm font-bold text-gray-900 truncate">{{ authStore.user?.prenom }} {{ authStore.user?.name }}</div>
             <div class="text-xs text-gray-500 truncate">{{ authStore.user?.email }}</div>
           </div>
        </div>
      </div>

      <nav class="flex-1 px-4 space-y-1 overflow-y-auto">
        <a href="#" class="flex items-center gap-3 px-4 py-3 bg-green-50 text-sn-green rounded-xl font-medium transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
          Tableau de bord
        </a>
        <a href="#" class="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-xl font-medium transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          Membres
        </a>
        <a href="#" class="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-xl font-medium transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Paramètres
        </a>
      </nav>

      <div class="p-4 border-t border-gray-200">
        <button @click="logout" class="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl font-medium transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Déconnexion
        </button>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 md:ml-64 p-8">
      
      <!-- Top header -->
      <div class="flex justify-between items-start mb-8">
        <div>
          <h1 class="text-3xl font-bold text-gray-900">Tableau de bord</h1>
          <p class="text-gray-500 mt-1">Gestion des membres du Consortium Jeunesse Sénégal</p>
        </div>
        <div class="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 bg-white shadow-sm">
          Administrateur
        </div>
      </div>

      <!-- Stats row -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between h-32">
          <div class="flex justify-between items-start">
            <span class="text-gray-500 font-medium">Total Membres</span>
            <div class="w-8 h-8 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            </div>
          </div>
          <span class="text-3xl font-bold text-gray-900">8</span>
        </div>

        <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between h-32">
          <div class="flex justify-between items-start">
            <span class="text-gray-500 font-medium">Membres Actifs</span>
            <div class="w-8 h-8 rounded-full bg-green-50 text-sn-green flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            </div>
          </div>
          <span class="text-3xl font-bold text-gray-900">7</span>
        </div>

        <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between h-32">
          <div class="flex justify-between items-start">
            <span class="text-gray-500 font-medium">Membres Inactifs</span>
            <div class="w-8 h-8 rounded-full bg-red-50 text-sn-red flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            </div>
          </div>
          <span class="text-3xl font-bold text-gray-900">1</span>
        </div>

        <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between h-32">
          <div class="flex justify-between items-start">
            <span class="text-gray-500 font-medium">Villes Couvertes</span>
            <div class="w-8 h-8 rounded-full bg-yellow-50 text-sn-yellow flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            </div>
          </div>
          <span class="text-3xl font-bold text-gray-900">6</span>
        </div>

      </div>

      <!-- Controls row -->
      <div class="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <div class="relative flex-1 max-w-2xl">
          <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
          <input type="text" placeholder="Rechercher par nom, email, ville, compétences..." class="block w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-1 focus:ring-sn-green focus:border-sn-green outline-none text-sm text-gray-900 shadow-sm" />
        </div>
        
        <div class="flex gap-4">
          <div class="relative">
            <select class="block w-32 pl-4 pr-10 py-3 bg-white border border-gray-200 rounded-xl appearance-none focus:outline-none focus:ring-1 focus:ring-sn-green text-sm font-medium text-gray-700 shadow-sm">
              <option>Tous</option>
              <option>Actifs</option>
              <option>Inactifs</option>
            </select>
            <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
            </div>
          </div>
          <button class="bg-sn-green text-white px-5 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-green-700 transition-colors shadow-sm text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
            Nouveau membre
          </button>
        </div>
      </div>

      <!-- Table -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-left text-sm text-gray-500">
            <thead class="text-xs text-gray-500 uppercase bg-gray-50 border-b border-gray-100">
              <tr>
                <th scope="col" class="px-6 py-4 font-bold tracking-wider">Membre</th>
                <th scope="col" class="px-6 py-4 font-bold tracking-wider">Contact</th>
                <th scope="col" class="px-6 py-4 font-bold tracking-wider">Ville</th>
                <th scope="col" class="px-6 py-4 font-bold tracking-wider">Compétences</th>
                <th scope="col" class="px-6 py-4 font-bold tracking-wider">Statut</th>
                <th scope="col" class="px-6 py-4 font-bold tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <!-- Stub Rows for Mockup Alignment -->
              <tr class="hover:bg-gray-50 transition-colors">
                <td class="px-6 py-4 flex items-center gap-3">
                  <div class="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-xs">FN</div>
                  <span class="font-bold text-gray-900">Fatou Ndiaye</span>
                </td>
                <td class="px-6 py-4">
                  <div class="text-gray-900 font-medium">fatou.ndiaye@email.sn</div>
                  <div class="text-gray-500 text-xs">+221 77 123 45 67</div>
                </td>
                <td class="px-6 py-4 text-gray-900">Dakar</td>
                <td class="px-6 py-4 text-gray-900">Développement Web, React, Node.js</td>
                <td class="px-6 py-4">
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Actif</span>
                </td>
                <td class="px-6 py-4 text-right">
                   <div class="flex justify-end gap-2 text-gray-400">
                      <button class="hover:text-gray-600"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg></button>
                      <button class="hover:text-gray-600"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg></button>
                      <button class="hover:text-red-500 text-red-400"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg></button>
                   </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const userInitials = computed(() => {
    if(!authStore.user) return 'AD';
    return `${authStore.user.prenom?.charAt(0) || ''}${authStore.user.name?.charAt(0) || ''}`.toUpperCase()
})

const logout = () => {
    authStore.logout();
    router.push('/');
}
</script>
