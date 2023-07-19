<script setup lang="ts">
const { $ScrollTrigger, $gsap } = useNuxtApp();

const timelines: Record<string, GSAPTimeline> = {};

onMounted((): void => {
  timelines.heading = $gsap.timeline({
    scrollTrigger: $ScrollTrigger.create({
      trigger: '#skills-heading',
      start: 'top bottom',
      end: 'bottom top',
      onEnter: (): GSAPTimeline => timelines.heading.restart(),
      onEnterBack: (): GSAPTimeline => timelines.heading.restart()
    })
  });

  timelines.frontend = $gsap.timeline({
    scrollTrigger: $ScrollTrigger.create({
      trigger: '#skills-frontend',
      start: 'top bottom',
      end: 'bottom top',
      onEnter: (): GSAPTimeline => timelines.frontend.restart(),
      onEnterBack: (): GSAPTimeline => timelines.frontend.restart()
    })
  });

  timelines.backend = $gsap.timeline({
    scrollTrigger: $ScrollTrigger.create({
      trigger: '#skills-backend',
      start: 'top bottom',
      end: 'bottom top',
      onEnter: (): GSAPTimeline => timelines.backend.restart(),
      onEnterBack: (): GSAPTimeline => timelines.backend.restart()
    })
  });

  timelines.tools = $gsap.timeline({
    scrollTrigger: $ScrollTrigger.create({
      trigger: '#skills-tools',
      start: 'top bottom',
      end: 'bottom top',
      onEnter: (): GSAPTimeline => timelines.tools.restart(),
      onEnterBack: (): GSAPTimeline => timelines.tools.restart()
    })
  });

  timelines.heading.fromTo(
    '#skills-heading',
    { opacity: 0, y: -12 },
    { opacity: 1, y: 0, duration: 0.7, delay: 0.5 }
  );

  document.querySelectorAll('.skills-item--frontend').forEach((element) => {
    timelines.frontend.fromTo(
      element,
      { opacity: 0, y: -12 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 }
    );
  });

  document.querySelectorAll('.skills-item--backend').forEach((element) => {
    timelines.backend.fromTo(
      element,
      { opacity: 0, y: -12 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 }
    );
  });

  document.querySelectorAll('.skills-item--tools').forEach((element) => {
    timelines.tools.fromTo(
      element,
      { opacity: 0, y: -12 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 }
    );
  });
});
</script>

<template>
  <section class="min-h-screen relative">
    <div class="px-12 md:px-8 max-w-7xl min-h-screen mx-auto">
      <div class="w-full min-h-screen flex justify-center flex-col">
        <div id="skills-heading">
          <h1 class="text-4xl text-white font-semibold">
            Wat
            <span class="underline decoration-dashed underline-offset-8 text-sky-500">gebruik</span>
            ik voor mijn werk?
          </h1>

          <p class="text text-sm sm:text-base mt-4">
            Als software-ontwikkelaar pas ik dagelijks een breed scala aan programmeertechnologieën
            toe om op maat gemaakte software-oplossingten te creëren die voldoen aan diverse
            behoeften.
            <span
              class="font-semibold underline-offset-4 decoration-wavy underline text-orange-400"
            >
              Maar welke technologieën horen daarbij?
            </span>
          </p>
        </div>

        <div
          class="border-b border-[#1c1c2e] border-t mt-10 w-full flex flex-col md:flex-row divide-y md:divide-x divide-neutral-900/40"
        >
          <div
            id="skills-frontend"
            class="w-full py-5 px-10"
          >
            <h2 class="text-white font-semibold text-2xl flex gap-x-4">
              <i>
                <font-awesome-icon
                  :icon="['fas', 'code']"
                  class="text-xl"
                />
              </i>
              Front-end
            </h2>

            <ul class="mt-5 flex flex-col gap-y-6">
              <li class="skills-item--frontend">
                <img
                  src="~/assets/images/logo-svelte.png"
                  class="logo-image--rounded"
                />
                <span class="text font-medium">SvelteKit</span>
              </li>

              <li class="skills-item--frontend">
                <img
                  src="~/assets/images/logo-nuxt.svg"
                  class="logo-image"
                />
                <span class="text font-medium">Nuxt</span>
              </li>

              <li class="skills-item--frontend">
                <img
                  src="~/assets/images/logo-laravel.png"
                  class="logo-image"
                />
                <span class="text font-medium">laravel</span>
              </li>

              <li class="skills-item--frontend">
                <img
                  src="~/assets/images/logo-react.svg"
                  class="logo-image"
                />
                <span class="text font-medium">React (Native)</span>
              </li>

              <li class="skills-item--frontend">
                <img
                  src="~/assets/images/logo-tailwind.png"
                  class="logo-image--rounded"
                />
                <span class="text font-medium">Tailwind CSS</span>
              </li>
            </ul>
          </div>

          <div
            id="skills-backend"
            class="w-full py-5 px-10"
          >
            <h2 class="text-white font-semibold text-2xl gap-x-4 flex">
              <i>
                <font-awesome-icon
                  :icon="['fas', 'server']"
                  class="text-xl"
                />
              </i>

              Back-end
            </h2>

            <ul class="mt-5 flex flex-col gap-y-6">
              <li class="skills-item--backend">
                <img
                  src="~/assets/images/logo-express.png"
                  class="logo-image--rounded"
                />
                <span class="text font-medium">ExpressJS</span>
              </li>

              <li class="skills-item--backend">
                <img
                  src="~/assets/images/logo-laravel.png"
                  class="logo-image"
                />
                <span class="text font-medium">Laravel API</span>
              </li>

              <li class="skills-item--backend">
                <img
                  src="~/assets/images/logo-prisma.webp"
                  class="logo-image--rounded"
                />
                <span class="text font-medium">Prisma</span>
              </li>

              <li class="skills-item--backend">
                <img
                  src="~/assets/images/logo-rabbitmq.png"
                  class="logo-image"
                />
                <span class="text font-medium">Rabbit MQ</span>
              </li>

              <li class="skills-item--backend">
                <img
                  src="~/assets/images/logo-mongodb.png"
                  class="logo-image--rounded"
                />
                <span class="text font-medium">Mongo DB</span>
              </li>

              <li class="skills-item--backend">
                <img
                  src="~/assets/images/logo-mysql.png"
                  class="logo-image"
                />
                <span class="text font-medium">MySQL</span>
              </li>

              <li class="skills-item--backend">
                <img
                  src="~/assets/images/logo-redis.png"
                  class="logo-image"
                />
                <span class="text font-medium">Redis DB</span>
              </li>
            </ul>
          </div>

          <div
            id="skills-tools"
            class="w-full py-5 px-10"
          >
            <h2 class="text-white font-semibold text-2xl flex items-center gap-x-4">
              <i>
                <font-awesome-icon
                  :icon="['fas', 'toolbox']"
                  class="text-xl"
                />
              </i>
              Hulpmiddelen
            </h2>

            <ul class="mt-5 flex flex-col gap-y-6">
              <li class="skills-item--tools">
                <img
                  src="~/assets/images/logo-code.png"
                  class="logo-image"
                />
                <span class="text font-medium">Visual Studio Code</span>
              </li>

              <li class="skills-item--tools">
                <img
                  src="~/assets/images/logo-vercel.webp"
                  class="logo-image--rounded"
                />
                <span class="text font-medium">Vercel</span>
              </li>

              <li class="skills-item--tools">
                <img
                  src="~/assets/images/logo-cloudflare.png"
                  class="logo-image--rounded"
                />
                <span class="text font-medium">Cloudflare</span>
              </li>

              <li class="skills-item--tools">
                <img
                  src="~/assets/images/logo-github.png"
                  class="logo-image--rounded"
                />
                <span class="text font-medium">Github</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-orange-400 to-orange-300 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "
        ></div>
      </div>
    </div>
  </section>
</template>
