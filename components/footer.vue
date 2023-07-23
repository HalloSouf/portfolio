<script setup lang="ts">
const config = useRuntimeConfig();
</script>

<template>
  <footer>
    <div class="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
      <div class="flex justify-center space-x-6 md:order-2">
        <a
          :href="config.public.userInstagramUrl"
          target="_blank"
          class="text-white/70 hover:text-white flex items-center"
        >
          <span class="sr-only">Instagram</span>
          <font-awesome-icon
            :icon="['fab', 'instagram']"
            class="text-xl"
          />
        </a>

        <a
          :href="config.public.userDiscordUrl"
          target="_blank"
          class="text-white/70 hover:text-white flex items-center"
        >
          <span class="sr-only">Github</span>
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>

        <a
          :href="config.public.userLinkedinUrl"
          target="_blank"
          class="text-white/70 hover:text-white"
        >
          <span class="sr-only">LinkedIn</span>
          <font-awesome-icon :icon="['fab', 'linkedin-in']" />
        </a>
      </div>

      <div class="mt-8 md:order-1 md:mt-0">
        <p class="text-center text-xs leading-5 text-white/70">
          &copy; 2023 Souf IT, Inc. All rights reserved.
        </p>
      </div>

      <div class="mt-8 md:order-1 md:mt-0">
        <p class="text-center text-xs leading-5 text-white/70">
          KvK: {{ config.public.companyCoc }}
        </p>
        <p class="text-center text-xs leading-5 text-white/70">
          BTW: {{ config.public.companyVat }}
        </p>
      </div>
    </div>
  </footer>
</template>
