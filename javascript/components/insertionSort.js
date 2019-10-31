export function insertionSort(tab) {
  let tablica = [...tab]; // Kopia tablicy
  let n = tablica.length;

  for (let i = 1; i < n; i++) {
    let klucz = tablica[i];
    let j = i - 1;

    while (j >= 0 && tablica[j] > klucz) {
      tablica[j + 1] = tablica[j];
      j--;
    }
    j++;
    tablica[j] = klucz;
  }

  return tablica;
}

export default function insertionSortValue(tab) {
  const value = insertionSort(tab);
  return `----- INSERTION SORT ----- ( Sortowanie przez wstawianie )
Posortowana tablica: [${value}]`;
}
