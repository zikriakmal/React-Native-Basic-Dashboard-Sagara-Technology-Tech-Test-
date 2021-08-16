import React from 'react'

function RadioButtonComponent({label,id,...props}) {
    return (
        <div className="form-check mx-2">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id={id} {...props} />
          <label className="form-check-label" htmlFor={id}>
            {label} 
          </label>
        </div>
    )
}

export default RadioButtonComponent
