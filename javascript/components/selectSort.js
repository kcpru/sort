export default function selectSort(tab) {
    let tablica = [...tab] // Kopia tablicy
    let n = tablica.length,
        iloscZamian = 0,
        przejsciaPetli = 0

    for (let i = 0; i < n - 1; i++) {
        let min = 0

        for (let j = i+1; j < n; j++) {
            if (tablica[j] < tablica[min]) {
                min = j
                console.log(tablica[min])
            }
            przejsciaPetli++
        }
        if (min != i) {
            console.log(`swap: ${tablica[i]} ${tablica[min]}`)
            ;[tablica[i], tablica[min]] = [tablica[min], tablica[i]]
            console.log(tablica)
        }
        iloscZamian++
        przejsciaPetli++
    }

    return `----- SELECT SORT ----- ( Sortowanie przez wstawianie )
Ilość zamian: ${iloscZamian},
Przejścia pętli: ${przejsciaPetli},
Posortowana tablica: [${tablica}]`
}

/*
----- WIKIPEDIA ------

Sortowanie przez wybieranie - jedna z prostszych metod sortowania o złożoności O(n2). Polega na wyszukaniu elementu mającego się znaleźć na żądanej pozycji i zamianie miejscami z tym, który jest tam obecnie. Operacja jest wykonywana dla wszystkich indeksów sortowanej tablicy.

Algorytm przedstawia się następująco:

wyszukaj minimalną wartość z tablicy spośród elementów od i do końca tablicy
zamień wartość minimalną, z elementem na pozycji i
Gdy zamiast wartości minimalnej wybierana będzie maksymalna, wówczas tablica będzie posortowana od największego do najmniejszego elementu.
*/
