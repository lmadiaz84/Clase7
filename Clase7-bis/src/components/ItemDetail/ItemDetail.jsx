import React from "react"
import { useParams } from "react-router"

const ItemDetail = () => {
    
    const {id} = useParams()

    const [pueblo, setPueblo] = React.useState([])

    React.useEffect(() => {
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const data = await fetch(`https://api.pokemontcg.io/v2/cards/${id}`)
        const users = await data.json()
        setPueblo(users.data)
    }



    return (  
        <div>
            <h3>Nombre: {pueblo.name}</h3>
            <p>Subtipo: {pueblo.subtypes}</p>
            <p>Nivel: {pueblo.level}</p>
            <p>HP: {pueblo.hp}</p>
            <p>Tipo: {pueblo.types}</p>
            
        </div>
    )
}
 
export default ItemDetail