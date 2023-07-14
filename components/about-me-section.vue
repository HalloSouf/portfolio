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
      onEnter: (): GSAPTimeline => timelines.aboutMe.isActive() ? timelines.aboutMe.restart() : timelines.aboutMe.play()
    })
  });

  timelines.aboutCompany = $gsap.timeline({
    scrollTrigger: $ScrollTrigger.create({
      trigger: '#about-company',
      start: 'top bottom',
      end: 'bottom top',
      onEnterBack: (): GSAPTimeline => timelines.aboutCompany.restart(),
      onEnter: (): GSAPTimeline => timelines.aboutCompany.isActive() ? timelines.aboutCompany.restart() : timelines.aboutCompany.play()
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
    class="h-screen"
  >
    <div class="px-12 md:px-8 max-w-7xl h-full mx-auto">
      <div class="w-full h-full flex md:flex-row flex-col-reverse items-center gap-x-20">
        <div class="w-full md:w-1/2 mt-10 flex justify-center">
          <img id="about-me-presentation" src="/images/co2-presentation.jpg" class="rounded-lg w-[32rem] h-auto shadow-md" />
        </div>

        <div class="w-full text-left md:w-1/2">
          <article id="about-me">
            <h1 class="text-4xl text-white font-semibold">Wie ben ik?</h1>

            <p class="text-gray-200 text-sm sm:text-base leading-loose mt-4">
              Hey hallo! 👋 Ik ben Soufiane, en in mijn vrije tijd ben ik bezig met bouwen van
              websites. Naast mijn interesse in webontwikkeling, volg ik ook een HBO-ICT opleiding
              aan het Windesheim.
            </p>
          </article>

          <article id="about-company">
            <h3 class="sm:text-lg text-base text-white font-semibold mt-10">
              💻 Werkzaamheden <span class="text-sky-600 tracking-tight underline underline-offset-4 decoration-wavy break-keep">Souf IT.</span>
            </h3>

            <p class="text-gray-200 text-sm sm:text-base leading-loose mt-1">
              Naast het technisch aspect, ben ik ook bezig met het realiseren van op maat
              gemaakte oplossingen voor particulieren en bedrijven. Met een luisterend oor voor elk
              individu, realiseer ik een software oplossing voor de desbetreffende situatie.
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
