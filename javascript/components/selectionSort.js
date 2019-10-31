export function selectionSort(tab) {
  let tablica = [...tab]; // Kopia tablicy
  let n = tablica.length;

  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (tablica[j] < tablica[min]) {
        min = j;
      }
    }
    if (tablica[min] < tablica[i])
      [tablica[i], tablica[min]] = [tablica[min], tablica[i]];
  }

  return tablica;
}

export default function selectionSortValue(tab) {
  const value = selectionSort(tab);
  return `----- SELECTION SORT ----- ( Sortowanie przez wstawianie )
Posortowana tablica: [${value}]`;
}
