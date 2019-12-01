<template>
  <v-content>
    <v-container fluid>
      <v-row dense>
        <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
          <v-card class="mx-auto" max-width="100%" outlined>
            <v-card-title>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit illum a, consequatur pariatur eum, ab magni quam vel, expedita necessitatibus corrupti. Neque ullam eveniet similique ratione minus sunt quis molestiae consequatur autem ex soluta officiis, nihil, nulla earum reprehenderit provident at! Provident, ut odit dolorem molestias inventore deserunt, eum adipisci natus consequatur eius eveniet architecto quae nulla fugit temporibus nostrum reprehenderit rerum nisi iure? Pariatur, sed ab. Odio quod, perferendis ex excepturi deserunt animi, officia eveniet obcaecati, accusantium quas autem? Nisi eum iure dolorem at sint quidem deserunt eos vero, qui et similique voluptas quam iste modi hic officia neque ullam tempore quae mollitia provident quia esse. Quidem maiores alias, ut distinctio cum architecto voluptatibus nesciunt in, provident error earum aut, enim accusantium ab dolores? Perspiciatis dolorem nihil dolore ducimus exercitationem provident nam aut natus doloremque enim delectus illo similique necessitatibus, iure quia, eos, voluptate dolor neque hic nostrum? Reprehenderit, incidunt quas. Repellendus saepe quas est error quidem quibusdam sed cupiditate. Totam amet porro aliquid dolor maxime, placeat velit veritatis nostrum fugiat, voluptatem dolorem tenetur ea asperiores ex, itaque nam? Expedita natus ullam alias hic sit ipsam maiores, aperiam quae voluptatibus? Dolorum soluta laudantium minus error commodi ut, optio eveniet.</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "Quicksort",
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
