import React from 'react';
import { Button } from 'react-bootstrap';
import useCounter from './CounterHook';

const Counter = () => {

    const { counter, handleAdd, handleSubstract, handleReset } = useCounter(2)

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <Button variant="warning" onClick={handleAdd}>Sumar</Button>
            <Button variant="danger" onClick={handleSubstract}>Restar</Button>
            <Button variant="primary" onClick={handleReset}>Reset</Button>
        </div>
    )
}

export default Counter;