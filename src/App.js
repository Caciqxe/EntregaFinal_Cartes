import {useState} from "react";
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css';
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <ItemListContainer/>
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
