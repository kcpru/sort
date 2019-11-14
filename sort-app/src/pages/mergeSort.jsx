import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import github from "react-syntax-highlighter/dist/cjs/styles/hljs/github";

const javascriptCode = `function selectionSort(tab) {
  
}`;

export default function MergeSortView() {
  return (
    <>
      <div className="row">
        <div className="card col m-3">
          <div className="card-body">
            <h5 className="card-title">Merge Sort</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Sortowanie przez scalanie
            </h6>
            <p className="card-text">
              Wyróżnić można trzy podstawowe kroki[1]: Podziel zestaw danych na
              dwie równe części[4]. Zastosuj sortowanie przez scalanie dla
              każdej z nich oddzielnie, chyba że pozostał już tylko jeden
              element. Połącz posortowane podciągi w jeden ciąg posortowany. W
              pseudokodzie algorytm można zapisać następująco[1]:
            </p>
            <p className="card-text">
              <small className="text-muted">Źródło: Wikipedia</small>
            </p>
          </div>
        </div>

        <div className="card col m-3">
          <div className="card-body">
            <h5 className="card-title">Opis</h5>
            <p className="card-text"></p>
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
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Merge_sort_animation2.gif/240px-Merge_sort_animation2.gif"
                alt="Gif obrazujący działanie sortowania scalanie"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif"
                alt="Gif obrazujący działanie sortowania scalanie"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/60/Mergesort_algorithm_diagram.png"
                alt="Zdjęcie obrazujące działanie sortowania przez scalanie"
              />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
