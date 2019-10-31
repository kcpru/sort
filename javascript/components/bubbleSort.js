export function bubbleSort(tab) {
  let tablica = [...tab], // Kopia tablicy
    n = tablica.length;

  while (n > 1) {
    for (let i = 0; i < n - 1; i++) {
      if (tablica[i] > tablica[i + 1]) {
        [tablica[i], tablica[i + 1]] = [tablica[i + 1], tablica[i]]; // Zamiana miejscami
      }
    }
    n--;
  }

  return tablica;
}

export default function bubbleSortValue(tab) {
  const value = bubbleSort(tab);
  return `----- BUBBLE SORT ----- ( Sortowanie bąbelkowe )
Posortowana tablica: [${value}]`;
}
