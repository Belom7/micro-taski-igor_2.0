import React, {ChangeEvent, useState} from 'react';

type FullInputPropsType = {
    callBack:(title:string)=>void
}

export const FullInput = (props:FullInputPropsType) => {

    const[title, setTitle] = useState('')

    const onChangeInputHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onClickButtonHandler = () => {
        props.callBack(title)
        setTitle('')
    }
    console.log(title)
    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};
