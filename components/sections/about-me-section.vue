<script setup lang="ts">
const { $ScrollTrigger, $gsap } = useNuxtApp();

const timelines: Record<string, GSAPTimeline> = {};

onMounted((): void => {
  timelines.aboutMe = $gsap.timeline({
    scrollTrigger: $ScrollTrigger.create({
      trigger: '#about-me',
      start: 'top bottom',
      end: 'bottom top',
      onEnterBack: (): GSAPTimeline => timelines.aboutMe.restart(),
      onEnter: (): GSAPTimeline => timelines.aboutMe.restart()
    })
  });

  timelines.aboutCompany = $gsap.timeline({
    scrollTrigger: $ScrollTrigger.create({
      trigger: '#about-company',
      start: 'top bottom',
      end: 'bottom top',
      onEnterBack: (): GSAPTimeline => timelines.aboutCompany.restart(),
      onEnter: (): GSAPTimeline => timelines.aboutCompany.restart()
    })
  });

  timelines.aboutMe.fromTo(
    '#about-me',
    { opacity: 0, x: -12 },
    { opacity: 1, x: 0, duration: 0.7 }
  );

  timelines.aboutCompany.fromTo(
    '#about-me-presentation',
    { opacity: 0 },
    { opacity: 1, duration: 1 }
  );
  timelines.aboutCompany.fromTo(
    '#about-company',
    { opacity: 0, x: -12 },
    { opacity: 1, x: 0, duration: 0.7 }
  );
});
</script>

<template>
  <section
    id="about-me-section"
    class="min-h-screen"
  >
    <div class="px-12 md:px-8 max-w-7xl min-h-screen mx-auto">
      <div class="w-full min-h-screen flex md:flex-row flex-col-reverse items-center gap-x-20">
        <div class="w-full md:w-1/2 mt-10 flex justify-center">
          <NuxtImg
            id="about-me-presentation"
            src="/images/co2-presentation.jpg"
            format="webp"
            alt="CO2 Presentation"
            class="rounded-lg w-[32rem] h-full shadow-md pb-20: md:pb-0"
          />
        </div>

        <div class="w-full text-left md:w-1/2">
          <article id="about-me">
            <h1 class="text-4xl text-white font-semibold">Wie ben ik?</h1>

            <p class="text-gray-200 text-sm sm:text-base leading-loose mt-4">
              Hey hallo! 👋 Ik ben Soufiane, en in mijn vrije tijd ben ik bezig met bouwen van
              websites. Naast mijn interesse in webontwikkeling volg ik ook een HBO-ICT opleiding
              aan het Windesheim.
            </p>
          </article>

          <article id="about-company">
            <h3 class="sm:text-lg text-base text-white font-semibold mt-10">
              💻 Wat is
              <span
                class="text-sky-600 tracking-tight underline underline-offset-4 decoration-wavy break-keep"
              >
                Souf IT.
              </span>
            </h3>

            <p class="text-gray-200 text-sm sm:text-base leading-loose mt-1">
              Naast het technisch aspect ben ik ook bezig met het realiseren van op maat gemaakte
              oplossingen voor particulieren en bedrijven. Met een luisterend oor voor elk individu
              realiseer ik software oplossingen voor de desbetreffende situatie.
            </p>
          </article>
        </div>
      </div>
    </div>

    <div
      class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      aria-hidden="true"
    >
      <div
        class="relative right-0 aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-sky-500 to-orange-500 opacity-20 sm:right-0 sm:w-[72.1875rem]"
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
  </section>
</template>
