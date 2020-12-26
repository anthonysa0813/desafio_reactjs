import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import "./index.css";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetail from "./components/ItemDetail";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { queryByPlaceholderText } from "@testing-library/react";

function App() {
  return (
    <>
      <Navbar />
      <ItemDetailContainer />
      {/* <ItemListContainer /> */}
    </>
  );
}

export default App;

/* 

*/
