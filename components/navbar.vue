<script setup lang="ts">
const scrollTo = (section: string): void => {
  const element = document.getElementById(`${section}-section`);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <div
    class="sticky top-0 w-full flex items-center justify-center max-w-7xl mx-auto px-2 mx:px-4 lg:px-8 h-20"
  >
    <div class="flex items-center gap-x-12">
      <button
        class="text-sm font-medium leading-6 text-gray-900 transform hover:-translate-y-0.5 hover:font-semibold hover:scale-105 transition duration-500"
        @click="() => scrollTo('home')"
      >
        Home
      </button>

      <button
        class="text-sm font-medium leading-6 text-gray-900 transform hover:-translate-y-0.5 hover:font-semibold hover:scale-105 transition duration-500"
        @click="() => scrollTo('skills')"
      >
        Skills
      </button>

      <button
        href=""
        class="text-sm font-medium leading-6 text-gray-900 transform hover:-translate-y-0.5 hover:font-semibold hover:scale-105 transition duration-500"
      >
        Projects
      </button>

      <button
        href=""
        class="text-sm font-medium leading-6 text-gray-900 transform hover:-translate-y-0.5 hover:font-semibold hover:scale-105 transition duration-500"
      >
        Contact
      </button>
    </div>
  </div>
</template>
