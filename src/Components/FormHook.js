import { useEffect, useState } from 'react'

const FormHook = () => {

    const [data, setData] = useState({
        nombre: '',
        correo: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleInputChange = ({ target }) => {
        setData({
            ...data,
            [target.name]: target.value
        })
    }

    useEffect(() => {
        console.log('El componente se montó');
        return () => {
            console.log('El componente se desmontó');
        };
    }, [data]);

    return {
        data,
        handleSubmit,
        handleInputChange,
        useEffect
    }
}

export default FormHook;