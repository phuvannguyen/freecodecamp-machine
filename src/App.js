import './App.css';
import React, {useEffect, useState} from 'react';
import Input from "./component/Input/Input"
import Number from "./component/Number/Number"
import Math from "./component/Math/Math"
import Decimal from "./component/Decimal/Decimal"
import Clear from "./component/Clear/Clear"
import Equal from "./component/Equal/Equal"

export const numberContext = React.createContext();


function App() {
  const [number, setNumber] = useState(0);

  



  return (
    
      <numberContext.Provider  value={[number, setNumber]}>
        <div className="App">
          <Input />
          <Number />
          <Math />
          <Decimal />
          <Equal />
          <Clear />
        </div>
      </numberContext.Provider>
      
    
  );
}

export default App;
