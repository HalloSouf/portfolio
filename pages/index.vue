<script setup lang="ts">
import { TransitionRoot } from '@headlessui/vue';

const { $gsap } = useNuxtApp();

const scrollPosition = ref<number>(0);

useServerSeoMeta({
  title: 'Souf IT: Voor jouw IT oplossingen · Souf IT',
  description:
    'Zeg hallo tegen Souf IT. Samen ontdekken wij grenzeloze mogelijkheden voor uw situatie. Doe je mee?',
  author: 'HalloSouf',
  charset: 'utf-8',
  ogDescription:
    'Zeg hallo tegen Souf IT. Samen ontdekken wij grenzeloze mogelijkheden voor uw situatie. Doe je mee?',
  viewport: 'width=device-width, initial-scale=1.0',
  ogUrl: 'https://soufit.nl',
  ogTitle: 'Souf IT: Voor jouw IT oplossingen',
  ogSiteName: 'Souf IT',
  ogType: 'website',
  ogLocale: 'nl_NL',
  themeColor: '#10101a',
  ogImage: 'https://soufit.nl/images/soufit-banner.png',
  twitterImage: 'https://soufit.nl/images/soufit-banner.png',
  ogImageHeight: '630',
  ogImageWidth: '1200'
});

/**
 * Scrolls the window to the top of the page using GSAP.
 * @returns {GSAPTween} - The GSAP tween object.
 */
const scrollToTop = (): GSAPTween => {
  return $gsap.to(window, { duration: 0.5, scrollTo: 0 });
};

/**
 * Sets up a scroll event listener to update the scroll position.
 * @returns {void}
 */
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
        <SectionsLandingSection />
      </div>

      <div class="relative">
        <SectionsAboutMeSection />
      </div>

      <div class="relative">
        <SectionsSkillsSection />
      </div>

      <div class="relative">
        <SectionsProjectsSection />
      </div>
    </div>

    <Footer />

    <div class="fixed bottom-5 right-10">
      <TransitionRoot
        :show="scrollPosition > 10"
        as="template"
        enter="duration-500 transition"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-500 transition"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <button
          class="bg-sky-900 h-10 w-10 rounded-lg shadow-md text-white"
          @click="() => scrollToTop()"
        >
          <font-awesome-icon :icon="['fas', 'arrow-up']" />
        </button>
      </TransitionRoot>
    </div>
  </div>
</template>
