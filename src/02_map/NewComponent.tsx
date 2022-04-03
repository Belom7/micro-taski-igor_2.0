import React from "react";
import {StudentsType} from "../App";

type NewComponentPropsType = {
    arr: StudentsType[]
}

export const NewComponent = (props: NewComponentPropsType) => {

    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'},
    ]

    return (
        <div>
            <ul>
                {props.arr.map(m => <li key={m.id}>Имя: {m.name} Возраст: {m.age}</li>)}
            </ul>
            <table>
                {topCars.map((m,i)=><tr key={i}>{m.manufacturer}<td>{m.model}</td></tr>)}
            </table>
        </div>

    )
}