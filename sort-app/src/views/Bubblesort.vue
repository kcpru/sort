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
  name: "Bubblesort",
  components: {
    Card,
    // CardImage,
    Implementation
  },
  data: () => ({
    cards: [
      {
        title: "Bubble sort",
        subtitle: "Sortowanie bąbelkowe",
        flex: 12,
        content: `Prosta metoda sortowania o złożoności czasowej i pamięciowej
              Polega na porównywaniu dwóch kolejnych elementów i zamianie ich
              kolejności, jeżeli zaburza ona porządek, w jakim się sortuje
              tablicę. Sortowanie kończy się, gdy podczas kolejnego przejścia
              nie dokonano żadnej zmiany.`
      },
      {
        title: "Dowód matematyczny",
        subtitle: "",
        flex: 12,
        content: `Algorytm opiera się na zasadzie maksimum, tj. każda liczba jest
              mniejsza lub równa od liczby maksymalnej. Porównując kolejno
              liczby można wyznaczyć największą z nich. Następnie ciąg częściowo
              posortowany (mający liczbę maksymalną), można skrócić o tę liczbę
              i ponowić szukanie maksimum, już bez elementów odrzuconych i tak
              długo, aż zostanie nam jeden element. Otrzymane kolejne maksima są
              coraz mniejsze przez co ciąg jest uporządkowany.`
      }
    ],
    images: [
      {
        src: "https://media.giphy.com/media/fdFQlt5A45jyw/giphy.gif",
        alt: "Gif obrazujący działanie sortowania bąbelkowego"
      },
      {
        src:
          "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fhowtodoinjava.com%2Fwp-content%2Fuploads%2F2015%2F10%2Fbubble-sort-algorithm.png&f=1&nofb=1",
        alt: "Obrazek przedstawiający działanie sortowania bąbelkowego"
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

void bubbleSort(int t[], int n)
{
    for (int i=0; i<n; i++)
        for(int j=i; j<n; j++) if(t[j] < t[i]) swap(t[i], t[j]);
}

int main()
{
    bubbleSort(t, n);
    print(t, n);
    return 0;
}`
      },
      {
        lang: "python",
        code: `def bubbleSort(arr):
    n = len(arr)
 
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1] :
                arr[j], arr[j+1] = arr[j+1], arr[j]
 
arr = [64, 34, 25, 12, 22, 11, 90]
 
bubbleSort(arr)
 
print ("Sorted array is:")
for i in range(len(arr)):
    print ("%d" %arr[i]), `
      },
      {
        lang: "javascript",
        code: `function swap(arr, first_Index, second_Index){
    var temp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = temp;
}

function bubble_Sort(arr){

    var len = arr.length,
        i, j, stop;

    for (i=0; i < len; i++){
        for (j=0, stop=len-i; j < stop; j++){
            if (arr[j] > arr[j+1]){
                swap(arr, j, j+1);
            }
        }
    }

    return arr;
}`
      }
    ]
  })
};
</script>
