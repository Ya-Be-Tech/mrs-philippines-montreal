<template>
  <main class="bg-mpm-black text-mpm-text min-h-screen pt-24 pb-12 flex items-center">
    <div class="max-w-xl mx-auto px-4 md:px-6 text-center">
      <span class="inline-block border border-mpm-gold text-mpm-gold text-xs uppercase tracking-widest px-4 py-1 rounded mb-8">
        {{ $t('contact_label') }}
      </span>

      <h1 class="text-3xl md:text-4xl font-serif font-bold text-mpm-gold mb-6">
        {{ $t('contact_title') }}
      </h1>

      <div class="w-16 border-t border-mpm-gold/40 mx-auto mb-8" />

      <p class="text-mpm-text-muted text-lg mb-8">
        {{ $t('contact_intro') }}
      </p>

      <a
        href="mailto:filipinofamilyservice21@gmail.com"
        class="inline-block text-mpm-gold font-serif text-xl md:text-2xl border border-mpm-gold/40 rounded px-6 py-4 hover:bg-mpm-gold hover:text-mpm-black transition-all duration-200 break-all"
      >
        filipinofamilyservice21@gmail.com
      </a>
    </div>
  </main>
</template>

<script setup>
useHead({
  title: 'Mrs Philippines Montreal - Contact',
  meta: [
    { name: 'description', content: 'Contact Mrs Philippines Montreal — reach us at filipinofamilyservice21@gmail.com.' },
    { property: 'og:title', content: 'Contact Mrs Philippines Montreal' },
    { property: 'og:url', content: 'https://mrsphilippinesmontreal.web.app/contact' },
  ],
})
</script>
