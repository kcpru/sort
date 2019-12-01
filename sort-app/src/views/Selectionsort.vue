<template>
  <v-content>
    <v-container fluid>
      <v-row dense>
        <Card v-for="card in cards" :key="card.title" v-bind="card" />

        <Implementation :implement="implement" />

        <!-- <CardImage :images="images" /> -->
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
// import CardImage from "./../components/CardImage";
import Card from "./../components/Card";
import Implementation from "./../components/Implementation";

export default {
  name: "Selectionsort",
  components: {
    Card,
    // CardImage,
    Implementation
  },
  data: () => ({
    cards: [
      {
        title: "Selection sort",
        subtitle: "Sortowanie przez wybieranie",
        flex: 12,
        content:
          "Jedna z prostszych metod sortowania o złożoności O(n2). Polega na wyszukaniu elementu mającego się znaleźć na żądanej pozycji i zamianie miejscami z tym, który jest tam obecnie. Operacja jest wykonywana dla wszystkich indeksów sortowanej tablicy."
      },
      {
        title: "Opis",
        subtitle: "",
        flex: 12,
        content: `Algorytm przedstawia się następująco: <br /> <br />
          1. Wyszukaj minimalną wartość z tablicy spośród elementów od i do końca tablicy <br />
          2. Zamień wartość minimalną, z elementem na pozycji i <br /> <br />
          Gdy zamiast wartości minimalnej wybierana będzie maksymalna, wówczas tablica będzie posortowana od największego do najmniejszego elementu. Algorytm jest niestabilny. Przykładowa lista to: [2a,2b,1] → [1,2b,2a] (gdzie 2b=2a)`
      }
    ],
    images: [
      {
        src:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.w3resource.com%2Fw3r_images%2Fselection-short.png&f=1&nofb=1",
        alt: "Obrazek przedstawiający sortowanie przez wybieranie"
      },
      {
        src:
          "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.codenuclear.com%2Fwp-content%2Fuploads%2F2017%2F08%2FSelection_Sort.jpg&f=1&nofb=1",
        alt: "Obrazek przedstawiający sortowanie przez wybieranie"
      },
      {
        src:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhe-s3.s3.amazonaws.com%2Fmedia%2Fuploads%2F2888f5b.png&f=1&nofb=1",
        alt: "Obrazek przedstawiający sortowanie przez wybieranie"
      }
    ],
    implement: [
      {
        lang: "c++",
        code: `#include <iostream>

using namespace std;

const int n = 10;
int t[n] = {4,3,6,8,7,9,0,1,2,5};

void print(int t[], int n)
{
    for(int i=0; i<n; i++) cout << t[i] << " ";
    cout << endl;
}

void selectionSort(int t[], int n)
{

    for (int i=0; i<n; i++)
    {
        int mini = i;
        for (int j=i; j<n; j++) if(t[mini] > t[j]) mini = j;
        swap(t[i], t[mini]);
    }
}

int main()
{
    print(t, n);

    selectionSort(t, n);
    print(t, n);
    return 0;
}`
      },
      {
        lang: "python",
        code: `def selectionSort:
  print('Hello world')`
      }
    ]
  })
};
</script>
