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
  name: "Quicksort",
  components: {
    Card,
    CardImage,
    Implementation
  },
  data: () => ({
    cards: [
      {
        title: "Quick Sort",
        subtitle: "Sortowanie szybkie",
        flex: 12,
        content:
          "Jeden z popularnych algorytmów sortowania działających na zasadzie „dziel i zwyciężaj”. Sortowanie QuickSort zostało wynalezione w 1962 przez C.A.R. Hoare’a. Algorytm sortowania szybkiego jest wydajny: jego średnia złożoność obliczeniowa jest rzędu O(n log n). Ze względu na szybkość i prostotę implementacji jest powszechnie używany. Jego implementacje znajdują się w bibliotekach standardowych wielu środowisk programowania."
      },
      {
        title: "Opis",
        subtitle: "",
        flex: 12,
        content:
          "Z tablicy wybiera się element rozdzielający, po czym tablica jest dzielona na dwa fragmenty: do początkowego przenoszone są wszystkie elementy nie większe od rozdzielającego, do końcowego wszystkie większe. Potem sortuje się osobno początkową i końcową część tablicy. Rekursja kończy się, gdy kolejny fragment uzyskany z podziału zawiera pojedynczy element, jako że jednoelementowa tablica nie wymaga sortowania. Jeśli przez l oznacza się indeks pierwszego, a przez r – ostatniego elementu sortowanego fragmentu tablicy, zaś przez i – indeks elementu, na którym tablica została podzielona, to procedurę sortowania można (w dużym uproszczeniu) przedstawić następującym pseudokodem"
      }
    ],
    implement: [
      {
        lang: "c++",
        code: `#include <iostream>

using namespace std;

const int n = 10;
int t[n] = {9,0,8,5,6,4,1,2,3,7};

void quicksort(int t[], int od, int dok){
    int pp = od;
    if(od>=dok) return;

    for(int i=od; i<dok; i++){
        if(t[i] < t[od]){
            swap(t[i], t[pp+1]);
            pp++;
        }
    }
    swap(t[od], t[pp]);
    quicksort(t, od, pp);
    quicksort(t, pp+1, dok);
}

void print(int t[], int n){
    for(int i=0; i<n; i++) cout << t[i] << " ";
    cout << endl;
}

int main()
{
    quicksort(t, 0,n);
    print(t, n);
    return 0;
}
`
      },
      {
        lang: "python",
        code: `def sort(array=[12,4,5,6,7,3,1,15]):

less = []
equal = []
greater = []

if len(array) > 1:
    pivot = array[0]

    for x in array:
        if x < pivot:
            less.append(x)

        elif x == pivot:
            equal.append(x)

        elif x > pivot:
            greater.append(x)

    return sort(less) + equal + sort(greater)  
else: 
    return array`
      },
      {
        lang: "javascript",
        code: `let items = [5,3,7,6,2,9];
function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {
    let pivot   = items[Math.floor((right + left) / 2)], 
        i       = left,
        j       = right; 
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); 
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    let index;
    if (items.length > 1) {
        index = partition(items, left, right); 
        if (left < index - 1) { 
            quickSort(items, left, index - 1);
        }
        if (index < right) { 
            quickSort(items, index, right);
        }
    }
    return items;
}

let sortedArray = quickSort(items, 0, items.length - 1);
console.log(sortedArray); // [2,3,5,6,7,9]`
      }
    ],
    images: [
      {
        src:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Sorting_quicksort_anim.gif/240px-Sorting_quicksort_anim.gif",
        alt: "Gif obrazujący działanie sortowania szybkiego"
      }
    ]
  })
};
</script>
