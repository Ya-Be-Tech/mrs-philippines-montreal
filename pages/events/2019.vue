<template>
  <main class="bg-mpm-black text-mpm-text min-h-screen pt-24 pb-12">
    <div class="max-w-4xl mx-auto px-4 md:px-6">
      <h1 class="text-4xl md:text-5xl font-serif font-bold text-mpm-gold mb-6">
        {{ $t('events_2019_title') }}
      </h1>
      <p class="text-lg text-mpm-text-muted mb-12">
        {{ $t('events_2019_intro') }}
      </p>

      <!-- Facebook video embed -->
      <div class="aspect-video mb-12 rounded-lg overflow-hidden">
        <iframe
          src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2013799406015803%2F&show_text=false&width=560&t=0"
          title="2019 Event Video"
          class="w-full h-full"
          style="border:none;overflow:hidden"
          scrolling="no"
          frameborder="0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowfullscreen="true"
        />
      </div>
    </div>
  </main>
</template>

<script setup>
useHead({
  title: 'Mrs Philippines Montreal - 2019 Event',
  meta: [
    { name: 'description', content: 'Archive of the 2019 Mrs Philippines Montreal event.' },
    { property: 'og:title', content: 'Mrs Philippines Montreal - 2019 Event' },
    { property: 'og:description', content: 'Archive of the 2019 Mrs Philippines Montreal event.' },
    { property: 'og:url', content: 'https://mrsphilippinesmontreal.web.app/events/2019' },
  ],
})
</script>
