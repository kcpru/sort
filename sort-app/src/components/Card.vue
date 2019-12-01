<template>
  <v-col :cols="flex">
    <v-card class="mx-auto" max-width="100%" outlined>
      <v-card-title>{{ title }}</v-card-title>
      <v-card-subtitle v-if="subtitle">
        {{ subtitle }}
      </v-card-subtitle>
      <v-card-text class="text--primary body-1" v-html="content"></v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: { type: String },
    subtitle: { type: String },
    content: { type: String },
    flex: { type: Number }
  }
};
</script>
