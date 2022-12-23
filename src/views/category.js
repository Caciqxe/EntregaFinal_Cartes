import { useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import '../App.css';

const CategoryView = () => {
    return (    
    <div className="App">
    <ItemListContainer/>
    <header className="App-header">
    </header>
  </div>);
};

export default CategoryView;