import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import "./index.css";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetail from "./components/ItemDetail";
import ItemDetailContainer from "./components/ItemDetailContainer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <ItemListContainer />
          </Route>
          <Route path="/categorias/:id">
            <ItemListContainer />
          </Route>
          <Route path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="/carrito">
            <h1>Carrito..</h1>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

/* 

*/
