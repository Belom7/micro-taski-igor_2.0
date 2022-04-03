import React, {useState} from 'react';

export const Component04 = () => {

    let[a,setA]=useState(1)
    const onClickHandlerUp = () => {
        setA(++a)
        console.log(a)
    }

    const onClickHandlerReset = () => {
        setA(0)
    }

    return (
        <div>
            <h3>Урок 4</h3>
            <h2>{a}</h2>
            <button onClick={onClickHandlerUp}>Up</button>
            <button onClick={onClickHandlerReset}>Reset</button>
        </div>
    );
};
