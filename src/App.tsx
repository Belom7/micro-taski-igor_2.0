import React from 'react';
import './App.css';

import {Component01} from "./01_props/Component_01";
import {Component02} from "./02_map/Component_02";
import {Component03} from "./03_button/Component_03";
import {Component04} from "./04_useState/Component_04";
import {Component05} from "./05_filter/Component_05";
import {Component06} from "./06_input/Component_06";
import {Component07} from "./07_associative_array/Component07";

export type StudentsType = {
    id:number
    name:string
    age:number
}

function App() {
    return (
        <div className="App">
            <Component01/>
            <hr/>
            <Component02/>
            <hr/>
            <Component03/>
            <hr/>
            <Component04/>
            <hr/>
            <Component05/>
            <hr/>
            <Component06/>
            <hr/>
            <Component07/>
        </div>
    );
}

export default App;
