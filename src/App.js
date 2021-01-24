import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import "./index.css";
import "./cart.css";
import "./advices.css";
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
import { Store } from "./store";
import Portada from "./components/Portada";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Advice from "./components/Advice";

function App() {
  const [data, setData] = useState({
    items: [],
    cantidad: 0,
    precio: 0,
  });
  return (
    <>
      <Store.Provider value={[data, setData]}>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Portada />
              <ItemListContainer />
              <Advice />
              <Footer />
            </Route>
            <Route path="/categorias/:id">
              <ItemListContainer />
            </Route>
            <Route path="/item/:id">
              <ItemDetailContainer />
            </Route>
            <Route path="/carrito">
              <Cart />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
          </Switch>
        </Router>
      </Store.Provider>
    </>
  );
}

export default App;

/* 

*/
