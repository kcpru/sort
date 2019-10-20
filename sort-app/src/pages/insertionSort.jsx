import React from "react";

export default function InsertionSortView() {
  return <div>Insertion Sort</div>;
}

// export default function insertionSort(tab) {
//     let tablica = [...tab] // Kopia tablicy
//     let n = tablica.length,
//         porownania = 0

//     for (let i = 1; i < n; i++) {
//         let klucz = tablica[i]
//         let j = i - 1

//         while (j >= 0 && tablica[j] > klucz) {
//             porownania++

//             tablica[j + 1] = tablica[j]
//             j--
//         }
//         j++
//         tablica[j] = klucz
//     }

//     return `----- INSERTION SORT ----- ( Sortowanie przez wstawianie )
// Porównania: ${porownania++},
// Posortowana tablica: [${tablica}]`
// }
