import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import BubbleSortView from "./pages/bubbleSort";
import InsertionSortView from "./pages/insertionSort";
import SelectionSortView from "./pages/selectionSort";
import MergeSortView from "./pages/mergeSort";
import QuickSortView from "./pages/quickSort";
import HomeView from "./pages/home";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <NavLink to="/" className="navbar-brand">
                Algorytmy sortowania
              </NavLink>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <NavLink to="/bubblesort" className="nav-link">
                      Bubble Sort
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/insertionsort" className="nav-link">
                      Insertion Sort
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/selectionsort" className="nav-link">
                      Selection Sort
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/mergesort" className="nav-link">
                      Merge Sort
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/quicksort" className="nav-link">
                      Quick Sort
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
        </div>

        <main className="container">
          <Switch>
            <Route path="/bubblesort">
              <BubbleSortView />
            </Route>
            <Route path="/insertionsort">
              <InsertionSortView />
            </Route>
            <Route path="/selectionsort">
              <SelectionSortView />
            </Route>
            <Route path="/mergesort">
              <MergeSortView />
            </Route>
            <Route path="/quicksort">
              <QuickSortView />
            </Route>
            <Route path="/">
              <HomeView />
            </Route>
          </Switch>
        </main>
      </Router>
    );
  }
}
