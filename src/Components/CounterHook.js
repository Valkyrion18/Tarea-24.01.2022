import { useState } from 'react'

const useCounter = (value = 10) => {

    const [counter, setCounter] = useState(value);

    const handleSubstract = () => {
        setCounter(counter - 1)
    }

    const handleReset = () => {
        setCounter(value)
    }

    const handleAdd = () => {
        setCounter(counter + 1)
    }

    return {
        counter,
        handleAdd,
        handleSubstract,
        handleReset
    }

}

export default useCounter;