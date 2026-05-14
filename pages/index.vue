<template>
  <main class="relative min-h-screen flex items-center justify-center bg-mpm-black overflow-hidden">
    <!-- Background image with overlay -->
    <div class="absolute inset-0 z-0">
      <img
        src="~/assets/images/hero-queen-2022.png"
        alt="Mrs Philippines Montreal 2022 Queen"
        class="w-full h-full object-cover object-top"
      >
      <div class="absolute inset-0 bg-black/45" />
    </div>

    <!-- Content overlay -->
    <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <h1 class="text-4xl md:text-6xl font-serif font-bold text-mpm-gold mb-6 drop-shadow-lg">
        {{ $t('home_title') }}
      </h1>

      <!-- Subtitles -->
      <p class="text-lg md:text-xl text-mpm-text mb-4 italic">
        "{{ $t('home_subtitle_1') }}"
      </p>
      <p class="text-lg md:text-xl text-mpm-text-muted mb-12">
        {{ $t('home_subtitle_2') }}
      </p>

      <!-- CTA Buttons -->
      <div class="flex justify-center mb-12">
        <NuxtLink
          to="/about"
          class="bg-mpm-gold text-mpm-black px-8 py-3 font-bold rounded hover:bg-mpm-gold-light transition-all duration-200"
        >
          {{ $t('explore_history') }}
        </NuxtLink>
      </div>

      <!-- Bouncing text -->
      <div class="mt-12 text-mpm-gold animate-bounce">
        <p class="text-lg md:text-xl font-bold uppercase tracking-widest">
          {{ $t('see_you_september') }}
        </p>
      </div>
    </div>
  </main>
</template>

<script setup>
useHead({
  title: 'Mrs Philippines Montreal - Home',
  meta: [
    { name: 'description', content: 'Official website of Mrs Philippines Montreal pageant celebrating Filipino heritage in Montreal.' },
    { property: 'og:title', content: 'Mrs Philippines Montreal' },
    { property: 'og:description', content: 'Official website of Mrs Philippines Montreal pageant celebrating Filipino heritage in Montreal.' },
    { property: 'og:url', content: 'https://mrsphilippinesmontreal.web.app/' },
  ],
})
</script>
