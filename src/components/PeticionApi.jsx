import React from 'react'

const PeticionApi = () => {
    const [personaje, setPersonaje] = React.useState([])
    

    const cardStyle = {
        boxShadow: "0 7px 10px 0 rgba(3, 5, 0, 0.3)",
        padding: "12px",
        marginBottom: "10px",
        textAlign: "center",
        backgroundColor: '#8c004b',
        borderRadius: '20px' 
      };
      const rootStyle = {
        margin: "0 auto",
        width: "max-content",
        padding: "0 10px",
        color:"black",
        fontFamily:"Verdana"

      }

    const obtenerPersonaje = async () => {
        try {
             fetch('https://finalspaceapi.com/api/v0/character')
            .then ((res) =>  res.json())
            .then ((data) => setPersonaje(data))
        }catch (error) {
            console.log(error)
        }

    }


    return (
        <div>
            <h1>PETICION AL API DE FINAL SPACE</h1>
            <button onClick={obtenerPersonaje}>Traer personaje</button>
            {
                personaje.map((character) => (
                    <div className='root' style={rootStyle}>
                    <div className="card" style={cardStyle} key={character.id}>
                        <div className="card--image">
                            <img src={character.img_url} alt={character.name} />{" "}
                        </div>
                        <div className="card--title">{character.name}</div>
                    </div>
                    </div>
                )
                )
            }
        </div>
    )
}

export default PeticionApi
