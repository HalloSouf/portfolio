<template>
  <section
    id="projects-section"
    class="min-h-screen relative pt-10 isolate"
  >
    <div class="px-12 md:px-8 max-w-7xl min-h-screen mx-auto">
      <div class="w-full min-h-screen flex justify-center flex-col">
        <div class="w-full lg:w-2/3 mb-8">
          <h1 class="text-4xl text-white font-semibold">Mijn projecten & Werkervaringen</h1>

          <p class="text-white text mt-4">
            Tijdens mijn carrier als software ontwikkelaar heb ik al aan verschillende eigen
            projecten gewerkt, en meegewerkt aan projecten van andere bedrijven. Hieronder vind je
            een overzicht van mijn projecten en werkervaringen.
          </p>
        </div>

        <div
          id="projects-overview"
          class="grid grid-cols-1 gap-y-4 md:grid-cols-2 gap-x-6"
        >
          <div class="project-card">
            <div class="project-card-header">
              <NuxtImg
                src="/images/soufit-full-logo.svg"
                alt="Souf IT"
              />
              <p>Samen ontdekken wij grenzeloze mogelijkheden voor jouw digitale toekomst.</p>
            </div>

            <div class="project-card-badges">
              <span class="badge--startup">
                <i>
                  <font-awesome-icon :icon="['fas', 'building']" />
                </i>
                Startup
              </span>

              <a
                target="_blank"
                href="https://soufit.nl"
                class="badge--url"
              >
                <i>
                  <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" />
                </i>
                soufit.nl
              </a>

              <a
                target="_blank"
                href="https://github.com/hallosouf/portfolio"
                class="badge--url"
              >
                <i>
                  <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" />
                </i>
                github/portfolio
              </a>
            </div>
          </div>

          <div class="project-card">
            <div class="project-card-header">
              <NuxtImg
                src="/images/logo-travelchef.svg"
                alt="TravelChef"
              />
              <p>Ontdek een wereld van gevarieerde & flexibele reismogelijkheden.</p>
            </div>

            <div class="project-card-badges">
              <span class="badge--internship">
                <i>
                  <font-awesome-icon :icon="['fas', 'kiwi-bird']" />
                </i>
                Stage
              </span>

              <span class="badge--development">
                <i>
                  <font-awesome-icon :icon="['fas', 'person-digging']" />
                </i>
                In ontwikkeling
              </span>
            </div>
          </div>

          <div class="project-card">
            <div class="project-card-header">
              <NuxtImg
                src="/images/logo-ultimatelemon.png"
                alt="UltimateLemon"
              />
              <p>
                Transformeer jouw bedrijfsprocessen met moeiteloze efficiëntie en gebruiksgemak.
              </p>
            </div>

            <div class="project-card-badges">
              <span class="badge--startup">
                <i>
                  <font-awesome-icon :icon="['fas', 'building']" />
                </i>
                Startup
              </span>

              <span class="badge--development">
                <i>
                  <font-awesome-icon :icon="['fas', 'person-digging']" />
                </i>
                In ontwikkeling
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { $ScrollTrigger, $gsap } = useNuxtApp();

const timelines: Record<string, GSAPTimeline> = {};

/**
 * Initializes the timeline animation on mount.
 * @returns {void}
 */
onMounted((): void => {
  timelines.projects = $gsap.timeline({
    scrollTrigger: $ScrollTrigger.create({
      trigger: '#projects-overview',
      start: 'top bottom',
      end: 'bottom top',
      onEnterBack: (): GSAPTimeline => timelines.projects.restart(),
      onEnter: (): GSAPTimeline => timelines.projects.restart()
    })
  });

  document.querySelectorAll('.project-card').forEach((element) => {
    timelines.projects.fromTo(element, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.7 });
  });
});
</script>
