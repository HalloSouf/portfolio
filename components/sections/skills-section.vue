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
      trigger: '#skills-list',
      start: 'top bottom',
      end: 'bottom top',
      onEnter: (): GSAPTimeline => timelines.frontend.restart(),
      onEnterBack: (): GSAPTimeline => timelines.frontend.restart()
    })
  });

  timelines.backend = $gsap.timeline({
    scrollTrigger: $ScrollTrigger.create({
      trigger: '#skills-list',
      start: 'top bottom',
      end: 'bottom top',
      onEnter: (): GSAPTimeline => timelines.backend.restart(),
      onEnterBack: (): GSAPTimeline => timelines.backend.restart()
    })
  });

  timelines.tools = $gsap.timeline({
    scrollTrigger: $ScrollTrigger.create({
      trigger: '#skills-list',
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
  <section
    id="skills-section"
    class="min-h-screen relative mt-20 md:mt-0"
  >
    <div class="px-12 md:px-8 max-w-7xl min-h-screen mx-auto">
      <div class="w-full min-h-screen flex justify-center flex-col">
        <div
          id="skills-heading"
          class="w-2/3"
        >
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
          id="skills-list"
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
                <NuxtImg
                  src="/images/logo-svelte.png"
                  format=""
                  alt="SvelteKit"
                  class="logo-image--rounded"
                />
                <span class="text font-medium">SvelteKit</span>
              </li>

              <li class="skills-item--frontend">
                <NuxtImg
                  src="/images/logo-nuxt.svg"
                  format="webp"
                  alt="Nuxt"
                  class="logo-image"
                />
                <span class="text font-medium">Nuxt</span>
              </li>

              <li class="skills-item--frontend">
                <NuxtImg
                  src="/images/logo-laravel.png"
                  format="webp"
                  alt="Laravel"
                  class="logo-image"
                />
                <span class="text font-medium">Laravel</span>
              </li>

              <li class="skills-item--frontend">
                <NuxtImg
                  src="/images/logo-react.svg"
                  format="webp"
                  alt="React"
                  class="logo-image"
                />
                <span class="text font-medium">React (Native)</span>
              </li>

              <li class="skills-item--frontend">
                <NuxtImg
                  src="/images/logo-tailwind.png"
                  format="webp"
                  alt="TailwindCSS"
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
                <NuxtImg
                  src="/images/logo-express.png"
                  format="webp"
                  alt="ExpressJS"
                  class="logo-image--rounded"
                />
                <span class="text font-medium">ExpressJS</span>
              </li>

              <li class="skills-item--backend">
                <NuxtImg
                  src="/images/logo-laravel.png"
                  format="webp"
                  alt="Laravel API"
                  class="logo-image"
                />
                <span class="text font-medium">Laravel API</span>
              </li>

              <li class="skills-item--backend">
                <NuxtImg
                  src="/images/logo-prisma.webp"
                  format="webp"
                  alt="Prisma"
                  class="logo-image--rounded"
                />
                <span class="text font-medium">Prisma</span>
              </li>

              <li class="skills-item--backend">
                <NuxtImg
                  src="/images/logo-rabbitmq.png"
                  format="webp"
                  alt="RabbitMQ"
                  class="logo-image"
                />
                <span class="text font-medium">Rabbit MQ</span>
              </li>

              <li class="skills-item--backend">
                <NuxtImg
                  src="/images/logo-mongodb.png"
                  format="webp"
                  alt="MongoDB"
                  class="logo-image--rounded"
                />
                <span class="text font-medium">Mongo DB</span>
              </li>

              <li class="skills-item--backend">
                <NuxtImg
                  src="/images/logo-mysql.png"
                  format="webp"
                  alt="MySQL"
                  class="logo-image"
                />
                <span class="text font-medium">MySQL</span>
              </li>

              <li class="skills-item--backend">
                <NuxtImg
                  src="/images/logo-redis.png"
                  format="webp"
                  alt="RedisDB"
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
                <NuxtImg
                  src="/images/logo-code.png"
                  format="webp"
                  alt="Visual Studio Code"
                  class="logo-image"
                />
                <span class="text font-medium">Visual Studio Code</span>
              </li>

              <li class="skills-item--tools">
                <NuxtImg
                  src="/images/logo-vercel.webp"
                  format="webp"
                  alt="Vercel"
                  class="logo-image--rounded"
                />
                <span class="text font-medium">Vercel</span>
              </li>

              <li class="skills-item--tools">
                <NuxtImg
                  src="/images/logo-cloudflare.png"
                  format="webp"
                  alt="Cloudflare"
                  class="logo-image--rounded"
                />
                <span class="text font-medium">Cloudflare</span>
              </li>

              <li class="skills-item--tools">
                <NuxtImg
                  src="/images/logo-github.png"
                  format="webp"
                  alt="Github"
                  class="logo-image--rounded"
                />
                <span class="text font-medium">Github</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div
      class="absolute hidden lg:block left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[32rem] xl:left-[calc(50%-24rem)]"
      aria-hidden="true"
    >
      <div
        class="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-sky-500 to-[#4f46e5] opacity-20"
        style="
          clip-path: polygon(
            73.6% 51.7%,
            91.7% 11.8%,
            100% 46.4%,
            97.4% 82.2%,
            92.5% 84.9%,
            75.7% 64%,
            55.3% 47.5%,
            46.5% 49.4%
          );
        "
      ></div>
    </div>
  </section>
</template>
