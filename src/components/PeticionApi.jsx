import React from 'react'
import "./Peticion2.css"
const PeticionApi = () => {
    const [personaje, setPersonaje] = React.useState([])

    const obtenerPersonaje = async () => {
        try {
            fetch('https://finalspaceapi.com/api/v0/character')
                .then((res) => res.json())
                .then((data) => setPersonaje(data))
        } catch (error) {
            console.log(error)
        }

    }


    return (
        <div>
            <h1>PETICION AL API DE FINAL SPACE</h1>
            <button className='button' onClick={obtenerPersonaje}>Traer personaje</button>
            {
                personaje.map((character) => (
                    <div className='body'>
                        <div className='colum'>
                            <div className='rootStyle'>
                                <div className="cardStyle" key={character.id}>
                                    <div className="card--image">
                                        <img src={character.img_url} alt={character.name} key={character.id} />{" "}
                                    </div>
                                    <div className="card--title">{character.name}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                )
            }
        </div >
    )
}

export default PeticionApi
