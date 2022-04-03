import React from 'react';
import {FilterType, MoneyType} from "./Component_05";

type NewComponentPropsType={
    currentMoney:MoneyType[]
    onClickFilterHandler:(nameButton: FilterType)=>void
}

export const NewComponent = (props:NewComponentPropsType) => {



    return (
        <div>
            <h3>Урок 5</h3>
            <ul>
                {props.currentMoney.map((m, i) => <li key={i}>
                    <span>{m.banknots}</span>
                    <span>{m.value}</span>
                    <span>{m.number}</span>
                </li>)}
            </ul>
            <button onClick={() => props.onClickFilterHandler('All')}>All</button>
            <button onClick={() => props.onClickFilterHandler('RUB')}>RUB</button>
            <button onClick={() => props.onClickFilterHandler('USD')}>USD</button>
        </div>
    );
};