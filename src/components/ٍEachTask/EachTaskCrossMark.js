//when cross mark clicked task will be removed

//made with redux hook
import React from 'react';
import { removeTask } from '../../redux/actions'
import { useDispatch } from "react-redux";



export default function CrossMark({id}) {

    const dispatch = useDispatch();

    return (
        <div 
        className="li-cross-mark" 
        onClick={() => dispatch(removeTask(id))}
        ></div>
    )

}
