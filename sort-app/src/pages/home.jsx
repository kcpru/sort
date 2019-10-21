import React from "react";

const links = [
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

export default class HomeView extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="card col m-3">
          <div className="card-body">
            <h5 className="card-title">Wizualizacja</h5>
            <h6 className="card-subtitle mb-2 text-muted">Youtube</h6>
            {/* <p className="card-text"> */}
            <div class="list-group">
              {links.map(el => (
                <a
                  href={el.href}
                  class="list-group-item list-group-item-action"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">{el.title}</h5>
                    <small>Youtube</small>
                  </div>
                  <p class="mb-1">{el.content}</p>
                  <small>{el.href}</small>
                </a>
              ))}
            </div>
            {/* </p> */}
          </div>
        </div>
      </div>
    );
  }
}
