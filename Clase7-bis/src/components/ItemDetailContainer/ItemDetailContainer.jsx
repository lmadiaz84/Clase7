import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [productos, setProductos] = React.useState([])

    React.useEffect(() => {
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const data = await fetch('https://api.pokemontcg.io/v2/cards')
        const users = await data.json()
        setProductos(users.data)
    }

    return (
        <div>
            <h1>Pokemones</h1>
            <ul>
                {
                    productos.map(item => (
                        <li key={item.id}>
                            <Link to={`/${item.id}`}>
                               Nombre: {item.name} - {item.supertype} 
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default ItemDetailContainer
