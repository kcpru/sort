export default function bubbleSort(tab) {
    let tablica = [...tab] // kopia tablicy
    let n = tablica.length,
        iloscZamian = 0,
        przejsciaPetli = 0

    while (n > 1) {
        for (let i = 0; i < n - 1; i++) {
            if (tablica[i] > tablica[i + 1]) {
                [tablica[i], tablica[i + 1]] = [tablica[i + 1], tablica[i]]
                iloscZamian++
            }
            przejsciaPetli++
        }
        n--
    }
    return `----- BUBBLE SORT -----
Ilość zamian: ${iloscZamian},
Przejścia pętli: ${przejsciaPetli},
Posortowana tablica: [${tablica}]`
}
