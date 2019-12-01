<template>
  <v-content>
    <v-container fluid>
      <v-row dense>
        <Card v-for="card in cards" :key="card.title" v-bind="card" />

        <Implementation :implement="implement" />

        <CardImage :images="images" />
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import CardImage from "./../components/CardImage";
import Card from "./../components/Card";
import Implementation from "./../components/Implementation";

export default {
  name: "Mergesort",
  components: {
    Card,
    CardImage,
    Implementation
  },
  data: () => ({
    cards: [
      {
        title: "Merge Sort",
        subtitle: "Sortowanie przez scalanie",
        flex: 12,
        content: `Wyróżnić można trzy podstawowe kroki:<br />
          1. Podziel zestaw danych na dwie równe części.<br />
          2. Zastosuj sortowanie przez scalanie dla każdej z nich oddzielnie, chyba że pozostał już tylko jeden element.<br />
          3. Połącz posortowane podciągi w jeden ciąg posortowany.`
      },
      {
        title: "Opis",
        subtitle: "",
        flex: 6,
        content: ""
      }
    ],
    implement: [
      {
        lang: "c++",
        code: `#include <iostream>

using namespace std;

const int n = 10;
int t[n] = {9,0,8,5,6,4,1,2,3,7};

void print(int t[], int n){
    for(int i=0; i<n; i++) cout << t[i] << " ";
    cout << endl;
}

void mergeSort(int t[], int n){

    if(n<2) return;

    // PODZIA£ TABLICY NA DZIW PO£OWY
    int n1=n/2;// ILOŒÆ ELEMENTÓW W TABLICY t1
    int n2=n-n1;// ILOŒÆ ELEMENTÓW W TABLICY t2

    int *t1 = new int[n1];
    int *t2 = new int[n2];

    int i=0;
    for(int i1=0; i1<n1; i1++, i++) t1[i1]=t[i];
    for(int i2=0; i2<n2; i2++, i++) t2[i2]=t[i];

    // print(t1, n1);
    // print(t2, n2);

    // SORTOWANIE PO£ÓWEK
    mergeSort(t1, n1);
    mergeSort(t2, n2);

    // SCALANIE PO£ÓWEK
    int i1=0; // LICZBA ELEMENTÓW PRZEPISANYCH Z TABLICY t1
    int i2=0; // LICZBA ELEMENTÓW PRZEPISANYCH Z TABLICY t2
    for(int i=0; i<n; i++){
        if(i1==n1){
            t[i]=t2[i2];
            i2++;
            continue;
        }

        if(i2==n2){
            t[i]=t1[i1];
            i1++;
            continue;
        }

        if(t1[i1]<t2[i2]) {
            t[i]=t1[i1];
            i1++;
        } else {
            t[i]=t2[i2];
            i2++;
        }
    }
}

int main()
{
    print(t, n);
    mergeSort(t, n);
    print(t, n);
    return 0;
}`
      }
    ],
    images: [
      {
        src:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Merge_sort_animation2.gif/240px-Merge_sort_animation2.gif",
        alt: "Gif obrazujący działanie sortowania scalanie"
      },
      {
        src:
          "https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif",
        alt: "Gif obrazujący działanie sortowania scalanie"
      },
      {
        src:
          "https://upload.wikimedia.org/wikipedia/commons/6/60/Mergesort_algorithm_diagram.png",
        alt: "Zdjęcie obrazujące działanie sortowania przez scalanie"
      }
    ]
  })
};
</script>
