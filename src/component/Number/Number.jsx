import React, {useContext} from 'react'
import { numberContext } from '../../App'

function Number({id, value}) {    

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
      
        <button className="button" id={id} onClick={handleOnClick} value={value}>{value}</button>
      
  )
      
    
}

export default Number