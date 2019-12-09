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
  name: "Bucketsort",
  components: {
    Card,
    CardImage,
    Implementation
  },
  data: () => ({
    cards: [
      {
        title: "Bucket Sort",
        subtitle: "Sortowanie kubełkowe",
        flex: 12,
        content: `Jeden z algorytmów sortowania, najczęściej stosowany, gdy liczby w zadanym przedziale są rozłożone jednostajnie, ma on wówczas złożoność Θ(n). W przypadku ogólnym pesymistyczna złożoność obliczeniowa tego algorytmu wynosi O(n²).

Pomysł takiego sortowania podali po raz pierwszy w roku 1956 E. J. Issac i R. C. Singleton`
      },
      {
        title: "Sposób działania",
        subtitle: "",
        flex: 12,
        content: `Idea działania algorytmu sortowania kubełkowego:</br>

1. Podziel zadany przedział liczb na k podprzedziałów (kubełków) o równej długości.</br>
2. Przypisz liczby z sortowanej tablicy do odpowiednich kubełków.</br>
3. Sortuj liczby w niepustych kubełkach.</br>
4. Wypisz po kolei zawartość niepustych kubełków.</br></br>
Zazwyczaj przyjmuje się, że sortowane liczby należą do przedziału od 0 do 1 - jeśli tak nie jest, to można podzielić każdą z nich przez największą możliwą (jeśli znany jest przedział) lub wyznaczoną. Należy tu jednak zwrócić uwagę, że wyznaczanie największej możliwej liczby w tablicy n-elementowej ma złożoność obliczeniową O(n).`
      }
    ],
    implement: [
      {
        lang: "c++",
        code: `#include <iostream>

using namespace std;

const int n = 20;
int t[n] = {2, 8, 3, 0, 7, 8, 5, 2, 1, 7, 2, 8, 3, 0, 8, 8, 5, 2, 1, 9};

void print(int t[], int n)
{
    for (int i = 0; i < n; i++)
        cout << t[i] << " ";
    cout << endl;
}

void bucketSort(int t[], int n)
{
    int t2[n] = {0}; // PRZYJMUJEMY ZE ILOSC ELEMENTOW JEST ROWNA NAJWIEKSZEJ LICZBIE W TABLICY

    for (int i = 0; i < n; i++)
        t2[t[i]] += 1;

    int k = 0;
    for (int i = 0; i < n; i++)
        for (int j = 0; j < t2[i]; j++)
            t[k++] = i;
}

int main()
{
    print(t, n);

    bucketSort(t, n);
    print(t, n);

    return 0;
}`
      },
      {
        lang: "python",
        code: `def insertionSort(b): 
    for i in range(1, len(b)): 
        up = b[i] 
        j = i - 1
        while j >=0 and b[j] > up:  
            b[j + 1] = b[j] 
            j -= 1
        b[j + 1] = up      
    return b      
              
def bucketSort(x): 
    arr = [] 
    slot_num = 10 # 10 means 10 slots, each 
                  # slot's size is 0.1 
    for i in range(slot_num): 
        arr.append([]) 
          
    # Put array elements in different buckets  
    for j in x: 
        index_b = int(slot_num * j)  
        arr[index_b].append(j) 
      
    # Sort individual buckets  
    for i in range(slot_num): 
        arr[i] = insertionSort(arr[i]) 
          
    # concatenate the result 
    k = 0
    for i in range(slot_num): 
        for j in range(len(arr[i])): 
            x[k] = arr[i][j] 
            k += 1
    return x 
  
# Driver Code 
x = [0.897, 0.565, 0.656, 
     0.1234, 0.665, 0.3434]  
print("Sorted Array is") 
print(bucketSort(x))`
      }
    ],
    images: []
  })
};
</script>
