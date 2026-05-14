<template>
  <main class="bg-mpm-black text-mpm-text min-h-screen pt-24 pb-12">
    <div class="max-w-4xl mx-auto px-4 md:px-6">
      <h1 class="text-3xl md:text-4xl font-serif font-bold text-mpm-gold mb-8">
        {{ $t('talent_title') }}
      </h1>

      <!-- YouTube embed -->
      <div class="aspect-video mb-12 rounded-lg overflow-hidden">
        <iframe
          src="https://www.youtube-nocookie.com/embed/dw75giq5L8g"
          title="Talent Contest Winner"
          class="w-full h-full"
          frameborder="0"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      </div>

      <!-- Performer name -->
      <p class="text-2xl md:text-3xl font-serif font-bold text-mpm-gold mb-4">
        {{ $t('talent_winner_name') }}
      </p>

      <!-- Story/context -->
      <div class="prose prose-invert max-w-none">
        <p class="text-lg leading-relaxed text-mpm-text">
          {{ $t('talent_story') }}
        </p>
      </div>
    </div>
  </main>
</template>

<script setup>
useHead({
  title: 'Mrs Philippines Montreal - Talent',
  meta: [
    { name: 'description', content: 'Showcase of the Mrs Philippines Montreal talent contest winner.' },
    { property: 'og:title', content: 'Mrs Philippines Montreal - Talent' },
    { property: 'og:description', content: 'Showcase of the Mrs Philippines Montreal talent contest winner.' },
    { property: 'og:url', content: 'https://mrsphilippinesmontreal.web.app/talent' },
  ],
})
</script>
