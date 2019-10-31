import React from "react";
import Item from "../components/Item";

const linksYoutube = [
  {
    title: "15 Sorting Algorithms in 6 Minutes",
    href: "https://www.youtube.com/watch?v=kPRA0W1kECg",
    content: `Visualization and "audibilization" of 15 Sorting Algorithms in 6 Minutes.
Sorts random shuffles of integers, with both speed and the number of items adapted to each algorithm's complexity.`,
  },
  {
    title: "Visualization and Comparison of Sorting Algorithms",
    href: "https://www.youtube.com/watch?v=ZZuD6iUe3Pc",
    content: `Visualization and comparison of 9 different sorting algorithms:
selection sort,
shell sort,
insertion sort,
merge sort,
quick sort,
heap sort,
bubble sort,
comb sort,
cocktail sort.`,
  },
  {
    title: "16 Sorts - Color Circle",
    href: "https://www.youtube.com/watch?v=y9Ecb43qw98&t=226s",
    content: `Circle Sorting Visualizer/Audiolizer.`,
  },
];

const linksWebsite = [
  {
    title: "Algorytmy Sortowania",
    href: "http://www.algorytm.org/algorytmy-sortowania/",
    content:
      "Algorytmy sortowania, zarówno te proste jak i bardziej zaawansowane i wydajne, scalanie ciągów, ...",
  },
  {
    title: "Khan Academy - Algorytmy",
    href: "https://pl.khanacademy.org/computing/computer-science/algorithms",
    content:
      "Wspólnie z profesorami z Dartmouth College Tomem Cormenem i Devinem Balkcom przygotowaliśmy wstępny kurs algorytmów, obejmujący między innymi przeszukiwanie, sortowanie, rekurencję i teorię grafów. Skorzystaj z artykułów, wizualizacji, quizów i problemów do rozwiązania aby nauczyć się podstaw algorytmów.",
  },
  {
    title: "Sorting Algorithms",
    href: "https://www.geeksforgeeks.org/sorting-algorithms/",
    content:
      "A Sorting Algorithm is used to rearrange a given array or list elements according to a comparison operator on the elements. The comparison operator is used to decide the new order of element in the respective data structure.",
  },
];

class HomeView extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="card col-12 mt-5">
          <div className="card-body">
            <h5 className="card-title">Filmy</h5>
            {/* <h6 className="card-subtitle mb-2 text-muted">Youtube</h6> */}
            <div className="list-group">
              {linksYoutube.map(el => (
                <Item
                  title={el.title}
                  content={el.content}
                  href={el.href}
                  key={el.href}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="card col-12 mt-5">
          <div className="card-body">
            <h5 className="card-title">Strony internetowe</h5>
            <div className="list-group">
              {linksWebsite.map(el => (
                <Item
                  title={el.title}
                  content={el.content}
                  href={el.href}
                  key={el.href}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default HomeView;
