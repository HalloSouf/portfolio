<template>
  <footer>
    <div class="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
      <div class="flex justify-center space-x-6 md:order-2">
        <a
          :href="$config.public.userInstagramUrl"
          target="_blank"
          class="text-gray-400 hover:text-gray-500 flex items-center"
        >
          <span class="sr-only">Instagram</span>
          <font-awesome-icon :icon="['fab', 'instagram']" class="text-xl" />
        </a>

        <a
          :href="$config.public.userDiscordUrl"
          target="_blank"
          class="text-gray-400 hover:text-gray-500 flex items-center"
        >
          <span class="sr-only">Discord</span>
          <font-awesome-icon :icon="['fab', 'discord']" />
        </a>

        <a
          :href="$config.public.userDiscordUrl"
          target="_blank"
          class="text-gray-400 hover:text-gray-500 flex items-center"
        >
          <span class="sr-only">Github</span>
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>

        <a
          :href="$config.public.userLinkedinUrl"
          target="_blank"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">LinkedIn</span>
          <font-awesome-icon :icon="['fab', 'linkedin-in']" />
        </a>
      </div>

      <div class="mt-8 md:order-1 md:mt-0">
        <p class="text-center text-xs leading-5 text-gray-500">
          &copy; 2023 Souf IT, Inc. All rights reserved.
        </p>
      </div>

      <div class="mt-8 md:order-1 md:mt-0">
        <p class="text-center text-xs leading-5 text-gray-500">
          KvK: 90534468
        </p>
      </div>
    </div>
  </footer>
</template>
