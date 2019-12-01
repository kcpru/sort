<template>
  <v-content>
    <v-container fluid>
      <v-row dense>
        <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
          <v-card class="mx-auto" max-width="100%" outlined>
            <v-card-title>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              illum a, consequatur pariatur eum, ab magni quam vel, expedita
              necessitatibus corrupti. Neque ullam eveniet similique ratione
              minus sunt quis molestiae consequatur autem ex soluta officiis,
              nihil, nulla earum reprehenderit provident at! Provident, ut odit
              dolorem molestias inventore deserunt, eum adipisci natus
              consequatur eius eveniet architecto quae nulla fugit temporibus
              nostrum reprehenderit rerum nisi iure? Pariatur, sed ab.
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "Insertionsort",
  components: {
    //
  },
  data: () => ({
    cards: [
      {
        title: "Pre-fab homes",
        flex: 12
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 6
      },
      {
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 6
      }
    ]
  })
};
</script>
