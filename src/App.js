import './App.css';
import React, {useState} from 'react';
import Bubbles from "./component/Bubbles/Bubbles"
import Input from "./component/Input/Input"
import Number from "./component/Number/Number"
import Math from "./component/Math/Math"
import Decimal from "./component/Decimal/Decimal"
import Clear from "./component/Clear/Clear"
import Equal from "./component/Equal/Equal"

export const numberContext = React.createContext();

const numbers = [{number:7, id: "seven"}, {number:8, id: "eight"},{number:9, id: "nine"}, 
                    {number:4, id: "four"}, {number:5, id: "five"}, {number:6, id: "six"},
                    {number:1, id: "one"},{number:2, id: "two"},{number:3, id: "three"}, 
                    {number:0, id: "zero"},];

const maths = [{math:"+", id: "add", value:"+"},
                {math:"-", id: "subtract", value:"-"}, 
                {math:"X", id: "multiply", value: "*"}, 
                {math:"/", id: "divide", value: "/"}];


function App() {
  const [number, setNumber] = useState(0);
  return (    
      <numberContext.Provider  value={[number, setNumber]}>
        <div className="App">
          <Bubbles />
          <div className="container">
            <Input />
            <Clear />
            {maths.map((math) => <Math id={math.id} value={math.value} name={math.math}/>)}
            {numbers.map((number) => <Number id={number.id} value={number.number} />)}                   
            
            <Decimal />
            <Equal />
            
          </div>
                  
        </div>
      </numberContext.Provider>
      
    
  );
}

export default App;
