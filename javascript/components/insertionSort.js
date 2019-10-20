export default function insertionSort(tab) {
    let tablica = [...tab] // Kopia tablicy
    let n = tablica.length,
        porownania = 0

    for (let i = 1; i < n; i++) {
        let klucz = tablica[i]
        let j = i - 1

        while (j >= 0 && tablica[j] > klucz) {
            porownania++

            tablica[j + 1] = tablica[j]
            j--
        }
        j++
        tablica[j] = klucz
    }

    return `----- INSERTION SORT ----- ( Sortowanie przez wstawianie )
Porównania: ${porownania++},
Posortowana tablica: [${tablica}]`
}

/*
----- WIKIPEDIA ------

Sortowanie przez wstawianie (ang. Insert Sort, Insertion Sort) – jeden z najprostszych algorytmów sortowania, którego zasada działania odzwierciedla sposób w jaki ludzie ustawiają karty – kolejne elementy wejściowe są ustawiane na odpowiednie miejsca docelowe[1]. Jest efektywny dla niewielkiej liczby elementów, jego złożoność wynosi O(n2)[1]. Pomimo tego, że jest znacznie mniej wydajny od algorytmów takich jak quicksort czy heapsort, posiada pewne zalety:

1. liczba wykonanych porównań jest zależna od liczby inwersji w permutacji, dlatego algorytm jest wydajny dla danych wstępnie posortowanych[2],
2. jest wydajny dla zbiorów o niewielkiej liczebności[1],
3. jest stabilny[1].
*/
