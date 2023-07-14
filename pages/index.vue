<script setup lang="ts">
const { $gsap } = useNuxtApp();

const scrollPosition = ref<number>(0);

useServerSeoMeta({
  title: 'Souf IT | Voor jouw IT oplossingen',
  description:
    'Zeg hallo tegen Souf IT. Samen ontdekken wij grenzeloze mogelijkheden voor uw situatie. Doe je mee?',
  author: 'HalloSouf',
  charset: 'utf-8',
  ogDescription:
    'Zeg hallo tegen Souf IT. Samen ontdekken wij grenzeloze mogelijkheden voor uw situatie. Doe je mee?',
  viewport: 'width=device-width, initial-scale=1.0',
  ogUrl: 'https://soufit.nl',
  ogTitle: 'Souf IT | Voor jouw IT oplossingen',
  ogSiteName: 'Souf IT',
  ogType: 'website'
});

const scrollToTop = () => {
  $gsap.to(window, { duration: 0.5, scrollTo: 0 });
};

onMounted((): void => {
  window.addEventListener('scroll', () => {
    scrollPosition.value = window.scrollY;
  });
});
</script>

<template>
  <div>
    <Navbar />

    <div>
      <div class="relative">
        <LandingSection />
      </div>

      <AboutMeSection />
    </div>

    <div v-if="scrollPosition > 10" class="fixed bottom-2 right-5">
      <button class="bg-sky-900 h-10 w-10 rounded-lg shadow-md text-white" @click="() => scrollToTop()">
        <font-awesome-icon :icon="['fas', 'mountain-sun']" />
      </button>
    </div>
  </div>
</template>
