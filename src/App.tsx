import React from 'react';
import './App.css';
import {Header} from "./01_props/Header";
import {Body} from "./01_props/Body";
import {Footer} from "./01_props/Footer";
import {NewComponent} from "./02_map/NewComponent";
import {Buttons} from "./03_button/Buttons";

export type StudentsType = {
    id:number
    name:string
    age:number
}

function App() {

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
        <div className="App">
            <Header title={'NEW HEADER'}/>
            <Body title={'NEW BODY'}/>
            <Footer title={'NEW FOOTER'}/>
            <NewComponent arr={Students}/>
            <Buttons/>
        </div>
    );
}

export default App;
