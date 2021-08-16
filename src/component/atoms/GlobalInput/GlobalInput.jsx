import React from 'react'

function GlobalInput({title,...props})
{
    return (
        <div className="form-group my-3">
            <label >{title}</label>
            <input type="email" className="form-control" style={{borderRadius:14}} placeholder={'Masukkan '+title}  {...props}/>
        </div>
    )
}

export default GlobalInput
