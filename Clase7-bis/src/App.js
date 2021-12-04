import React from "react";
import {
  BrowserRouter as Router,
  Switch,//Routes(v6)
  Route,
  Link
} from "react-router-dom";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="btn-group">
         
        </div>
        <hr />
        <Switch>
          <Route exact path="/:id">
            <ItemDetail/>
          </Route>
          <Route exact path="/">
            <ItemDetailContainer/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
