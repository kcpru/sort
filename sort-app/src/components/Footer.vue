<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="primary">
        <strong class="subheading">Ciemny tryb</strong>

        <v-spacer></v-spacer>

        <v-switch @change="switchMode" v-model="dark"></v-switch>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} —
        <strong>Kacper Ślusarczyk</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  components: {
    //
  },
  methods: {
    switchMode: function() {
      this.$vuetify.theme.isDark = this.dark;
    }
  },

  data: () => ({
    dark: false
  })
};
</script>
