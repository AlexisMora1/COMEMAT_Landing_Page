import { useState, useEffect } from "react";

export function Text() {

    const [text, setText] = useState('');
    
    useEffect(() => {
        console.log('componente montado')

    },[text])


    return(
        <div>
            <input type="text" onChange={(e) => setText(e.target.value)}/>
            <h3>{text}</h3>
        </div>
    )
}

// montas
// actualizas
// desmontas