<template>
  <main class="bg-mpm-black text-mpm-text min-h-screen pt-24 pb-12 flex items-center">
    <div class="max-w-3xl mx-auto px-4 md:px-6 text-center">
      <span class="inline-block border border-mpm-gold text-mpm-gold text-xs uppercase tracking-widest px-4 py-1 rounded mb-8">
        {{ $t('events_2026_coming_soon') }}
      </span>

      <h1 class="text-4xl md:text-6xl font-serif font-bold text-mpm-gold mb-6">
        {{ $t('events_2026_title') }}
      </h1>

      <p class="text-2xl md:text-3xl font-serif text-mpm-text-muted mb-10">
        {{ $t('events_2026_date') }}
      </p>

      <div class="w-16 border-t border-mpm-gold/40 mx-auto mb-10" />

      <p class="text-lg leading-relaxed text-mpm-text-muted max-w-xl mx-auto">
        {{ $t('events_2026_teaser') }}
      </p>
    </div>
  </main>
</template>

<script setup>
useHead({
  title: 'Mrs Philippines Montreal - 2026 Event',
  meta: [
    { name: 'description', content: 'Mrs Philippines Montreal 2026 — coming September 26th. Candidates to be revealed soon.' },
    { property: 'og:title', content: 'Mrs Philippines Montreal 2026' },
    { property: 'og:description', content: 'Coming September 26th, 2026. Candidates will be revealed soon.' },
    { property: 'og:url', content: 'https://mrsphilippinesmontreal.web.app/events/2026' },
  ],
})
</script>
