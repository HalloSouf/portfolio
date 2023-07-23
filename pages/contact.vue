<template>
  <div>
    <ContactNavbar />

    <section class="mt-20 flex justify-center">
      <div>
        <div class="text-center">
          <h1 class="text-4xl text-white font-semibold">👋 Hey hallo!</h1>
          <p class="leading-loose mt-3 w-3/5 mx-auto text-white font-mediumt text-xl">
            Laten we samen in
            <span class="text-sky-600 underline-offset-4 underline decoration-double font-bold">
              contact
            </span>
            komen om jouw ideeën te realiseren.
          </p>
        </div>

        <form
          class="mt-10"
          @submit="onSubmit"
        >
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                for="first-name"
                class="block text-sm font-semibold leading-6 text-white"
              >
                Jouw naam
              </label>

              <div class="mt-2.5">
                <input
                  id="name"
                  v-model="name"
                  type="text"
                  name="name"
                  required
                  autocomplete="given-name"
                  placeholder="Vul jouw naam in"
                  class="block w-full bg-transparent focus:ring-0 border-0 px-3.5 pl-0 py-2 focus:border-sky-600 transition duration-200 text-white shadow-sm border-b-2 border-white placeholder:text-white/50 sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                for="email"
                class="block text-sm font-semibold leading-6 text-white"
              >
                E-mailadres
              </label>

              <div class="mt-2.5">
                <input
                  id="email"
                  v-model="email"
                  type="email"
                  required
                  name="email"
                  autocomplete="email"
                  placeholder="Vul jouw e-mailadres in"
                  class="block w-full bg-transparent focus:ring-0 border-0 px-3.5 pl-0 py-2 focus:border-sky-600 transition duration-200 text-white shadow-sm border-b-2 border-white placeholder:text-white/50 sm:leading-6"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label
                for="message"
                class="block text-sm font-semibold leading-6 text-white"
              >
                Jouw bericht
              </label>

              <div class="mt-2.5">
                <textarea
                  id="message"
                  v-model="message"
                  name="message"
                  placeholder="Hallo! Ik heb een fantastisch idee voor een nieuwe webshop. Ik zou graag met jou in contact willen komen om dit idee te bespreken."
                  rows="4"
                  required
                  class="block w-full bg-transparent focus:ring-0 border-0 px-3.5 pl-0 py-2 focus:border-sky-600 transition duration-200 text-white shadow-sm border-b-2 border-white placeholder:text-white/50 sm:leading-6"
                ></textarea>
              </div>
            </div>
          </div>

          <div class="mt-10">
            <button
              type="submit"
              class="block w-full rounded-md bg-sky-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-700 transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              @submit="onSubmit"
            >
              Let's talk
            </button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { $mail } = useNuxtApp();

const name = ref<string>('');
const email = ref<string>('');
const message = ref<string>('');

/**
 * Handles the form submission and sends an email using $mail.
 * @param {Event} e - The form submission event.
 * @returns {void}
 */
const onSubmit = (e: Event): void => {
  e.preventDefault();

  $mail.send({
    from: `"${name.value} 🐧" <${email.value}>`,
    to: 'contact@soufit.nl',
    subject: 'Contact: Souf IT',
    text: message.value
  });

  window.location.href = '/contact?state=success';
};

useServerSeoMeta({
  title: 'Souf IT: Neem contact op · Souf IT',
  description:
    'Zeg hallo tegen Souf IT. Samen ontdekken wij grenzeloze mogelijkheden voor uw situatie. Doe je mee?',
  author: 'HalloSouf',
  charset: 'utf-8',
  ogDescription:
    'Zeg hallo tegen Souf IT. Samen ontdekken wij grenzeloze mogelijkheden voor uw situatie. Doe je mee?',
  viewport: 'width=device-width, initial-scale=1.0',
  ogUrl: 'https://soufit.nl',
  ogTitle: 'Souf IT: Neem contact op',
  ogSiteName: 'Souf IT',
  ogType: 'website',
  ogLocale: 'nl_NL',
  themeColor: '#10101a',
  twitterImage: 'https://soufit.nl/images/soufit-banner.png'
});
</script>
