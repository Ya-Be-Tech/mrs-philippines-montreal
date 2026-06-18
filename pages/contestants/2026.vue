<template>
  <main class="bg-mpm-black text-mpm-text min-h-screen pt-24 pb-16">
    <!-- Header — full width -->
    <div class="px-4 md:px-12 text-center mb-12">
      <h1 class="text-2xl md:text-4xl font-serif font-bold text-mpm-gold mb-3 uppercase leading-tight">
        Presenting the Official Candidates of Mrs. Philippines&ndash;Montreal 2026
      </h1>

      <p class="text-mpm-gold/60 text-xs uppercase tracking-widest mb-8">
        Photos by: Bryan and Janette Photography
      </p>

      <div class="text-mpm-text-muted text-base leading-relaxed space-y-4 text-left">
        <p>With beauty, grace, confidence, and a commitment to making a difference, these remarkable women are ready to embark on an unforgettable journey toward the crown.</p>
        <p>Join us as we proudly introduce the Official Candidates of Mrs. Philippines&ndash;Montreal 2026, women who embody the strength, elegance, and spirit of the Filipina in our vibrant Montreal community.</p>
        <p>Each candidate brings her own inspiring story, passion, and purpose as she competes for the prestigious title and the opportunity to serve as an ambassador of Filipino culture, empowerment, and community involvement.</p>
        <p>Let us celebrate their courage, achievements, and dedication as they begin their quest for the crown.</p>
      </div>
    </div>

    <!-- Carousel — constrained width -->
    <div class="max-w-2xl mx-auto px-4 md:px-6 text-center">
      <!-- Carousel -->
      <div class="relative">
        <!-- Candidate card -->
        <div class="overflow-hidden rounded-lg border border-mpm-gold/30">
          <div class="aspect-[3/4] relative bg-[#111]">
            <img
              :src="current.image"
              :alt="current.name"
              class="w-full h-full object-cover object-top"
            >
          </div>
        </div>

        <!-- Name below image -->
        <div class="mt-6 text-center">
          <p class="text-mpm-gold text-xs uppercase tracking-widest mb-2">
            Candidate {{ current.number }}
          </p>
          <p class="font-serif text-2xl md:text-3xl font-bold text-mpm-text">
            {{ current.name }}
          </p>
        </div>

        <!-- Prev button -->
        <button
          class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 bg-mpm-black/80 border border-mpm-gold/40 text-mpm-gold rounded-full w-10 h-10 flex items-center justify-center hover:bg-mpm-gold hover:text-mpm-black transition-all duration-200"
          aria-label="Previous contestant"
          @click="prev"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <!-- Next button -->
        <button
          class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 bg-mpm-black/80 border border-mpm-gold/40 text-mpm-gold rounded-full w-10 h-10 flex items-center justify-center hover:bg-mpm-gold hover:text-mpm-black transition-all duration-200"
          aria-label="Next contestant"
          @click="next"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <!-- Dot indicators -->
      <div class="flex justify-center gap-2 mt-6">
        <button
          v-for="(candidate, index) in candidates"
          :key="candidate.number"
          class="w-2 h-2 rounded-full transition-all duration-200"
          :class="index === currentIndex ? 'bg-mpm-gold w-6' : 'bg-mpm-gold/30'"
          :aria-label="`Go to contestant ${candidate.number}`"
          @click="currentIndex = index"
        />
      </div>

      <!-- Counter -->
      <p class="text-mpm-text-muted text-sm mt-4">
        {{ currentIndex + 1 }} / {{ candidates.length }}
      </p>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'

useHead({
  title: 'Mrs Philippines Montreal - 2026 Contestants',
  meta: [
    { name: 'description', content: 'Meet the six contestants of Mrs Philippines Montreal 2026, taking place September 19th.' },
    { property: 'og:title', content: 'Mrs Philippines Montreal 2026 Contestants' },
    { property: 'og:description', content: 'Meet the six remarkable contestants of Mrs Philippines Montreal 2026.' },
    { property: 'og:url', content: 'https://mrsphilippinesmontreal.web.app/contestants/2026' },
  ],
})

const candidates = [
  { number: 1, name: 'SUNSHINE DE VERA', image: '/candidates/candidate-number-1.jpg' },
  { number: 2, name: 'FRIA ROCERO', image: '/candidates/candidate-number-2.jpg' },
  { number: 3, name: 'GERALDIN ZARASATE', image: '/candidates/candidate-number-3.jpg' },
  { number: 4, name: 'MAGGY BALUCANAG LAFLAMME', image: '/candidates/candidate-number-4.jpg' },
  { number: 5, name: 'ANITA PADUGA LAUZON', image: '/candidates/candidate-number-5.jpg' },
  { number: 6, name: 'ROWENA PACLA', image: '/candidates/candidate-number-6.jpg' },
]

const currentIndex = ref(0)
const current = computed(() => candidates[currentIndex.value])

function prev() {
  currentIndex.value = (currentIndex.value - 1 + candidates.length) % candidates.length
}

function next() {
  currentIndex.value = (currentIndex.value + 1) % candidates.length
}
</script>
