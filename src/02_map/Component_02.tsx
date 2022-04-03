import React from 'react';
import {StudentsType} from "../App";
import {NewComponent} from "./NewComponent";

export const Component02 = () => {

    const Students:StudentsType[] = [
        {id:1, name:'Maks', age:30},
        {id:2, name:'Yulia', age:26},
        {id:3, name:'Ivan', age:25},
        {id:4, name:'Alex', age:46},
        {id:5, name:'Andry', age:38},
        {id:6, name:'Egor', age:25},
        {id:7, name:'Daniil', age:21},
    ]

    return (
        <div>
            <h3>Урок 2</h3>
            <NewComponent arr={Students}/>
        </div>
    );
};
