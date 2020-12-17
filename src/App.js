import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import "./index.css";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer />
    </>
  );
}

export default App;
