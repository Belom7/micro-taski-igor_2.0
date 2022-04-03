import React from 'react';
import {Header} from "./Header";
import {Body} from "./Body";
import {Footer} from "./Footer";

export const Component01 = () => {
    return (
        <div>
            <h3>Урок 1</h3>
            <Header title={'NEW HEADER'}/>
            <Body title={'NEW BODY'}/>
            <Footer title={'NEW FOOTER'}/>
        </div>
    );
};