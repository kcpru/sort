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
  name: "Insertionsort",
  components: {
    Card,
    CardImage,
    Implementation
  },
  data: () => ({
    cards: [
      {
        title: "Insertion Sort",
        subtitle: "Sortowanie przez wstawianie",
        flex: 12,
        content: `Jeden z najprostszych algorytmów sortowania, którego zasada działania odzwierciedla sposób w jaki ludzie ustawiają karty – kolejne elementy wejściowe są ustawiane na odpowiednie miejsca docelowe. Jest efektywny dla niewielkiej liczby elementów, jego złożoność wynosi O(n<sup>2</sup>). Pomimo tego, że jest znacznie mniej wydajny od algorytmów takich jak quicksort czy heapsort, posiada pewne zalety:</br>

1. liczba wykonanych porównań jest zależna od liczby inwersji w permutacji, dlatego algorytm jest wydajny dla danych wstępnie posortowanych, </br>
2. jest wydajny dla zbiorów o niewielkiej liczebności,</br>
3. jest stabilny.</br></br>
Istnieje modyfikacja algorytmu, pozwalająca zmniejszyć liczbę porównań. Zamiast za każdym razem iterować po już posortowanym fragmencie (etap wstawiania elementu), można posłużyć się wyszukiwaniem binarnym. Pozwala to zmniejszyć liczbę porównań do O(n log<sub>n</sub>), nie zmienia się jednak złożoność algorytmu, ponieważ liczba przesunięć elementów to nadal O(n<sup>2</sup>).`
      },
      {
        title: "Schemat działania algorytmu",
        subtitle: "",
        flex: 12,
        content: `1. Utwórz zbiór elementów posortowanych i przenieś do niego dowolny element ze zbioru nieposortowanego.</br>
2. Weź dowolny element ze zbioru nieposortowanego.</br>
3. Wyciągnięty element porównuj z kolejnymi elementami zbioru posortowanego, póki nie napotkasz elementu równego lub elementu większego (jeśli chcemy otrzymać ciąg niemalejący) lub nie znajdziemy się na początku/końcu zbioru uporządkowanego.</br>
4. Wyciągnięty element wstaw w miejsce, gdzie skończyłeś porównywać.</br>
5. Jeśli zbiór elementów nieuporządkowanych jest niepusty, wróć do punktu 2.`
      }
    ],
    implement: [
      {
        lang: "c++",
        code: `#include <iostream>

using namespace std;

const int n = 10;
int t[n] = {2,8,3,9,4,0,5,6,1,7};

void print(int t[], int n)
{
    for(int i=0; i<n; i++)cout<<t[i] << " ";
    cout<<endl;
}

void insertionSort(int t[],int n)
{
    int k, key, ptr;
    for (k = 1; k < n; k++)
    {
        key = t[k];
        ptr = k - 1;
        while (ptr >= 0 && t[ptr] > key)
        {
            t[ptr + 1] = t[ptr];
            ptr = ptr - 1;
        }
        t[ptr + 1] = key;
    }
}

int main()
{
    print(t, n);

    insertionSort(t,n);
    print(t, n);

    return 0;
}
`
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
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Insertion_sort_animation.gif/240px-Insertion_sort_animation.gif",
        alt: "Gif obrazujący działanie sortowania przez wstawianie"
      },
      {
        src:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Insertion-sort-example-300px.gif/220px-Insertion-sort-example-300px.gif",
        alt: "Gif obrazujący działanie sortowania przez wstawianie"
      }
    ]
  })
};
</script>
