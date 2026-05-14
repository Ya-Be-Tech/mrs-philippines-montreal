<template>
  <main class="bg-mpm-black text-mpm-text min-h-screen pt-24 pb-12">
    <div class="max-w-4xl mx-auto px-4 md:px-6">
      <h1 class="text-4xl md:text-5xl font-serif font-bold text-mpm-gold mb-4">
        {{ $t('about_title') }}
      </h1>

      <!-- Timeline -->
      <section class="mb-16">
        <h2 class="text-2xl md:text-3xl font-serif font-bold text-mpm-gold-light mb-10">
          {{ $t('about_timeline_title') }}
        </h2>

        <ol class="relative border-l border-mpm-gold/30 space-y-10 ml-4">
          <!-- 1960s – 1990s -->
          <li class="pl-8">
            <span class="absolute -left-[9px] flex items-center justify-center w-4 h-4 rounded-full bg-mpm-gold ring-4 ring-mpm-black" />
            <p class="text-xs uppercase tracking-widest text-mpm-text-muted mb-1">
              1960s – 1990s
            </p>
            <h3 class="text-lg font-serif font-bold text-mpm-gold mb-2">
              {{ $t('about_early_years_title') }}
            </h3>
            <p class="text-mpm-text leading-relaxed">
              {{ $t('about_early_years_content') }}
            </p>
          </li>

          <!-- 2010 -->
          <li class="pl-8">
            <span class="absolute -left-[9px] flex items-center justify-center w-4 h-4 rounded-full bg-mpm-gold ring-4 ring-mpm-black" />
            <p class="text-xs uppercase tracking-widest text-mpm-text-muted mb-1">
              2010
            </p>
            <h3 class="text-lg font-serif font-bold text-mpm-gold mb-1">
              {{ $t('about_ambassador_shift_title') }}
            </h3>
            <p class="text-sm text-mpm-gold-light font-serif mb-2">
              Andrea Neufeld — {{ $t('about_milestone_2010') }}
            </p>
            <p class="text-mpm-text leading-relaxed">
              {{ $t('about_ambassador_shift_content') }}
            </p>
          </li>

          <!-- 2011 -->
          <li class="pl-8">
            <span class="absolute -left-[9px] flex items-center justify-center w-4 h-4 rounded-full bg-mpm-gold ring-4 ring-mpm-black" />
            <p class="text-xs uppercase tracking-widest text-mpm-text-muted mb-1">
              2011
            </p>
            <h3 class="text-lg font-serif font-bold text-mpm-gold mb-1">
              {{ $t('about_mentorship_title') }}
            </h3>
            <p class="text-sm text-mpm-gold-light font-serif mb-2">
              Klaudeen Carbon — {{ $t('about_milestone_2011') }}
            </p>
            <p class="text-mpm-text leading-relaxed">
              {{ $t('about_mentorship_content') }}
            </p>
          </li>

          <!-- 2012 -->
          <li class="pl-8">
            <span class="absolute -left-[9px] flex items-center justify-center w-4 h-4 rounded-full bg-mpm-gold ring-4 ring-mpm-black" />
            <p class="text-xs uppercase tracking-widest text-mpm-text-muted mb-1">
              2012
            </p>
            <h3 class="text-lg font-serif font-bold text-mpm-gold mb-1">
              Mariel Urrutia Dimayuga
            </h3>
            <p class="text-mpm-text leading-relaxed">
              {{ $t('about_milestone_2012') }}
            </p>
          </li>

          <!-- 2019 -->
          <li class="pl-8">
            <span class="absolute -left-[9px] flex items-center justify-center w-4 h-4 rounded-full bg-mpm-gold ring-4 ring-mpm-black" />
            <p class="text-xs uppercase tracking-widest text-mpm-text-muted mb-1">
              2019
            </p>
            <h3 class="text-lg font-serif font-bold text-mpm-gold mb-2">
              {{ $t('events_2019_title') }}
            </h3>
            <p class="text-mpm-text leading-relaxed mb-3">
              {{ $t('events_2019_short') }}
            </p>
            <NuxtLink
              to="/events/2019"
              class="text-mpm-gold text-sm font-bold uppercase tracking-wider hover:text-mpm-gold-light transition-colors"
            >
              {{ $t('view_event') }} &rarr;
            </NuxtLink>
          </li>

          <!-- 2022 -->
          <li class="pl-8">
            <span class="absolute -left-[9px] flex items-center justify-center w-4 h-4 rounded-full bg-mpm-gold ring-4 ring-mpm-black" />
            <p class="text-xs uppercase tracking-widest text-mpm-text-muted mb-1">
              2022
            </p>
            <h3 class="text-lg font-serif font-bold text-mpm-gold mb-2">
              {{ $t('events_2022_title') }}
            </h3>
            <p class="text-mpm-text leading-relaxed mb-3">
              {{ $t('events_2022_short') }}
            </p>
            <NuxtLink
              to="/events/2022"
              class="text-mpm-gold text-sm font-bold uppercase tracking-wider hover:text-mpm-gold-light transition-colors"
            >
              {{ $t('view_event') }} &rarr;
            </NuxtLink>
          </li>

          <!-- 2026 -->
          <li class="pl-8">
            <span class="absolute -left-[9px] flex items-center justify-center w-4 h-4 rounded-full bg-mpm-gold ring-4 ring-mpm-black ring-opacity-50 opacity-60" />
            <p class="text-xs uppercase tracking-widest text-mpm-text-muted mb-1">
              2026
            </p>
            <h3 class="text-lg font-serif font-bold text-mpm-gold mb-2 opacity-70">
              {{ $t('events_2026_title') }}
            </h3>
            <p class="text-mpm-text-muted leading-relaxed mb-3">
              {{ $t('events_2026_teaser') }}
            </p>
            <NuxtLink
              to="/events/2026"
              class="text-mpm-gold text-sm font-bold uppercase tracking-wider hover:text-mpm-gold-light transition-colors opacity-80"
            >
              {{ $t('view_event') }} &rarr;
            </NuxtLink>
          </li>
        </ol>
      </section>

      <!-- Section: Cultural Impact -->
      <section class="mb-16">
        <h2 class="text-2xl md:text-3xl font-serif font-bold text-mpm-gold-light mb-6">
          {{ $t('about_section_3_title') }}
        </h2>

        <div class="space-y-6">
          <div>
            <h3 class="text-xl font-serif font-bold text-mpm-gold mb-3">
              {{ $t('about_heritage_title') }}
            </h3>
            <p class="leading-relaxed text-mpm-text">
              {{ $t('about_heritage_content') }}
            </p>
          </div>

          <div>
            <h3 class="text-xl font-serif font-bold text-mpm-gold mb-3">
              {{ $t('about_humanitarian_title') }}
            </h3>
            <p class="leading-relaxed text-mpm-text">
              {{ $t('about_humanitarian_content') }}
            </p>
          </div>

          <div>
            <h3 class="text-xl font-serif font-bold text-mpm-gold mb-3">
              {{ $t('about_civic_title') }}
            </h3>
            <p class="leading-relaxed text-mpm-text">
              {{ $t('about_civic_content') }}
            </p>
          </div>
        </div>
      </section>

      <!-- Section: Legacy -->
      <section>
        <h2 class="text-2xl md:text-3xl font-serif font-bold text-mpm-gold-light mb-6">
          {{ $t('about_section_4_title') }}
        </h2>
        <p class="leading-relaxed text-mpm-text">
          {{ $t('about_legacy_content') }}
        </p>
      </section>
    </div>
  </main>
</template>

<script setup>
useHead({
  title: 'Mrs Philippines Montreal - About',
  meta: [
    { name: 'description', content: 'Learn about the history and mission of Mrs Philippines Montreal.' },
    { property: 'og:title', content: 'About Mrs Philippines Montreal' },
    { property: 'og:description', content: 'Learn about the history and mission of Mrs Philippines Montreal.' },
    { property: 'og:url', content: 'https://mrsphilippinesmontreal.web.app/about' },
  ],
})
</script>
