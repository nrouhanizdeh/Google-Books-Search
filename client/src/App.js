import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Search from "./pages/Search";
import MyBooks from "./pages/MyBooks";
import Nav from "./components/Nav";

function App() {
  const [burgerActive, setBurgerActive] = useState(false);

  function handleBurgerActive() {
    if (burgerActive === true) {
      setBurgerActive(false);
    } else {
      setBurgerActive(true);
    }
  }

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/">
            <Route exact path="/MyBooks">
              <MyBooks />
            </Route>
            <Route exact path="/Search">
              <Search />
            </Route>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
