<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto">
    <!-- Backdrop -->
    <div class="fixed inset-0 bg-black/60 transition-opacity" @click="close"></div>

    <div class="flex min-h-screen items-center justify-center p-4">
      <!-- Modal Panel -->
      <div class="relative bg-white rounded-2xl w-full max-w-xl shadow-2xl p-8 transform transition-all">
        
        <!-- Header -->
        <div class="flex items-center justify-between mb-8">
          <h2 class="text-2xl font-bold text-gray-900 tracking-tight">
            {{ isEdit ? 'Modifier le membre' : 'Nouveau membre' }}
          </h2>
          <button @click="close" class="text-gray-400 hover:text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-lg p-2 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div v-if="error" class="mb-6 p-4 bg-red-50 border border-red-100 text-sn-red text-sm rounded-xl">
          {{ error }}
        </div>

        <!-- Form -->
        <form @submit.prevent="submitForm" class="space-y-5">
          <div class="grid grid-cols-2 gap-5">
            <div>
              <label class="block text-sm font-bold text-gray-900 mb-2">Prénom *</label>
              <input type="text" v-model="form.prenom" placeholder="Fatou" class="block w-full px-4 py-3 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:border-sn-green focus:ring-1 focus:ring-sn-green outline-none transition-colors" required>
            </div>
            <div>
              <label class="block text-sm font-bold text-gray-900 mb-2">Nom *</label>
              <input type="text" v-model="form.name" placeholder="Ndiaye" class="block w-full px-4 py-3 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:border-sn-green focus:ring-1 focus:ring-sn-green outline-none transition-colors" required>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-5">
            <div>
              <label class="block text-sm font-bold text-gray-900 mb-2">Email *</label>
              <input type="email" v-model="form.email" placeholder="fatou.ndiaye@email.sn" class="block w-full px-4 py-3 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:border-sn-green focus:ring-1 focus:ring-sn-green outline-none transition-colors" required>
            </div>
            <div>
              <label class="block text-sm font-bold text-gray-900 mb-2">Téléphone *</label>
              <input type="text" v-model="form.telephone" placeholder="+221 77 123 45 67" class="block w-full px-4 py-3 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:border-sn-green focus:ring-1 focus:ring-sn-green outline-none transition-colors" required>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-5">
            <div>
              <label class="block text-sm font-bold text-gray-900 mb-2">Ville *</label>
              <input type="text" v-model="form.ville" placeholder="Dakar" class="block w-full px-4 py-3 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:border-sn-green focus:ring-1 focus:ring-sn-green outline-none transition-colors" required>
            </div>
            <div>
              <label class="block text-sm font-bold text-gray-900 mb-2">Date de naissance *</label>
              <div class="relative">
                <input type="date" v-model="form.date_naissance" class="block w-full px-4 py-3 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:border-sn-green focus:ring-1 focus:ring-sn-green outline-none transition-colors" required>
                <!-- Native date picker usually includes a calendar icon, or we can overlay one -->
              </div>
            </div>
          </div>

          <div>
            <label class="block text-sm font-bold text-gray-900 mb-2">Compétences *</label>
            <textarea v-model="form.competences" placeholder="Ex: Développement Web, React, Node.js" rows="2" class="block w-full px-4 py-3 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:border-sn-green focus:ring-1 focus:ring-sn-green outline-none transition-colors resize-none" required></textarea>
          </div>

          <div>
            <label class="block text-sm font-bold text-gray-900 mb-2">Statut *</label>
            <select v-model="form.statut" class="block w-full px-4 py-3 bg-gray-50 border-transparent rounded-xl appearance-none focus:bg-white focus:border-sn-green focus:ring-1 focus:ring-sn-green outline-none transition-colors" required>
              <option :value="true">Actif</option>
              <option :value="false">Inactif</option>
            </select>
          </div>

          <div class="pt-4 flex gap-4">
            <button type="button" @click="close" class="flex-1 px-4 py-3 bg-white border border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-colors shadow-sm">
              Annuler
            </button>
            <button type="submit" :disabled="isLoading" class="flex-1 px-4 py-3 bg-sn-green text-white font-bold rounded-xl hover:bg-green-700 transition-colors shadow-sm flex justify-center items-center gap-2 disabled:opacity-70">
              <svg v-if="isLoading" class="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ isEdit ? 'Mettre à jour' : 'Ajouter' }}
            </button>
          </div>
        </form>

      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, watch } from 'vue'
import api from '../services/api'

const props = defineProps({
  isOpen: Boolean,
  member: Object
})

const emit = defineEmits(['close', 'saved'])

const isEdit = ref(false)
const isLoading = ref(false)
const error = ref(null)

const form = reactive({
  id: null,
  prenom: '',
  name: '',
  email: '',
  telephone: '',
  ville: '',
  date_naissance: '',
  competences: '',
  statut: true
})

watch(() => props.member, (newVal) => {
  if (newVal) {
    isEdit.value = true
    form.id = newVal.id
    form.prenom = newVal.prenom || ''
    form.name = newVal.name || ''
    form.email = newVal.email || ''
    form.telephone = newVal.telephone || ''
    form.ville = newVal.ville || ''
    // Format date for inputs
    form.date_naissance = newVal.date_naissance ? newVal.date_naissance.split('T')[0] : ''
    form.competences = newVal.competences || ''
    form.statut = !!newVal.statut
  } else {
    isEdit.value = false
    resetForm()
  }
}, { immediate: true })

const resetForm = () => {
    form.id = null
    form.prenom = ''
    form.name = ''
    form.email = ''
    form.telephone = ''
    form.ville = ''
    form.date_naissance = ''
    form.competences = ''
    form.statut = true
    error.value = null
}

const close = () => {
  emit('close')
}

const submitForm = async () => {
    isLoading.value = true
    error.value = null
    try {
        if (isEdit.value) {
            await api.put(`/members/${form.id}`, form)
        } else {
            await api.post('/members', form)
        }
        emit('saved')
        close()
    } catch (err) {
        error.value = err.response?.data?.message || 'Une erreur est survenue lors de la sauvegarde.'
    } finally {
        isLoading.value = false
    }
}
</script>
