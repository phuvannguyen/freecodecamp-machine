import React, {useContext} from 'react'
import { numberContext } from '../../App'

function Clear() {
  let state = useContext(numberContext);
  const handleOnClick = (e) => {
    state[1](0);
  }

  return (
    <button id="clear" onClick={handleOnClick}>AC</button>
  )
}

export default Clear