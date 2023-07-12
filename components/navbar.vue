<script setup lang="ts">
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue';

const mobileMenu = ref<boolean>(false);
</script>

<template>
  <header class="bg-white absolute w-full">
    <nav
      class="flex items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <a
          href="/"
          class="-m-1.5 p-1.5"
        >
          <span class="sr-only">Souf IT</span>
        </a>
      </div>

      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenu = true"
        >
          <span class="sr-only">Open main menu</span>
          <font-awesome-icon :icon="['fas', 'hamburger']" />
        </button>
      </div>

      <div class="hidden lg:flex lg:gap-x-12">
        <a
          href="#"
          class="text-sm font-semibold leading-6 text-gray-900"
        >
          Over mij
        </a>
        <a
          href="#"
          class="text-sm font-semibold leading-6 text-gray-900"
        >
          Vaardigheden
        </a>
        <a
          href="#"
          class="text-sm font-semibold leading-6 text-gray-900"
        >
          Projecten
        </a>
      </div>

      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a
          href="#"
          class="text-sm font-semibold leading-6 text-gray-900"
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
          enter="duration-300 ease-out"
          enter-from="opacity-0 translate-x-full"
          enter-to="opacity-100 translate-x-0"
          leave="duration-200 ease-in"
          leave-from="opacity-100 translate-x-0"
          leave-to="opacity-0 translate-x-full"
        >
          <DialogPanel
            class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
          >
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
                  size="large"
                  aria-hidden="true"
                />
              </button>
            </div>

            <div class="mt-6 flow-root">
              <div class="-my-6 divide-y divide-gray-500/10">
                <div class="space-y-2 py-6">
                  <a
                    class="-mx-2 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    About Me
                  </a>
                  <a
                    class="-mx-2 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Skills
                  </a>
                  <a
                    class="-mx-2 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Projects
                  </a>
                </div>

                <div class="py-6">
                  <a
                    href="#"
                    class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </TransitionChild>
      </Dialog>
    </TransitionRoot>
  </header>
</template>
