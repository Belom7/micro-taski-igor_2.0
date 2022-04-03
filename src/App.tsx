import React from 'react';
import './App.css';

import {Component01} from "./01_props/Component_01";
import {Component02} from "./02_map/Component_02";
import {Component03} from "./03_button/Component_03";
import {Component04} from "./04_useState/Component_04";
import {Component05} from "./05_filter/Component_05";

export type StudentsType = {
    id:number
    name:string
    age:number
}

function App() {



    return (
        <div className="App">
            <Component01/>
            <Component02/>
            <Component03/>
            <Component04/>
            <Component05/>
        </div>
    );
}

export default App;
