import { library, config } from '@fortawesome/fontawesome-svg-core';
// eslint-disable-next-line import/named
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

config.autoAddCss = false;

/**
 * Imports the necessary modules from the Font Awesome package and defines a Nuxt plugin that registers the `font-awesome-icon` component.
 * @param {import('@nuxt/types').NuxtApp} nuxtApp - The Nuxt app instance.
 * @returns {void}
 */
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
});
