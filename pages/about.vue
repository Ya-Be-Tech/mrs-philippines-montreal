<template>
  <main class="bg-mpm-black text-mpm-text min-h-screen pt-24 pb-12">
    <div class="max-w-4xl mx-auto px-4 md:px-6">
      <!-- Page Title -->
      <h1 class="text-4xl md:text-5xl font-serif font-bold text-mpm-gold mb-12">
        {{ $t('about_title') }}
      </h1>

      <!-- Section 1: Evolution -->
      <section class="mb-16">
        <h2 class="text-2xl md:text-3xl font-serif font-bold text-mpm-gold-light mb-6">
          {{ $t('about_section_1_title') }}
        </h2>

        <div class="space-y-6 text-mpm-text">
          <div>
            <h3 class="text-xl font-serif font-bold text-mpm-gold mb-3">
              {{ $t('about_early_years_title') }}
            </h3>
            <p class="leading-relaxed">
              {{ $t('about_early_years_content') }}
            </p>
          </div>

          <div>
            <h3 class="text-xl font-serif font-bold text-mpm-gold mb-3">
              {{ $t('about_ambassador_shift_title') }}
            </h3>
            <p class="leading-relaxed">
              {{ $t('about_ambassador_shift_content') }}
            </p>
          </div>

          <div>
            <h3 class="text-xl font-serif font-bold text-mpm-gold mb-3">
              {{ $t('about_mentorship_title') }}
            </h3>
            <p class="leading-relaxed">
              {{ $t('about_mentorship_content') }}
            </p>
          </div>
        </div>
      </section>

      <!-- Section 2: Milestones -->
      <section class="mb-16">
        <h2 class="text-2xl md:text-3xl font-serif font-bold text-mpm-gold-light mb-6">
          {{ $t('about_section_2_title') }}
        </h2>
        <div class="overflow-x-auto">
          <table class="w-full min-w-[480px] border-collapse">
            <thead>
              <tr class="border-b-2 border-mpm-gold">
                <th class="text-left py-3 px-3 text-mpm-gold font-bold">
                  {{ $t('about_table_year') }}
                </th>
                <th class="text-left py-3 px-3 text-mpm-gold font-bold">
                  {{ $t('about_table_winner') }}
                </th>
                <th class="text-left py-3 px-3 text-mpm-gold font-bold">
                  {{ $t('about_table_significance') }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-mpm-gold/20">
                <td class="py-3 px-3">
                  2010
                </td>
                <td class="py-3 px-3">
                  Andrea Neufeld
                </td>
                <td class="py-3 px-3">
                  {{ $t('about_milestone_2010') }}
                </td>
              </tr>
              <tr class="border-b border-mpm-gold/20">
                <td class="py-3 px-3">
                  2011
                </td>
                <td class="py-3 px-3">
                  Klaudeen Carbon
                </td>
                <td class="py-3 px-3">
                  {{ $t('about_milestone_2011') }}
                </td>
              </tr>
              <tr class="border-b border-mpm-gold/20">
                <td class="py-3 px-3">
                  2012
                </td>
                <td class="py-3 px-3">
                  Mariel Urrutia Dimayuga
                </td>
                <td class="py-3 px-3">
                  {{ $t('about_milestone_2012') }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Section 3: Cultural Impact -->
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

      <!-- Section 4: Legacy -->
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
    { name: 'description', content: 'Learn about the history and mission of Mrs Philippines Montreal.' }
  ]
})
</script>
