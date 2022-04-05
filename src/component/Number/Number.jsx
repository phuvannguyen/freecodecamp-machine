import React, {useContext} from 'react'
import { numberContext } from '../../App'

function Number() {
    const numbers = [{number:0, id: "zero"},{number:1, id: "one"},{number:2, id: "two"},{number:3, id: "three"},{number:4, id: "four"}, 
    {number:5, id: "five"}, {number:6, id: "six"}, {number:7, id: "seven"}, {number:8, id: "eight"},{number:9, id: "nine"}];

    let state = useContext(numberContext);

    const handleOnClick = (e) => {        
        const number = e.target.value;
        const connectNumber = state[0];
        if (state[0] == 0) {
            state[1](number);

        } else {
            state[1](state[0] + number);

        }     
        


    }

    
  return (
      <div>
          {numbers.map((number) => <button id={number.id} onClick={handleOnClick} value={number.number}>{number.number}</button>)}
      </div>
  )
      
    
}

export default Number