import React, {useContext} from 'react'
import { numberContext } from '../../App'

function Equal() {
  const state = useContext(numberContext);

  const handleMath = (e) => {
    console.log(state[0]); //Expect: "4 -- 2"   
    
    try {
      const result = eval(state[0]);
      state[1](result);
      
    } catch (error) {
      console.log(error)
      
    }
    
  } 
  return (
    <button className="button" id="equals" onClick={handleMath}>=</button>
  )
}

export default Equal