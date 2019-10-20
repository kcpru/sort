import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import github from "react-syntax-highlighter/dist/cjs/styles/hljs/github";

const javascriptCode = `export default function bubbleSort(tab) {
  let tablica = [...tab], // Kopia tablicy
    n = tablica.length,
    iloscZamian = 0,
    przejsciaPetli = 0

  while (n > 1) {
    for (let i = 0; i < n - 1; i++) {
      if (tablica[i] > tablica[i + 1]) {
        [tablica[i], tablica[i + 1]] = [tablica[i + 1], tablica[i]] // Zamiana miejscami
      }
    }
    n--
  }
  return tablica
}`;

export default function BubbleSortView() {
  return (
    <>
      <div className="row">
        <div className="card col m-3">
          <div className="card-body">
            <h5 className="card-title">Bubble Sort</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Sortowanie bąbelkowe
            </h6>
            <p className="card-text">
              Prosta metoda sortowania o złożoności czasowej i pamięciowej
              Polega na porównywaniu dwóch kolejnych elementów i zamianie ich
              kolejności, jeżeli zaburza ona porządek, w jakim się sortuje
              tablicę. Sortowanie kończy się, gdy podczas kolejnego przejścia
              nie dokonano żadnej zmiany.
            </p>
            <p className="card-text">
              <small className="text-muted">Źródło: Wikipedia</small>
            </p>
          </div>
        </div>

        <div className="card col m-3">
          <div className="card-body">
            <h5 className="card-title">Dowód matematyczny</h5>
            <p className="card-text">
              Algorytm opiera się na zasadzie maksimum, tj. każda liczba jest
              mniejsza lub równa od liczby maksymalnej. Porównując kolejno
              liczby można wyznaczyć największą z nich. Następnie ciąg częściowo
              posortowany (mający liczbę maksymalną), można skrócić o tę liczbę
              i ponowić szukanie maksimum, już bez elementów odrzuconych i tak
              długo, aż zostanie nam jeden element. Otrzymane kolejne maksima są
              coraz mniejsze przez co ciąg jest uporządkowany.
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="card col m-3">
          <div className="card-body">
            <h5 className="card-title">Implementacja w JavaScript</h5>
            <h6 className="card-subtitle mb-2 text-muted">JavaScript</h6>
            <p className="card-text">
              <SyntaxHighlighter language="javascript" style={github}>
                {javascriptCode}
              </SyntaxHighlighter>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

// export default function bubbleSort(tab) {
//     let tablica = [...tab], // Kopia tablicy
//         n = tablica.length,
//         iloscZamian = 0,
//         przejsciaPetli = 0

//     while (n > 1) {
//         for (let i = 0; i < n - 1; i++) {
//             if (tablica[i] > tablica[i + 1]) {
//                 [tablica[i], tablica[i + 1]] = [tablica[i + 1], tablica[i]] // Zamiana miejscami

//                 iloscZamian++
//             }
//             przejsciaPetli++
//         }
//         n--

//         przejsciaPetli++
//     }

//     return `----- BUBBLE SORT ----- ( Sortowanie bąbelkowe )
// Ilość zamian: ${iloscZamian},
// Przejścia pętli: ${przejsciaPetli},
// Posortowana tablica: [${tablica}]`
// }
