import React, {useState} from "react";
import './styles/App.css';
import MedcItem from "./components/MedcItem";

function App() {
    const [medc, setMedc] = useState([
        {title: 'ot ponosa', body:'tabletki ogon'},
        {title: 'ot ponosa 2', body:'tabletki ogon'},
        {title: 'ot ponosa 3', body:'tabletki ogon'},
        {title: 'ot ponosa 4', body:'tabletki ogon'}
    ])
  
  
  return (
    <div className="App">
        {medc.map(med =>
            <MedcItem medc={med}/>
        )}
    </div>
  );
}

export default App;
