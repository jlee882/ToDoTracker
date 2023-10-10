import React from 'react'
import "./styles.css"

const InputField = () => {
  return (
    <form className='input'>
      <input type='input' placeholder='Task to Add' className="input_box"/>
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  )
}

export default InputField;