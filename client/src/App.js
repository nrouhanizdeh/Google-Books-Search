import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import MyBooks from "./pages/MyBooks";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
