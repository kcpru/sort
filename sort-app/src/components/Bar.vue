<template>
  <v-app-bar app color="primary" dark>
    <v-btn class="d-flex align-center" to="/" text>
      <!-- <v-icon class="display-1">mdi-sort-alphabetical</v-icon> -->
      <span class="title">SORTOWANIA</span>
    </v-btn>

    <v-spacer></v-spacer>
    <div class="d-none d-lg-block">
      <v-btn v-for="item in navItems" :key="item.title" :to="item.to" text>
        <span class="mr-2">{{ item.title }}</span>
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </div>

    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-app-bar-nav-icon class="d-lg-none" v-on="on"></v-app-bar-nav-icon>
      </template>
      <v-list>
        <v-list-item
          v-for="item in navItems"
          :key="item.title"
          :href="'#' + item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: "Bar",

  components: {
    //
  },

  data: () => ({
    navItems: [
      {
        to: "/quicksort",
        icon: "mdi-clock-fast",
        title: "Quick sort"
      },
      {
        to: "/mergesort",
        icon: "mdi-merge",
        title: "Merge sort"
      },
      {
        to: "/selectionsort",
        icon: "mdi-selection-drag",
        title: "Selection sort"
      },
      {
        to: "/insertionsort",
        icon: "mdi-image-frame",
        title: "Insertion sort"
      },
      {
        to: "/bubblesort",
        icon: "mdi-chart-bubble",
        title: "Bubble sort"
      },
      {
        to: "/bucketsort",
        icon: "mdi-format-color-fill",
        title: "Bucket sort"
      }
    ]
  })
};
</script>
