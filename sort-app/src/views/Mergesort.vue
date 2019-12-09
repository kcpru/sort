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
        flex: 12,
        content: `W algorytmie sortowania przez scalanie jest wykorzystywana strategia "dziel i zwyciężaj". Jest to bardzo efektywna technika algorytmiczna (wykorzystana jest także w algorytmie sortowania "szybkiego").</br>

Wyobraźmy sobie, że mamy dwa uporządkowane ciągi, a chcemy utworzyć z nich jeden – także uporządkowany. Można oczywiście potraktować je jako jeden ciąg i posortować jedną ze znanych metod, ale nie zostanie wykorzystane uporządkowanie obu ciągów. Warto zastosować następujący sposób:</br>

1. Porównujemy ze sobą pierwsze elementy z każdego z ciągów danych.</br>
2. Mniejszy element wstawiamy do nowego ciągu i usuwamy z ciągu danych.</br>
3. Powtarzamy te czynności, aż oba ciągi danych będą puste.</br></br>
W ten sposób, w nowo utworzonym ciągu wszystkie elementy są uporządkowane, a co najważniejsze operacja ta wymaga wykonania niewielu porównań.
Wiadomo już, jak z dwóch uporządkowanych ciągów otrzymać jeden. Wykorzystując to, można sformułować algorytm sortowania dowolnego ciągu:</br>

1. Podziel ciąg na dwie równe części (jeśli ciąg ma nieparzystą liczbę elementów, jedna z części będzie miała o jeden element więcej).</br>
2. Każdą z części uporządkuj.</br>
3. Połącz dwa uporządkowane ciągi w jeden ciąg uporządkowany.</br></br>
Pozostaje jeszcze rozstrzygnąć, w jaki sposób posortować każdy z dwóch podciągów? W odpowiedzi zawiera się cała siła tego algorytmu: w ten sam sposób! Po prostu wywołujemy rekurencyjnie ten sam algorytm dla każdego z podciągów. Aby takie postępowanie nie przebiegało w nieskończoność należy określić, kiedy zaprzestajemy podziału ciągu. Następuje to, gdy sortowany ciąg ma mniej niż dwa elementy. Ostatecznie algorytm ma następującą postać:
Jeśli ciąg zawiera więcej niż jeden element, to podziel go na dwie równe części (lub prawie równe, jeśli ciąg ma nieparzystą liczbę elementów).
Posortuj pierwszą część stosując ten sam algorytm.
Posortuj drugą część stosując ten sam algorytm.
Połącz dwa uporządkowane ciągi w jeden ciąg uporządkowany.`
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
      },
      {
        lang: "python",
        code: `def merge(arr, l, m, r): 
    n1 = m - l + 1
    n2 = r- m 
  
    # create temp arrays 
    L = [0] * (n1) 
    R = [0] * (n2) 
  
    # Copy data to temp arrays L[] and R[] 
    for i in range(0 , n1): 
        L[i] = arr[l + i] 
  
    for j in range(0 , n2): 
        R[j] = arr[m + 1 + j] 
  
    # Merge the temp arrays back into arr[l..r] 
    i = 0     # Initial index of first subarray 
    j = 0     # Initial index of second subarray 
    k = l     # Initial index of merged subarray 
  
    while i < n1 and j < n2 : 
        if L[i] <= R[j]: 
            arr[k] = L[i] 
            i += 1
        else: 
            arr[k] = R[j] 
            j += 1
        k += 1
  
    # Copy the remaining elements of L[], if there 
    # are any 
    while i < n1: 
        arr[k] = L[i] 
        i += 1
        k += 1
  
    # Copy the remaining elements of R[], if there 
    # are any 
    while j < n2: 
        arr[k] = R[j] 
        j += 1
        k += 1
  
# l is for left index and r is right index of the 
# sub-array of arr to be sorted 
def mergeSort(arr,l,r): 
    if l < r: 
  
        # Same as (l+r)/2, but avoids overflow for 
        # large l and h 
        m = (l+(r-1))/2
  
        # Sort first and second halves 
        mergeSort(arr, l, m) 
        mergeSort(arr, m+1, r) 
        merge(arr, l, m, r) 
  
  
# Driver code to test above 
arr = [12, 11, 13, 5, 6, 7] 
n = len(arr) 
print ("Given array is") 
for i in range(n): 
    print ("%d" %arr[i]), 
  
mergeSort(arr,0,n-1) 
print ("Sorted array is") 
for i in range(n): 
    print ("%d" %arr[i]), 
  `
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
