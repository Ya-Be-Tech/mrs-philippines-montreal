<template>
  <div class="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] font-sans">
    <header class="sticky top-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-[#D4AF37]/30">
      <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
        <NuxtLink
          to="/"
          class="text-2xl font-serif font-bold text-[#D4AF37]"
        >
          MPM
        </NuxtLink>
        <div class="hidden md:flex space-x-6">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="hover:text-[#D4AF37] transition-colors"
          >
            {{ $t(link.label) }}
          </NuxtLink>
        </div>
        <div class="flex items-center space-x-4">
          <select
            :value="locale"
            aria-label="Select language"
            class="bg-[#0A0A0A] border border-[#D4AF37]/30 rounded px-2 py-1 text-sm text-[#D4AF37]"
            @change="onLocaleChange"
          >
            <option
              v-for="loc in locales"
              :key="typeof loc === 'string' ? loc : loc.code"
              :value="typeof loc === 'string' ? loc : loc.code"
            >
              {{ typeof loc === 'string' ? loc : loc.name }}
            </option>
          </select>
          <button
            class="md:hidden text-[#D4AF37]"
            aria-label="Toggle navigation"
            :aria-expanded="mobileOpen"
            @click="mobileOpen = !mobileOpen"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </nav>
      <div
        v-show="mobileOpen"
        data-testid="mobile-menu"
        class="absolute top-full left-0 right-0 bg-mpm-black border-b border-mpm-gold/30 md:hidden"
      >
        <nav class="flex flex-col px-4 py-2">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="py-3 border-b border-mpm-gold/20 hover:text-mpm-gold transition-colors"
            @click="mobileOpen = false"
          >
            {{ $t(link.label) }}
          </NuxtLink>
        </nav>
      </div>
    </header>
    <main>
      <slot />
    </main>
    <footer class="bg-[#0A0A0A] border-t border-[#D4AF37]/30 py-8">
      <!-- Sponsor banner -->
      <div class="flex flex-row items-center justify-center gap-4 px-4 mb-6">
        <a href="https://techyabe.com" target="_blank" rel="noopener noreferrer">
          <img
            :src="`/banners/banner_300x250_${locale}.png`"
            alt="Ya Be Tech"
            class="w-[75px] h-[63px] object-contain hover:opacity-90 transition-opacity"
          >
        </a>
        <p class="text-[#B59A5A] text-center md:text-left max-w-xs text-sm md:text-base">
          {{ $t('sponsor_text') }}
        </p>
      </div>

      <!-- Copyright -->
      <p class="text-[#B59A5A] text-center text-sm">
        &copy; {{ new Date().getFullYear() }} Mrs Philippines Montreal. All rights reserved.
      </p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const { locale, locales, setLocale } = useI18n()
const mobileOpen = ref(false)

const onLocaleChange = (event) => {
  setLocale(event.target.value)
}

const navLinks = [
  { to: '/', label: 'home' },
  { to: '/about', label: 'about' },
  { to: '/events/2019', label: 'events_2019' },
  { to: '/events/2022', label: 'events_2022' },
  { to: '/talent', label: 'talent' }
]
</script>
