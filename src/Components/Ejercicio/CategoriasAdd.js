import React, { useEffect, useRef, useState } from 'react';

const CategoriasAdd = ({setCategorias}) => {

    const searchref = useRef();

    const [search, setSearch] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        setCategorias(categorias =>[search, ...categorias])
        setSearch('')
    };

    const handleInputChange = (e) => {
        setSearch(e.target.value)
    };

    useEffect(() => {
        searchref.current.focus()
    }, []);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    ref={searchref}
                    name="search" 
                    placeholder="categorias" 
                    value={search} 
                    onClick={handleInputChange}/>
            </form>
        </div>
    )
};

export default CategoriasAdd;
