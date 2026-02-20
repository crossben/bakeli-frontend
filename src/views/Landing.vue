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

      <!-- Features Section Title (Placeholder) -->
      <section class="bg-gray-50 py-20 text-center" id="fonctionnalites">
         <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Fonctionnalités Principales</h2>
         <p class="text-gray-600 mt-4 text-lg">Tout ce dont vous avez besoin pour gérer efficacement votre consortium</p>
      </section>
    </main>
  </div>
</template>

<script setup>
// Logic for landing page here (e.g. mobile menu toggle)
</script>

<style scoped>
</style>
