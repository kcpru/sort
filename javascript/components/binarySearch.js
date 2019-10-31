let value = 0;

export function binarySearch(tab, min, max, czego) {
  if (min > max) {
    value = -1;
    return -1;
  }

  const srodek = Math.round((min + max) / 2);

  if (tab[srodek] === czego) {
    value = srodek;
    return srodek;
  }

  if (tab[srodek] < czego) binarySearch(tab, srodek + 1, max, czego);
  else binarySearch(tab, min, srodek - 1, czego);
}

export default function binarySearchValue(tab, min, max, czego) {
  binarySearch(tab, min, max, czego);
  if (value === -1) {
    console.log(
      `----- BINARY SEARCH ----- ( Wyszukiwanie binarne )
Tablica: [${tab}]
Szukany element: ${czego}
Indeks: ${value}, znaleziony: ${tab[value]}`
    );
  } else
    console.log(
      `%c----- BINARY SEARCH ----- ( Wyszukiwanie binarne )
Tablica: [${tab}]
Szukany element: ${czego}
Indeks: ${value}, znaleziony: ${tab[value]}`,
      "color: #4a6"
    );
}
