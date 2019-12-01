<template>
  <v-app>
    <Bar />
    <div style="max-width: 800px" class="mx-auto">
      <router-view />
    </div>
    <Footer />
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
import Bar from "./components/Bar";
import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    // HelloWorld,
    Bar,
    Footer
  },

  data: () => ({
    //
  })
};
</script>
