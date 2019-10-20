import React from "react";

export default function SelectionSortView() {
  return <div>Selection Sort</div>;
}

// export default function selectionSort(tab) {
//     let tablica = [...tab] // Kopia tablicy
//     let n = tablica.length,
//         porownania = 0

//     for (let i = 0; i < n - 1; i++) {
//         let min = i
//         for (let j = i + 1; j < n; j++) {
//             porownania++
//             if (tablica[j] < tablica[min]) {
//                 min = j
//             }
//         }
//         porownania++
//         if (tablica[min] < tablica[i])
//             [tablica[i], tablica[min]] = [tablica[min], tablica[i]]
//     }

//     return `----- SELECTION SORT ----- ( Sortowanie przez wstawianie )
// Porówniania: ${porownania},
// Posortowana tablica: [${tablica}]`
// }
