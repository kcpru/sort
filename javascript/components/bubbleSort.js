export default function bubbleSort(tab) {
    let tablica = [...tab], // Kopia tablicy
        n = tablica.length,
        iloscZamian = 0,
        przejsciaPetli = 0

    while (n > 1) {
        for (let i = 0; i < n - 1; i++) {
            if (tablica[i] > tablica[i + 1]) {
                [tablica[i], tablica[i + 1]] = [tablica[i + 1], tablica[i]] // Zamiana miejscami

                iloscZamian++
            }
            przejsciaPetli++
        }
        n--

        przejsciaPetli++
    }

    return `----- BUBBLE SORT ----- ( Sortowanie bąbelkowe )
Ilość zamian: ${iloscZamian},
Przejścia pętli: ${przejsciaPetli},
Posortowana tablica: [${tablica}]`
}

/*
----- WIKIPEDIA -----

Sortowanie bąbelkowe (ang. bubble sort) – prosta metoda sortowania o złożoności czasowej {\displaystyle O(n^{2})}O(n^{2}) i pamięciowej {\displaystyle O(1)}O(1).

Polega na porównywaniu dwóch kolejnych elementów i zamianie ich kolejności, jeżeli zaburza ona porządek, w jakim się sortuje tablicę. Sortowanie kończy się, gdy podczas kolejnego przejścia nie dokonano żadnej zmiany.
*/
