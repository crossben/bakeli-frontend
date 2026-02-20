<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navbar -->
    <header class="bg-white py-4 px-6 md:px-12 flex items-center justify-between border-b border-gray-100 sticky top-0 z-50">
      <div class="flex items-center gap-3">
        <!-- Placeholder for Logo -->
        <div class="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold">
          <span class="text-sn-red text-sm">
            <img src="@/assets/images/logo.png" alt="Logo" class="w-8 h-8 rounded-full" />
          </span>
        </div>
        <span class="font-bold text-xl text-gray-900 tracking-tight">Consortium Jeunesse Sénégal</span>
      </div>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex flex-1 justify-center space-x-8 text-gray-600 font-medium">
        <a href="#fonctionnalites" class="hover:text-sn-green transition-colors">Fonctionnalités</a>
        <a href="#apropos" class="hover:text-sn-green transition-colors">À propos</a>
        <a href="#contact" class="hover:text-sn-green transition-colors">Contact</a>
      </nav>

      <!-- Auth Buttons -->
      <div class="hidden md:flex items-center gap-4 text-sm font-medium">
        <router-link to="/login" class="text-gray-900 hover:text-sn-green transition-colors">Connexion</router-link>
        <router-link to="/register" class="bg-sn-green text-white px-5 py-2.5 rounded-md hover:bg-green-700 transition-colors shadow-sm">Inscription</router-link>
      </div>

      <!-- Mobile Menu Button -->
      <button class="md:hidden text-gray-600 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </header>

    <!-- Main Content -->
    <main class="flex-grow">
      <!-- Hero Section -->
      <section class="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <!-- Left Text -->
        <div class="space-y-6">
          <div class="inline-block px-4 py-1.5 bg-green-50 text-sn-green font-medium text-sm rounded-full">
            Plateforme de Gestion de la Jeunesse
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Ensemble pour <br/> l'épanouissement de la <br/> jeunesse sénégalaise
          </h1>
          <p class="text-lg text-gray-600 max-w-lg leading-relaxed pt-2">
            Une plateforme moderne pour gérer, suivre et accompagner les jeunes talents du Sénégal. Développez vos compétences, connectez-vous et construisez votre avenir.
          </p>

          <div class="flex flex-wrap items-center gap-4 pt-4">
            <button class="bg-sn-green text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition-colors flex items-center gap-2">
              Commencer gratuitement
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
            <button class="px-6 py-3 border border-gray-200 text-gray-900 rounded-md font-medium hover:border-gray-300 hover:bg-gray-50 transition-colors">
              Se connecter
            </button>
          </div>

          <!-- Stats inside Hero -->
          <div class="grid grid-cols-3 gap-6 pt-10">
            <div>
              <div class="text-3xl font-bold text-sn-green">500+</div>
              <div class="text-sm text-gray-500 mt-1">Jeunes inscrits</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-sn-yellow">50+</div>
              <div class="text-sm text-gray-500 mt-1">Programmes</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-sn-red">98%</div>
              <div class="text-sm text-gray-500 mt-1">Satisfaction</div>
            </div>
          </div>
        </div>

        <!-- Right Graphic area -->
        <div class="relative w-full h-[500px] bg-gradient-to-tr from-green-50 to-green-100 rounded-3xl overflow-hidden shadow-xl">
           <img src="@/assets/images/cours.jpeg" alt="Jeunesse" class="w-full h-full object-cover rounded-3xl" />
        </div>
      </section>

      <!-- Features Section -->
      <section class="bg-gray-50 flex-col items-center justify-center py-20 px-6 md:px-12" id="fonctionnalites">
         <div class="text-center max-w-3xl mx-auto mb-16">
           <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Fonctionnalités Principales</h2>
           <p class="text-gray-600 mt-4 text-lg">Tout ce dont vous avez besoin pour gérer efficacement votre consortium</p>
         </div>

         <div class="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
           <!-- Card 1 -->
           <div class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
             <div class="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6 text-sn-green">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
               </svg>
             </div>
             <h3 class="text-xl font-bold text-gray-900 mb-3">Gestion des Membres</h3>
             <p class="text-gray-600 leading-relaxed">
               Créez, modifiez et gérez facilement les profils des jeunes membres. Suivi complet des compétences et des parcours.
             </p>
           </div>
           
           <!-- Card 2 -->
           <div class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
             <div class="w-14 h-14 bg-yellow-50 rounded-xl flex items-center justify-center mb-6 text-sn-yellow">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
               </svg>
             </div>
             <h3 class="text-xl font-bold text-gray-900 mb-3">Suivi & Statistiques</h3>
             <p class="text-gray-600 leading-relaxed">
               Tableaux de bord intuitifs avec filtres avancés et recherche pour suivre la progression de vos membres.
             </p>
           </div>

           <!-- Card 3 -->
           <div class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
             <div class="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-sn-red">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
               </svg>
             </div>
             <h3 class="text-xl font-bold text-gray-900 mb-3">Développement des Talents</h3>
             <p class="text-gray-600 leading-relaxed">
               Programmes de formation, mentorat et opportunités pour développer les compétences des jeunes.
             </p>
           </div>
         </div>
      </section>

      <!-- About Section -->
      <section class="max-w-7xl mx-auto px-6 md:px-12 py-20 grid md:grid-cols-2 gap-16 items-center" id="apropos">
        <div class="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-lg">
           <div class="absolute inset-0 flex items-center justify-center">
             <span>
                <img src="@/assets/images/fille.jpeg" alt="Jeunesse" class="w-full h-full object-cover rounded-3xl" />
             </span>
           </div>
        </div>
        
        <div class="space-y-6">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900">À propos du Consortium</h2>
          <p class="text-gray-600 text-lg leading-relaxed">
            Le Consortium Jeunesse Sénégal est une initiative dédiée à l'épanouissement et au développement des compétences des jeunes sénégalais. Notre plateforme digitale facilite la gestion, le suivi et l'accompagnement de nos membres.
          </p>
          <p class="text-gray-600 text-lg leading-relaxed">
            Nous croyons en la puissance de la jeunesse sénégalaise et nous nous engageons à fournir les outils et les ressources nécessaires pour transformer les ambitions en réalité.
          </p>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
// Logic for landing page here (e.g. mobile menu toggle)
</script>

<style scoped>
</style>
