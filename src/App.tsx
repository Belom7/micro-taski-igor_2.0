import React from 'react';
import './App.css';
import {Header} from "./01_props/Header";
import {Body} from "./01_props/Body";
import {Footer} from "./01_props/Footer";

function App() {
    return (
        <div className="App">
            <Header title={'NEW HEADER'}/>
            <Body title={'NEW BODY'}/>
            <Footer title={'NEW FOOTER'}/>
        </div>
    );
}

export default App;
