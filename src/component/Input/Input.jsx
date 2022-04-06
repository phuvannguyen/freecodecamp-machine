import React, {useContext} from 'react'
import "./Input.css"
import { numberContext } from '../../App'

function Input() {
  let value = useContext(numberContext);  
  return (
    <input type="text"  value={value[0]} id="display" />
  )
}

export default Input