import React ,{MouseEvent} from 'react';
import {Button} from "./Button";


export const Component03 = () => {
    const mySubscriberMaks = (e:MouseEvent<HTMLButtonElement>) => {console.log(`Hello I'm Maks`)}
    const mySubscriberIvan = () => {console.log(`Hello I'm Ivan`)}
    const onclickHandler = (name:string) => {console.log(`Hello I'm ${name}`)}
    const foo1 = () => {console.log(100200)}
    const foo2 = (value:number) => {console.log(value)}
    const button1Foo = (subscriber:string,age:number,city:string)=> {console.log(subscriber,age,city)}
    const button2Foo = (subscriber:string)=> {console.log(subscriber)}
    const button3Foo = (subscriber:string)=> {console.log(subscriber)}
    const button4Foo = ()=> {console.log(`I'm stupid button`)}


    return (
        <div>
            <h3>Урок 3</h3>
            <button onClick={()=>console.log('Hello!')}>MyYouTubeChanel-1</button>
            <button onClick={mySubscriberMaks}>MyYouTubeChanel-2</button>
            <button onClick={mySubscriberIvan}>MyYouTubeChanel-3</button>
            <button onClick={()=>onclickHandler('Ilya')}>MyYouTubeChanel-4</button>
            <button onClick={foo1}>1</button>
            <button onClick={()=>foo2(100200)}>2</button>
            <Button name={'Кнопка 1'} callBack={()=>button1Foo(`I'm Vasya`,21,'Moscow')}/>
            <Button name={'Кнопка 2'} callBack={()=>button2Foo(`I'm Gera`)}/>
            <Button name={'Кнопка 3'} callBack={()=>button3Foo(`I'm Alina`)}/>
            <Button name={'Кнопка 4'} callBack={button4Foo}/>
        </div>
    );
};
