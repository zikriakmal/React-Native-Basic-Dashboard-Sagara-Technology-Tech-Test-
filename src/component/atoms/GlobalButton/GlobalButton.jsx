import React from 'react'

function GlobalButton({variant,type,children}) {
    const typeButton = (type !== "outline") ? 'btn-'+variant : "btn-outline-"+variant
    return (
        <button className={'btn '+typeButton+' w-100'}  style={{borderRadius:'14px'}}>
            {children}
        </button>
    )
}

export default GlobalButton;