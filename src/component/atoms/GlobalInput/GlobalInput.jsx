import React from 'react'

function GlobalInput({title,val,...props})
{
    return (
        <div className="form-group my-3">
            <label >{title}</label>
            <input type="email" className="form-control" style={{borderRadius:14}} placeholder={'Masukkan '+title}  {...props}/>
            <p style={{color:"red",fontSize:12}}>{val}</p>
        </div>
    )
}

export default GlobalInput
