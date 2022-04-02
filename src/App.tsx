import React from 'react';
import './App.css';
import {Header} from "./sait/Header";
import {Body} from "./sait/Body";
import {Footer} from "./sait/Footer";

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
