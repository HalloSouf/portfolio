<script setup lang="ts">
import { TransitionRoot, TransitionChild } from '@headlessui/vue';

const runtimeConfig = useRuntimeConfig();
const showHeading = ref<boolean>(false);

onMounted((): void => {
  requestAnimationFrame((): boolean => (showHeading.value = true));
});
</script>

<template>
  <div class="h-screen w-full flex items-center justify-center px-12 md:px-8 lg:px-2 max-w-7xl mx-auto">
    <div class="w-full h-full flex items-center justify-center md:justify-start">
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
          <span class="text-base md:text-lg text-gray-600 font-semibold">Zeg hallo tegen</span>
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
          <h1 class="text-5xl md:text-6xl font-bold text-sky-600 tracking-wide">Souf IT.</h1>
          <p class="text-base md:text-lg mt-3">Verwelkom je nieuwe website met open armen.</p>
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
  </div>
</template>
