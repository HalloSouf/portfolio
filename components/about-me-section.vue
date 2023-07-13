<script setup lang="ts">
import { TransitionChild, TransitionRoot } from '@headlessui/vue';

const showContent = ref<boolean>(false);

/**
 * Checks if the content of the about me section should be displayed based on the user's scroll position.
 * @returns {void}
 */
const viewInContentDisplay = (): void => {
  const element = document.getElementById('about-me-section');
  if (!element) {
    return;
  }

  if (
    window.scrollY >= element.offsetTop - window.innerHeight / 2.5 &&
    showContent.value === false
  ) {
    showContent.value = true;
  } else if (
    window.scrollY < element.offsetTop - window.innerHeight / 2.5 &&
    showContent.value === true
  ) {
    showContent.value = false;
  }
};

onMounted((): void => {
  viewInContentDisplay();
  document.addEventListener('scroll', (): void => viewInContentDisplay());
});
</script>

<template>
  <div
    id="about-me-section"
    class="h-screen bg-sky-600"
  >
    <div class="px-12 md:px-8 lg:px-8 max-w-7xl h-full mx-auto">
      <div class="w-full h-full flex items-center justify-start gap-x-20">
        <div class="w-1/2">
          <TransitionRoot :show="showContent">
            <TransitionChild
              key="about-me-title"
              enter="duration-700 transition"
              enter-from="opacity-0 translate-y-full"
              enter-to="opacity-100 translate-y-0"
              leave="duration-700 transition"
              leave-from="opacity-100 translate-y-0"
              leave-to="opacity-0 translate-y-full"
            >
              <h2 class="text-3xl font-bold text-white">Hey, wil je wat meer over mij weten?</h2>
            </TransitionChild>

            <TransitionChild
              enter="duration-700 transition ease-out"
              enter-from="opacity-0 -translate-y-10"
              enter-to="opacity-100 translate-y-0"
              leave="duration-700 transition ease-in"
              leave-from="opacity-100 translate-y-0"
              leave-to="opacity-0 -translate-y-5"
            >
              <p class="mt-4 text-gray-200 leading-relaxed">
                Ik ben Soufiane en ik ben een Full Stack Developer met een passie voor het creëren
                van website toepassingen die de alledaagse tekortkomingen en problemen oplossen.
              </p>
            </TransitionChild>

            <TransitionChild
              enter="duration-700 transition"
              enter-from="opacity-0 -translate-x-5"
              enter-to="opacity-100 translate-x-0"
              leave="duration-700 transition"
              leave-from="opacity-100 translate-x-0"
              leave-to="opacity-0 -translate-x-5"
            >
              <h3 class="mt-8 font-bold text-white">In het kort.</h3>

              <p class="text-gray-200 leading-relaxed">
                In mijn dagelijks leven ontwikkel ik websites die zowel visueel aantrekkelijk als
                functioneel zijn.
              </p>
            </TransitionChild>
          </TransitionRoot>
        </div>

        <div class="w-1/2 p-10">
          <img
            src="/images/co2-presentation.jpg"
            alt="CO2 Presentation"
            class="rounded-md shadow-md"
          />
        </div>
      </div>
    </div>
  </div>
</template>
