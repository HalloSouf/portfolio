<script setup lang="ts">
import { TransitionRoot, TransitionChild, Dialog, DialogPanel } from '@headlessui/vue';

const { $ScrollTrigger, $gsap } = useNuxtApp();
const mobileMenu = ref<boolean>(false);
const timelines: Record<string, GSAPTimeline> = {};

const scrollTo = (id: string, sidebar = false): void => {
  if (sidebar) {
    mobileMenu.value = false;

    setTimeout(() => {
      $gsap.to('html', {
        scrollTo: `#${id}`,
        duration: 1.0
      });
    }, 500);
  } else {
    $gsap.to('html', {
      scrollTo: `#${id}`,
      duration: 0.7
    });
  }
};

onMounted((): void => {
  timelines.navbar = $gsap.timeline({
    scrollTrigger: $ScrollTrigger.create({
      trigger: 'window',
      start: 'top top',
      end: '100px',
      onEnterBack: (): GSAPTimeline => timelines.navbar.restart()
    })
  });

  timelines.navbar.fromTo(
    '#navbar',
    { opacity: 0, y: -10 },
    { opacity: 1, y: 0, duration: 0.7, delay: 1.0 }
  );

  timelines.navbar.play();
});
</script>

<template>
  <header class="absolute w-full z-10">
    <nav
      id="navbar"
      class="navbar"
      aria-label="Global"
    >
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenu = true"
        >
          <span class="sr-only">Open main menu</span>
          <font-awesome-icon
            :icon="['fas', 'hamburger']"
            class="text-xl text-white"
          />
        </button>
      </div>

      <div class="hidden lg:flex lg:gap-x-12">
        <button
          class="navbar-item"
          @click="() => scrollTo('about-me-section')"
        >
          Over mij
        </button>

        <button
          class="navbar-item"
          @click="() => scrollTo('skills-section')"
        >
          Vaardigheden
        </button>

        <a
          href="#"
          class="navbar-item--disabled"
        >
          Projecten
        </a>

        <a
          href="#"
          class="navbar-item--disabled"
        >
          Contact
        </a>
      </div>
    </nav>

    <TransitionRoot
      appear
      :show="mobileMenu"
      as="template"
    >
      <Dialog
        as="div"
        class="lg:hidden"
        @close="mobileMenu = false"
      >
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black/25" />
        </TransitionChild>

        <TransitionChild
          as="template"
          enter="duration-500 ease-out"
          enter-from="opacity-0 translate-x-full"
          enter-to="opacity-100 translate-x-0"
          leave="duration-500 ease-in"
          leave-from="opacity-100 translate-x-0"
          leave-to="opacity-0 translate-x-full"
        >
          <DialogPanel class="navbar-fold">
            <div class="flex items-center justify-between">
              <div />
              <button
                type="button"
                class="-m-2.5 rounded-md p-2.5 text-gray-700"
                @click="mobileMenu = false"
              >
                <span class="sr-only">Close menu</span>
                <font-awesome-icon
                  :icon="['fas', 'times']"
                  class="text-xl text-white"
                  aria-hidden="true"
                />
              </button>
            </div>

            <div class="mt-6 flow-root">
              <div class="-my-6 divide-y divide-gray-500/10">
                <div class="space-y-2 py-6">
                  <button
                    class="navbar-fold-item focus:bg-transparent"
                    @click="() => scrollTo('about-me-section', true)"
                  >
                    Over mij
                  </button>

                  <button
                    class="navbar-fold-item focus:bg-transparent"
                    @click="() => scrollTo('skills-section', true)"
                  >
                    Vaardigheden
                  </button>

                  <button class="navbar-fold-item">Projecten</button>

                  <button class="navbar-fold-item">Projecten</button>
                </div>
              </div>
            </div>
          </DialogPanel>
        </TransitionChild>
      </Dialog>
    </TransitionRoot>
  </header>
</template>
