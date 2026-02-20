<template>
  <div v-if="isOpen && member" class="fixed inset-0 z-50 overflow-y-auto">
    <!-- Backdrop -->
    <div class="fixed inset-0 bg-black/60 transition-opacity" @click="close"></div>

    <div class="flex min-h-screen items-center justify-center p-4">
      <!-- Modal Panel -->
      <div class="relative bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden transform transition-all">
        
        <!-- Header -->
        <div class="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 class="text-xl font-bold text-gray-900 tracking-tight">Détails du membre</h2>
          <button @click="close" class="text-gray-400 hover:text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-lg p-2 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="p-8">
          
          <!-- Profile Badge -->
          <div class="flex items-center gap-5 mb-8 pb-8 border-b border-gray-100">
            <div class="w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-400 to-green-500 text-white flex items-center justify-center font-bold text-2xl shadow-sm">
              {{ initials }}
            </div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900">{{ member.prenom }} {{ member.name }}</h3>
              <span v-if="member.statut" class="inline-block mt-2 px-3 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full">Actif</span>
              <span v-else class="inline-block mt-2 px-3 py-1 bg-red-100 text-red-800 text-xs font-bold rounded-full">Inactif</span>
            </div>
          </div>

          <div class="space-y-8">
            <!-- Contact Info -->
            <div>
              <h4 class="flex items-center gap-2 text-sm font-bold text-gray-900 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                Informations de contact
              </h4>
              <div class="space-y-4 ml-7 text-sm">
                <div class="flex gap-3 text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <div>
                    <div class="text-xs text-gray-400 font-medium">Email</div>
                    <div class="font-medium text-gray-900">{{ member.email }}</div>
                  </div>
                </div>
                <div class="flex gap-3 text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.492a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <div>
                    <div class="text-xs text-gray-400 font-medium">Téléphone</div>
                    <div class="font-medium text-gray-900">{{ member.telephone || '-' }}</div>
                  </div>
                </div>
                <div class="flex gap-3 text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <div>
                    <div class="text-xs text-gray-400 font-medium">Ville</div>
                    <div class="font-medium text-gray-900">{{ member.ville || '-' }}</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Personal Info -->
            <div class="pt-6 border-t border-gray-100">
              <h4 class="flex items-center gap-2 text-sm font-bold text-gray-900 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                Informations personnelles
              </h4>
              <div class="space-y-4 ml-7 text-sm">
                <div>
                  <div class="text-xs text-gray-400 font-medium">Date de naissance</div>
                  <div class="font-medium text-gray-900">{{ formatDate(member.date_naissance) }} {{ member.date_naissance ? `(${calculateAge(member.date_naissance)} ans)` : '' }}</div>
                </div>
                <div>
                  <div class="text-xs text-gray-400 font-medium">Date d'inscription</div>
                  <div class="font-medium text-gray-900">{{ formatDate(member.created_at) }}</div>
                </div>
              </div>
            </div>

            <!-- Competences -->
            <div class="pt-6 border-t border-gray-100">
              <h4 class="flex items-center gap-2 text-sm font-bold text-gray-900 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
                Compétences
              </h4>
              <div class="ml-7 text-sm">
                <p class="text-gray-900 leading-relaxed font-medium">{{ member.competences || 'Aucune compétence spécifiée' }}</p>
              </div>
            </div>
          </div>

          <div class="pt-8 mt-4 flex gap-4">
            <button @click="close" class="flex-1 px-4 py-3 bg-white border border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-colors shadow-sm">
              Fermer
            </button>
            <button @click="edit" class="flex-1 px-4 py-3 bg-sn-green text-white font-bold rounded-xl hover:bg-green-700 transition-colors shadow-sm flex justify-center items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
              Modifier
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  isOpen: Boolean,
  member: Object
})

const emit = defineEmits(['close', 'edit'])

const initials = computed(() => {
  if (!props.member) return ''
  return `${props.member.prenom?.charAt(0) || ''}${props.member.name?.charAt(0) || ''}`.toUpperCase()
})

const close = () => {
  emit('close')
}

const edit = () => {
  emit('edit', props.member)
}

const formatDate = (dateString) => {
  if (!dateString) return '-'
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date)
}

const calculateAge = (dateString) => {
  if (!dateString) return null
  const dob = new Date(dateString)
  const today = new Date()
  let age = today.getFullYear() - dob.getFullYear()
  const m = today.getMonth() - dob.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
    age--
  }
  return age
}
</script>
