<template>
  <v-content max-width="700">
    <v-container fluid>
      <v-card class="mx-auto" outlined>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Algorytm</th>
                <th class="text-left">Złożoność pesymistyczna</th>
                <th class="text-left">Złożoność oczekiwana</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in zlozonosc" :key="item.name">
                <td>{{ item.name }}</td>
                <td v-html="item.pes"></td>
                <td v-html="item.ocz"></td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>

      <v-card class="mx-auto mt-4" outlined>
        <v-list three-line>
          <v-subheader>FILMY</v-subheader>
          <v-list-item-group color="primary">
            <v-list-item
              v-for="link in linksYoutube"
              :key="link.title"
              :href="link.href"
            >
              <v-list-item-icon>
                <v-icon>mdi-youtube</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  class="font-weight-medium"
                  v-text="link.title"
                ></v-list-item-title>
                <div
                  class="text--secondary subtitle-2"
                  v-html="link.content"
                ></div>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>

        <v-list three-line>
          <v-subheader>STRONY INTERNETOWE</v-subheader>
          <v-list-item-group color="primary">
            <v-list-item
              v-for="link in linksWebsite"
              :key="link.title"
              :href="link.href"
            >
              <v-list-item-icon>
                <v-icon>mdi-web</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  class="font-weight-medium"
                  v-text="link.title"
                ></v-list-item-title>
                <div
                  class="text--secondary subtitle-2"
                  v-html="link.content"
                ></div>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "home",
  components: {
    // HelloWorld
  },
  data: function() {
    return {
      linksYoutube: [
        {
          title: "15 Sorting Algorithms in 6 Minutes",
          href: "https://www.youtube.com/watch?v=kPRA0W1kECg",
          content: `Visualization and "audibilization" of 15 Sorting Algorithms in 6 Minutes.
Sorts random shuffles of integers, with both speed and the number of items adapted to each algorithm's complexity.`
        },
        {
          title: "Visualization Sorting Algorithms",
          href: "https://www.youtube.com/watch?v=ZZuD6iUe3Pc",
          content: `Visualization and comparison of 9 different sorting algorithms:
selection sort,
shell sort,
insertion sort,
merge sort,
quick sort,
heap sort,
bubble sort,
comb sort,
cocktail sort.`
        },
        {
          title: "16 Sorts - Color Circle",
          href: "https://www.youtube.com/watch?v=y9Ecb43qw98&t=226s",
          content: `Circle Sorting Visualizer/Audiolizer.`
        }
      ],
      linksWebsite: [
        {
          title: "Algorytmy Sortowania",
          href: "http://www.algorytm.org/algorytmy-sortowania/",
          content:
            "Algorytmy sortowania, zarówno te proste jak i bardziej zaawansowane i wydajne, scalanie ciągów, ..."
        },
        {
          title: "Programowanie i algorytmy",
          href: "http://algorytm.edu.pl/",
          content: `Serwis został podzielony na kilka kategorii:
Programowanie w C++ - kurs języka C++,
Zadania - zadania z rozwiązaniami podzielone tematycznie,
Ćwiczenia - ćwiczenia do samodzielnego rozwiązania. Niektóre z nich można testować na automatycznej sprawdzarce,
Matura - zadania programistyczne przygotowujące do matury oraz arkusze maturalne z informatyki`
        },
        {
          title: "Khan Academy - Algorytmy",
          href:
            "https://pl.khanacademy.org/computing/computer-science/algorithms",
          content:
            "Wspólnie z profesorami z Dartmouth College Tomem Cormenem i Devinem Balkcom przygotowaliśmy wstępny kurs algorytmów, obejmujący między innymi przeszukiwanie, sortowanie, rekurencję i teorię grafów. Skorzystaj z artykułów, wizualizacji, quizów i problemów do rozwiązania aby nauczyć się podstaw algorytmów."
        },
        {
          title: "Sorting Algorithms",
          href: "https://www.geeksforgeeks.org/sorting-algorithms/",
          content:
            "A Sorting Algorithm is used to rearrange a given array or list elements according to a comparison operator on the elements. The comparison operator is used to decide the new order of element in the respective data structure."
        }
      ],
      zlozonosc: [
        {
          name: "Sortowanie przez wybieranie",
          pes: "O(n) = n<sup>2</sup>",
          ocz: "O(n) = n<sup>2</sup>"
        },
        {
          name: "Sortowanie przez wstawianie",
          pes: "O(n) = n<sup>2</sup>",
          ocz: "O(n) = n<sup>2</sup>"
        },
        {
          name: "Sortowanie bąbelkowe",
          pes: "O(n) = n<sup>2</sup>",
          ocz: "O(n) = n<sup>2</sup>"
        },
        {
          name: "Sortowanie szybkie",
          pes: "O(n) = n<sup>2</sup>",
          ocz: "O(n) = n log<sub>2</sub> n"
        },
        {
          name: "Sortowanie przez scalanie",
          pes: "O(n) = n log<sub>2</sub>n",
          ocz: "O(n) = n log<sub>2</sub>n"
        },
        {
          name: "Sortowanie kubełkowe",
          pes: "O(n) = n",
          ocz: "O(n) = n"
        },
        {
          name: "Wyszukiwanie binarne",
          pes: "O(n) = log<sub>2</sub>n",
          ocz: "O(n) = log<sub>2</sub>n"
        }
      ]
    };
  }
};
</script>
