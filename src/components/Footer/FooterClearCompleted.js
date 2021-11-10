//when clear completed  clicked "clearCompletd" action happens

//made with redux hook
import React from 'react';
import { clearCompletd } from '../../redux/actions'
import { useDispatch } from "react-redux";



export default function CLearCompletd() {

    const dispatch = useDispatch();

    return (
        <span 
          id="clear"
          onClick={() => dispatch(clearCompletd())}
        >
         Clear Completed
        </span>
    )

}

