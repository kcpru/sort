import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import github from "react-syntax-highlighter/dist/cjs/styles/hljs/github";

const javascriptCode = `function selectionSort(tab) {
  
}`;

export default function SelectionSortView() {
  return (
    <>
      <div className="row">
        <div className="card col m-3">
          <div className="card-body">
            <h5 className="card-title">Selection Sort</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Sortowanie przez wybieranie
            </h6>
            <p className="card-text">
              jedna z prostszych metod sortowania o złożoności O(n2). Polega na
              wyszukaniu elementu mającego się znaleźć na żądanej pozycji i
              zamianie miejscami z tym, który jest tam obecnie. Operacja jest
              wykonywana dla wszystkich indeksów sortowanej tablicy.
            </p>
            <p className="card-text">
              <small className="text-muted">Źródło: Wikipedia</small>
            </p>
          </div>
        </div>

        <div className="card col m-3">
          <div className="card-body">
            <h5 className="card-title">Opis</h5>
            <p className="card-text">
              Algorytm przedstawia się następująco: <br />
              <br />
              1. Wyszukaj minimalną wartość z tablicy spośród elementów od i do
              końca tablicy <br />
              2. Zamień wartość minimalną, z elementem na pozycji i <br />
              <br />
              Gdy zamiast wartości minimalnej wybierana będzie maksymalna,
              wówczas tablica będzie posortowana od największego do
              najmniejszego elementu. Algorytm jest niestabilny. Przykładowa
              lista to: [2a,2b,1] → [1,2b,2a] (gdzie 2b=2a)
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="card col m-3">
          <div className="card-body">
            <h5 className="card-title">Implementacja w JavaScript</h5>
            <h6 className="card-subtitle mb-2 text-muted">ECMAScript 6</h6>
            <p className="card-text">
              <SyntaxHighlighter language="javascript" style={github}>
                {javascriptCode}
              </SyntaxHighlighter>
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="card col m-3">
          <div className="card-body">
            <h5 className="card-title">Gif'y</h5>
            <p className="card-text">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Selection_sort_animation.gif/240px-Selection_sort_animation.gif"
                alt="Gif obrazujący działanie sortowania bąbelkowego"
              />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
