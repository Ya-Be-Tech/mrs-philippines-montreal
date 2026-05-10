<template>
  <main class="bg-mpm-black text-mpm-text min-h-screen pt-24 pb-12">
    <div class="max-w-6xl mx-auto px-4 md:px-6">
      <h1 class="text-4xl md:text-5xl font-serif font-bold text-mpm-gold mb-8">
        {{ $t('events_2022_title') }}
      </h1>
      <p class="text-lg text-mpm-text-muted mb-12">
        {{ $t('events_2022_intro') }}
      </p>

      <!-- Contestant cards grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Card 1: Raziel De Leon -->
        <div class="border border-mpm-gold/30 p-6 rounded-lg hover:border-mpm-gold transition-colors">
          <h3 class="text-2xl font-serif font-bold text-mpm-gold-light mb-4">
            Raziel De Leon
          </h3>
          <div class="aspect-video mb-4 rounded overflow-hidden">
            <iframe
              src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1935227787165392%2F&show_text=false&width=267&t=0"
              title="Raziel De Leon"
              class="w-full h-full"
              style="border:none;overflow:hidden"
              scrolling="no"
              frameborder="0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowfullscreen="true"
            />
          </div>
        </div>

        <!-- Card 2: Almaleen Castillo -->
        <div class="border border-mpm-gold/30 p-6 rounded-lg hover:border-mpm-gold transition-colors">
          <h3 class="text-2xl font-serif font-bold text-mpm-gold-light mb-2">
            Almaleen Castillo
          </h3>
          <p class="text-mpm-text-muted mb-4 text-sm">
            {{ $t('events_2022_almaleen_title') }}
          </p>
          <div class="aspect-video mb-4 rounded overflow-hidden">
            <iframe
              src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F978239004897321%2F&show_text=false&width=264&t=0"
              title="Almaleen Castillo"
              class="w-full h-full"
              style="border:none;overflow:hidden"
              scrolling="no"
              frameborder="0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowfullscreen="true"
            />
          </div>
        </div>

        <!-- Card 3: Marissa Obaldo -->
        <div class="border border-mpm-gold/30 p-6 rounded-lg hover:border-mpm-gold transition-colors">
          <h3 class="text-2xl font-serif font-bold text-mpm-gold-light mb-2">
            Marissa Obaldo
          </h3>
          <p class="text-mpm-text-muted mb-4 text-sm">
            {{ $t('events_2022_marissa_title') }}
          </p>
          <div class="aspect-video mb-4 rounded overflow-hidden">
            <iframe
              src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1301473081942391%2F&show_text=false&width=267&t=0"
              title="Marissa Obaldo"
              class="w-full h-full"
              style="border:none;overflow:hidden"
              scrolling="no"
              frameborder="0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowfullscreen="true"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
useHead({
  title: 'Mrs Philippines Montreal - 2022 Event',
  meta: [
    { name: 'description', content: 'Archive of the 2022 Mrs Philippines Montreal event and contestants.' },
    { property: 'og:title', content: 'Mrs Philippines Montreal - 2022 Event' },
    { property: 'og:description', content: 'Archive of the 2022 Mrs Philippines Montreal event and contestants.' },
    { property: 'og:url', content: 'https://mrsphilippinesmontreal.web.app/events/2022' },
  ],
})
</script>
