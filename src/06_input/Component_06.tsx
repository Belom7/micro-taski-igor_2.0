import React, {useState} from 'react';
import {FullInput} from "./FullInput";
import {Input} from "./Input";
import {Button} from "./Button";

export const Component06 = () => {

    const[server1,setServer1] = useState([
        {message: 'message 1'},
        {message: 'message 2'},
        {message: 'message 3'},
        ]
    )
    const addMessage1 = (title:string) => {
        setServer1([{message:title}, ...server1])
    }

    //

    const[server2,setServer2] = useState([
            {message: 'message 4'},
            {message: 'message 5'},
            {message: 'message 6'},
        ]
    )
    const[input2,setInput2] = useState('')
    const addMessageInput = (e:string) => {setInput2(e)}
    const addMessage2 = () => {
        setServer2([{message: input2},...server2])
        setInput2('')
    }

    return (
        <div>
            <h3>Урок 6</h3>
            <FullInput callBack={addMessage1}/>
            {server1.map((message,i)=><div key={i}>{message.message}</div>)}

            <Input value={input2} callBack={addMessageInput}/>
            <Button name={'+'} callBack={addMessage2}/>
            {server2.map((message,i)=><div key={i}>{message.message}</div>)}
        </div>
    );
};

