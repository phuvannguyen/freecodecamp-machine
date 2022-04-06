import React, {useContext} from 'react'
import { numberContext } from '../../App'

function Math({value, id, name}) {
  
  let state = useContext(numberContext);
  const handleMath = (e) => {
    let calculationMath = e.target.value;
    
    //check the finally of state is "+ , -, *, /"
    const lengthState = state[0].length;
    const finalState = state[0][lengthState - 1];
    const secondFinalState =  state[0][lengthState - 2];    

    const calculation = {"+": true, "-": true, "*":true, "/": true};
    const mulDev = {"*": true,  "/": true};
    const subtract = {"-": true, "+": true}
    if (calculation[finalState]) {
      
      if (mulDev[calculationMath]) {        
        return;        
      };
      
      if (subtract[finalState] && finalState === calculationMath) {
        if (calculationMath === "-") {
          calculationMath = "+"
        } else calculationMath ="+";

        const newState = state[0].slice(0, lengthState - 1) + calculationMath;
        state[1](newState);//cap nhat state;
        return;     

      };

      if (calculation[secondFinalState]) {        
        console.log(finalState); 
        const newState = state[0].slice(0, lengthState - 2) + calculationMath;
                       
        state[1](newState);//cap nhat state;
        return;     
             

      };
      
      state[1](state[0] + calculationMath);
       

    } else state[1](state[0] + calculationMath);
    
  }
  
  return (
    <button className="button" id={id} value={value} onClick={handleMath}>{name}</button>
  )
}

export default Math