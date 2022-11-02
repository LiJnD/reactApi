import React from 'react'
import './Peticion2.css'
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
            <h1 className='textoPrincipal'>FINAL SPACE</h1>
            <button className='button' onClick={obtenerPersonaje}>TRAER PERSONAJES</button>
            {
                personaje.map((character) => (
                    <div className='body'>
                        <div className='colum'>
                            <div className='rootStyle'>
                                <div className='cardStyle' key={character.id}>
                                    <div className="card--image">
                                        <img src={character.img_url} alt={character.name} />{" "}
                                    </div>
                                    <div className='card--title'>{character.id}-{character.name}</div>
                                    <div className='card--title'>{character.species}</div>
                                    <div className='card--title'>{character.gender}</div>
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
