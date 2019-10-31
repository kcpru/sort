export default function quickSort(tab) {
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

  return `----- QUICK SORT ----- ( Sortowanie szybkie )
Posortowana tablica: [${tablica}]`;
}
