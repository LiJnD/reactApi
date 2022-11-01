import React from 'react';

const Variable = () => {
    const saludo = "Hola mundo"
    const imagen = 'https://picsum.photos/200/300'
    const texto_alt = '¿Esto es una imagen'
    return (
        <di>
            <h1>{saludo}</h1>
            <img src = {imagen} alt = {texto_alt} />
            
        </di>
    )
}

export default Variable