<template>
  <header class="relative w-full z-10">
    <nav
      id="navbar"
      class="navbar"
      aria-label="Global"
    >
      <div class="flex">
        <a href="/">
          <span class="sr-only">Souf IT</span>
          <NuxtImg
            class="h-8 w-auto"
            src="/images/soufit-full-logo.svg"
            alt="gamers"
          />
        </a>
      </div>

      <div class="hidden lg:flex">
        <a
          href="/"
          class="navbar-item"
        >
          <span>Sluit formulier</span>
          <i class="text-xl ml-2">
            <font-awesome-icon :icon="['fas', 'xmark']" />
          </i>
        </a>
      </div>
    </nav>
  </header>
</template>
