// src/App.js
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import './App.css';
import foods from "./foods.json";

const allFoods = [...foods];

function App() {

  const [data, setData] = useState(allFoods);

  const addFood = (food) => {
    setData(arr => [...arr, food]);
  }

  const onSearch = (e) => {
    let _data = allFoods.filter((elem, i) => {
      return elem.name.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setData(arr => _data);
  }

  const onDelete = (food) => {
    allFoods.forEach((elem, i, arr) => {
      if(elem.name === food){
        arr.splice(i,1);
      }
    })
    setData(arr => [...allFoods]);   
  }

  return (
    <div className="App">

      <AddFoodForm addFood={addFood} />

      <Search onSearch={onSearch} />
      <br></br>
      <br></br>
      {data.map((elem, i) => {
        return (
          <FoodBox key={i} food={elem} onDelete={onDelete} />
        )
      })}
    </div>
  )
}
export default App;
