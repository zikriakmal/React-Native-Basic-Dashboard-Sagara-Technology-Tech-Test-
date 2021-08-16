import React from 'react'

function GlobalInput({title,val,...props})
{
    return (
        <div className="form-group my-2">
            <label >{title}</label>
            <input type="email" className="form-control mt-2" placeholder={'Masukkan '+title} style={{borderRadius:'8px'}}  {...props}/>
            <p style={{color:"red",fontSize:12}}>{val}</p>
        </div>
    )
}

const selfStyle= {
    input:{
        outline:'none'
    }
}

export default GlobalInput
