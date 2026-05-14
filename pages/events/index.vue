<template>
  <main class="bg-mpm-black text-mpm-text min-h-screen pt-24 pb-12">
    <div class="max-w-5xl mx-auto px-4 md:px-6">
      <h1 class="text-4xl md:text-5xl font-serif font-bold text-mpm-gold mb-4">
        {{ $t('events_index_title') }}
      </h1>
      <p class="text-lg text-mpm-text-muted mb-12">
        {{ $t('events_index_intro') }}
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- 2026 Event Card (upcoming) -->
        <NuxtLink
          to="/events/2026"
          class="group border border-mpm-gold/60 rounded-lg p-6 hover:border-mpm-gold transition-colors flex flex-col gap-4"
        >
          <div class="flex items-center justify-between">
            <span class="text-4xl font-serif font-bold text-mpm-gold group-hover:text-mpm-gold-light transition-colors">2026</span>
            <span class="border border-mpm-gold text-mpm-gold text-xs uppercase tracking-widest px-2 py-0.5 rounded">
              {{ $t('events_2026_coming_soon') }}
            </span>
          </div>
          <p class="text-mpm-text-muted text-sm leading-relaxed">
            {{ $t('events_2026_date') }}
          </p>
          <span class="mt-auto text-mpm-gold text-sm font-bold uppercase tracking-wider group-hover:text-mpm-gold-light transition-colors">
            {{ $t('view_event') }} &rarr;
          </span>
        </NuxtLink>

        <!-- 2022 Event Card -->
        <NuxtLink
          to="/events/2022"
          class="group border border-mpm-gold/30 rounded-lg p-6 hover:border-mpm-gold transition-colors flex flex-col gap-4"
        >
          <div class="flex items-center justify-between">
            <span class="text-4xl font-serif font-bold text-mpm-gold group-hover:text-mpm-gold-light transition-colors">2022</span>
            <span class="text-mpm-text-muted text-sm uppercase tracking-widest">Gala</span>
          </div>
          <p class="text-mpm-text-muted text-sm leading-relaxed">
            {{ $t('events_2022_short') }}
          </p>
          <span class="mt-auto text-mpm-gold text-sm font-bold uppercase tracking-wider group-hover:text-mpm-gold-light transition-colors">
            {{ $t('view_event') }} &rarr;
          </span>
        </NuxtLink>

        <!-- 2019 Event Card -->
        <NuxtLink
          to="/events/2019"
          class="group border border-mpm-gold/30 rounded-lg p-6 hover:border-mpm-gold transition-colors flex flex-col gap-4"
        >
          <div class="flex items-center justify-between">
            <span class="text-4xl font-serif font-bold text-mpm-gold group-hover:text-mpm-gold-light transition-colors">2019</span>
            <span class="text-mpm-text-muted text-sm uppercase tracking-widest">Gala</span>
          </div>
          <p class="text-mpm-text-muted text-sm leading-relaxed">
            {{ $t('events_2019_short') }}
          </p>
          <span class="mt-auto text-mpm-gold text-sm font-bold uppercase tracking-wider group-hover:text-mpm-gold-light transition-colors">
            {{ $t('view_event') }} &rarr;
          </span>
        </NuxtLink>
      </div>
    </div>
  </main>
</template>

<script setup>
useHead({
  title: 'Mrs Philippines Montreal - Events Archive',
  meta: [
    { name: 'description', content: 'Browse all past Mrs Philippines Montreal gala events from 2019 to present.' },
    { property: 'og:title', content: 'Mrs Philippines Montreal - Events Archive' },
    { property: 'og:description', content: 'Browse all past Mrs Philippines Montreal gala events from 2019 to present.' },
    { property: 'og:url', content: 'https://mrsphilippinesmontreal.web.app/events' },
  ],
})
</script>
