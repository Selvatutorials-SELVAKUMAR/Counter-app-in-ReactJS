import React from 'react'
import './Button.css'
function Button({sign,updateCount}) {
    const clickHandler = sign => {
        updateCount(sign)
    }
    return <button className = {
        sign === "+" ? "plus" : sign === "-" ? "minus" : sign === "Reset" ? "reset" : ""
    } onClick = {() => clickHandler(sign)}>
        {sign}
    </button>
}

export default Button
