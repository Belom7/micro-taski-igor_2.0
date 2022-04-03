import React, {useState} from 'react';
import {NewComponent} from "./NewComponent";

export type FilterType = 'All' | 'RUB' | 'USD'
export type MoneyType = {banknots: string, value: number, number: string}

export const Component05 = () => {

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const [nameButton, setNameButton] = useState<FilterType>('All')


    let currentMoney = money

    nameButton === 'RUB' ? currentMoney = money.filter(f => f.banknots === 'RUBLS') :
        nameButton === 'USD' ? currentMoney = money.filter(f => f.banknots === 'Dollars') :
            currentMoney

    const onClickFilterHandler = (nameButton: FilterType) => {
        setNameButton(nameButton)
    }

    return (
        <div>
            <NewComponent currentMoney={currentMoney} onClickFilterHandler={onClickFilterHandler}/>
        </div>
    );
};
