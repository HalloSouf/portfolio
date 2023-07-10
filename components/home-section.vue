<script setup lang="ts">
import { TransitionChild, TransitionRoot } from '@headlessui/vue';

const runtimeConfig = useRuntimeConfig();
const showHeading = ref(false);

onMounted((): void => {
  requestAnimationFrame((): void => {
    showHeading.value = true;
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 176 && showHeading.value) {
      showHeading.value = false;
    } else if (window.scrollY < 350 && !showHeading.value) {
      showHeading.value = true;
    }
  });
});
</script>

<template>
  <div
    id="home-section"
    class="h-screen w-full flex items-center justify-center max-w-7xl mx-auto px-4 lg:px-8"
  >
    <div class="w-full md:w-1/2 h-full flex items-center md:justify-start justify-center">
      <TransitionRoot :show="showHeading">
        <TransitionChild
          as="template"
          enter="duration-700 transition delay-150"
          enter-from="opacity-0 -translate-x-20"
          enter-to="opacity-100 translate-x-0"
          leave="duration-700 transition"
          leave-from="opacity-100 translate-x-0"
          leave-to="opacity-0 -translate-x-20"
        >
          <span class="text-sm sm:text-base">Zeg hallo tegen</span>
        </TransitionChild>

        <TransitionChild
          key="heading-title"
          enter="duration-700 transition"
          enter-from="opacity-0 translate-y-full"
          enter-to="opacity-100 translate-y-0"
          leave="duration-700 transition"
          leave-from="opacity-100 translate-y-0"
          leave-to="opacity-0 translate-y-full"
        >
          <h1 class="text-4xl sm:text-6xl font-bold text-sky-600 tracking-widest">Souf IT</h1>
          <p class="text-base sm:text-xl mt-3">Verwelkom je nieuwe website met open armen.</p>
        </TransitionChild>

        <div class="flex items-center gap-x-6 mt-10">
          <TransitionChild
            key="heading-linkedin"
            as="template"
            enter="duration-700 transition"
            enter-from="opacity-0 translate-y-full"
            enter-to="opacity-100 translate-y-0"
            class="bg-black w-12 h-12 flex items-center justify-center rounded-full"
            leave="duration-700 transition"
            leave-from="opacity-100 translate-y-0"
            leave-to="opacity-0 translate-y-full"
          >
            <a
              :href="`${runtimeConfig.public.userLinkedinUrl}`"
              target="_blank"
            >
              <font-awesome-icon
                :icon="['fab', 'linkedin-in']"
                size="lg"
                class="text-white"
              />
            </a>
          </TransitionChild>

          <TransitionChild
            key="heading-linkedin"
            as="template"
            enter="duration-700 transition delay-100"
            enter-from="opacity-0 translate-y-full"
            enter-to="opacity-100 translate-y-0"
            class="bg-black w-12 h-12 flex items-center justify-center rounded-full"
            leave="duration-700 transition"
            leave-from="opacity-100 translate-y-0"
            leave-to="opacity-0 translate-y-full"
          >
            <a
              :href="`${runtimeConfig.public.userGithubUrl}`"
              target="_blank"
            >
              <font-awesome-icon
                :icon="['fab', 'github']"
                size="lg"
                class="text-white"
              />
            </a>
          </TransitionChild>
        </div>
      </TransitionRoot>
    </div>

    <div class="w-1/2 md:block hidden" />
  </div>
</template>
