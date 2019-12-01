<template>
  <v-col cols="12">
    <v-card outlined>
      <v-tabs v-model="tab" background-color="primary" fixed-tabs dark>
        <v-tabs-slider></v-tabs-slider>

        <v-tab v-for="el in implement" :key="el.lang" :href="'#' + el.lang">
          {{ el.lang }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="el in implement"
          :key="el.lang + '-code'"
          :value="el.lang"
        >
          <v-card flat>
            <v-card-text>
              <highlight :code="el.code" :language="el.lang"></highlight>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-col>
</template>

<script>
// import hljs from "highlight.js";
import Highlight from "vue-highlight-component";

export default {
  name: "Implementation",
  components: {
    Highlight
  },
  props: {
    implement: { type: Array }
  },
  data() {
    return {
      tab: null
    };
  }
};
</script>

<style lang="scss" scoped>
code {
  width: 100%;
  box-shadow: none;
}
</style>
