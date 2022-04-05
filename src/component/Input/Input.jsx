import React, {useContext} from 'react'
import { numberContext } from '../../App'

function Input() {
  let value = useContext(numberContext);  
  return (
    <div id="display">{value[0]}</div>
  )
}

export default Input