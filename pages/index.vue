<template>
  <div class="relative min-h-screen flex items-center justify-center overflow-hidden">
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

    <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <h1 class="text-4xl md:text-6xl font-serif font-bold text-[#D4AF37] mb-6 drop-shadow-lg">
        {{ $t('home_title') }}
      </h1>
      <p class="text-xl md:text-2xl text-[#F5F5F5] mb-4 italic">
        "{{ $t('home_subtitle_1') }}"
      </p>
      <p class="text-lg md:text-xl text-[#B59A5A] mb-8">
        {{ $t('home_subtitle_2') }}
      </p>
      <div class="flex flex-col md:flex-row gap-4 justify-center">
        <NuxtLink
          to="/about"
          class="bg-[#D4AF37] text-black px-8 py-3 rounded-full font-bold hover:bg-[#F9E27E] transition-all"
        >
          {{ $t('explore_history') }}
        </NuxtLink>
      </div>
      <div class="mt-12 text-[#D4AF37] animate-bounce">
        <p class="text-xl font-bold uppercase tracking-widest">
          {{ $t('see_you_september') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Mrs Philippines Montreal - Home',
  meta: [
    { name: 'description', content: 'Official website of Mrs Philippines Montreal.' }
  ]
})
</script>
