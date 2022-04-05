import React, {ChangeEvent} from 'react';

type InputPropsType = {
    value: string
    callBack: (e: string) => void
}

export const Input = (props: InputPropsType) => {

    const onChangeInput2Handler = (e: ChangeEvent<HTMLInputElement>) => {
        props.callBack(e.currentTarget.value)
    }

    return (
        <input value={props.value} onChange={onChangeInput2Handler}/>
    );
};
