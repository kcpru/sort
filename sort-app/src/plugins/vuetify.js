import Vue from "vue";
import Vuetify from "vuetify/lib";

import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: colors.teal,
        secondary: colors.teal.darken1,
        accent: colors.teal.black,
        error: colors.teal.accent3
      },
      dark: {
        primary: colors.teal
      }
    }
  }
});

export default vuetify;
