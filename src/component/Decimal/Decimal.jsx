import React, {useContext} from 'react'
import { numberContext } from '../../App'

function Decimal() {
  const state = useContext(numberContext);

  const handleDecimal = (e) => {
    const decimal = e.target.value;
    //check the finally of state is "+ , -, *, /"
    const lengthState = state[0].length;
    const finalState = state[0][lengthState - 1];

    const calculation = ["+", "-", "*", "/"];
    //Divide sting array to number array
    const operations = {"+": true, "-": true, "*": true, "/": true};
    const decimalOperation = {".": true}    
    const newArray = [];
    let newNumber= "";
    for (let number of state[0]) {      
      if (operations[number]) {
        newArray.push(newNumber)
        newNumber = "";
        continue;       

      }  else newNumber += number;    
      

    };
    newArray.push(newNumber);

    for (let decimal of newArray[newArray.length - 1]) {
      if (decimalOperation[decimal]) {
        return;
      }
    }  
    

    
    //Check to user stop press decimal many times
    if (finalState === ".") {
      return;
    }    

    //Check to no connect decimal with calculations
    for (let cal of calculation) {      
      if (finalState === cal) {
        return;
      }
    };

    state[1](state[0] + decimal); 

    
  }
  
  return (
    <button id="decimal" value="." onClick={handleDecimal}>.</button>
  )
}

export default Decimal