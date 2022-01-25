import React, { useEffect, useState } from 'react'
import CategoriasList from './CategoriasList';
import CategoriasAdd from './CategoriasAdd';
// import { Button } from 'react-bootstrap';

const CategoriasApp = () => {

    const [categorias, setCategorias] = useState([]);

    const [nombre, setNombre] = useState(['Horror']);

    const imgGif = async() => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(nombre)}&limit=10&api_key=FNMOEHuF0VivGYFEbtfbl8AsJO6Z00Pv`
        const resp = await fetch(url)
        const { data } = await resp.json()

        const imgData = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        })
        return imgData;
    }

    useEffect(() => {
        imgGif().then(imgData => setCategorias(imgData))
        
    }, [nombre]);  

    console.log(setCategorias)

    return (
        <div>
            <h1>Componentes con hooks</h1>
            <ol>
                <CategoriasAdd setCategorias={setCategorias}/>
                <CategoriasList categorias={categorias}/>                
            </ol>
        </div>
    );
};

export default CategoriasApp