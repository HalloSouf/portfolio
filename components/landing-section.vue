<script setup lang="ts">
const { $ScrollTrigger, $gsap } = useNuxtApp();
const config = useRuntimeConfig();

const showContent = ref<boolean>(false);
const timelines: Record<string, GSAPTimeline> = {};

onMounted((): void => {
  requestAnimationFrame((): boolean => (showContent.value = true));

  timelines.heading = $gsap.timeline({
    scrollTrigger: $ScrollTrigger.create({
      trigger: '#heading',
      onEnter: (): GSAPTimeline => timelines.heading.play(),
      onEnterBack: (): GSAPTimeline => timelines.heading.restart()
    })
  });

  timelines.links = $gsap.timeline({
    scrollTrigger: $ScrollTrigger.create({
      trigger: '#heading-links',
      onEnter: (): GSAPTimeline => timelines.links.play(),
      onEnterBack: (): GSAPTimeline => timelines.links.restart()
    })
  });

  timelines.heading.fromTo(
    '#heading-title',
    { opacity: 0, y: 12 },
    { opacity: 1, y: 0, duration: 0.7 }
  );
  timelines.heading.fromTo(
    '#heading-subtitle',
    { opacity: 0, x: 16 },
    { opacity: 1, x: 0, duration: 0.7 }
  );

  timelines.links.fromTo(
    '#heading-links',
    { opacity: 0, x: 12 },
    { opacity: 1, x: 0, duration: 0.7 }
  );

  timelines.heading.play();
  timelines.links.play();
});
</script>

<template>
  <header
    id="landing-section"
    class="h-screen w-full isolate"
  >
    <div
      class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      aria-hidden="true"
    >
      <div
        class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-500 to-sky-600 opacity-20 sm:right-[calc(50%-30rem)] sm:w-[72.1875rem]"
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

    <div class="max-w-7xl mx-auto flex items-center h-full pb-20 px-10">
      <div id="heading">
        <h1
          id="heading-title"
          class="leading-loose"
        >
          <span class="heading-title">Zeg hallo</span>
          <br />
          <span class="heading-title">tegen</span>
          <span class="heading-title--marked">Souf IT.</span>
        </h1>

        <p
          id="heading-subtitle"
          class="heading-subtitle mt-5"
        >
          Verwelkom jij jouw nieuwe website met open armen?
        </p>
      </div>

      <div class="absolute right-16 bottom-10">
        <div id="heading-links" class="flex flex-row gap-x-6">
          <a
            :href="config.public.userLinkedinUrl"
            target="_blank"
          >
            <font-awesome-icon
              :icon="['fab', 'linkedin']"
              size="xl"
              class="heading-icon"
            />
          </a>

          <a
            :href="config.public.userGithubUrl"
            target="_blank"
          >
            <font-awesome-icon
              :icon="['fab', 'github']"
              size="xl"
              class="heading-icon"
            />
          </a>

          <a
            :href="config.public.userInstagramUrl"
            target="_blank"
          >
            <font-awesome-icon
              :icon="['fab', 'instagram']"
              size="xl"
              class="heading-icon"
            />
          </a>
        </div>
      </div>
    </div>
  </header>
</template>
