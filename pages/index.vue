<template>
  <section class="relative min-h-screen flex items-center justify-center bg-mpm-black overflow-hidden">
    <!-- Background image with overlay -->
    <div class="absolute inset-0 z-0">
      <div class="w-full h-full opacity-40 bg-black" />
      <iframe
        src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1935227787165392%2F&show_text=false&width=267&t=0"
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] md:w-[120%] md:h-[120%] pointer-events-none"
        style="border:none;overflow:hidden"
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      />
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
      <div class="flex flex-col md:flex-row gap-4 justify-center mb-12">
        <NuxtLink
          to="/about"
          class="bg-mpm-gold text-mpm-black px-8 py-3 font-bold rounded hover:bg-mpm-gold-light transition-all duration-200"
        >
          {{ $t('explore_history') }}
        </NuxtLink>
        <button
          class="border-2 border-mpm-gold text-mpm-gold px-8 py-3 font-bold rounded hover:bg-mpm-gold/10 transition-all duration-200"
        >
          {{ $t('get_involved') }}
        </button>
      </div>

      <!-- Bouncing text -->
      <div class="mt-12 text-mpm-gold animate-bounce">
        <p class="text-lg md:text-xl font-bold uppercase tracking-widest">
          {{ $t('see_you_september') }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
useHead({
  title: 'Mrs Philippines Montreal - Home',
  meta: [
    { name: 'description', content: 'Official website of Mrs Philippines Montreal.' }
  ]
})
</script>
