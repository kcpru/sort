<template>
  <v-col cols="12">
    <v-card class="mx-auto" outlined>
      <v-card-title>Obrazy</v-card-title>
      <v-row dense>
        <v-col v-for="img in images" :key="img.src" cols="12" class="d-sm-none">
          <v-card class="mx-auto" outlined max-width="95%">
            <v-img :alt="img.alt" :src="img.src" max-width="60%"></v-img>
          </v-card>
        </v-col>

        <v-col
          v-for="img in images"
          :key="img.src + '-sm'"
          cols="6"
          class="d-none d-sm-block"
        >
          <v-card class="mx-auto" outlined max-width="95%">
            <v-img :alt="img.alt" :src="img.src"></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "CardImage",
  props: {
    images: { type: Array }
  }
};
</script>
