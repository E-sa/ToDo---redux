// when task "CHECKED" updateCheckmark action happens

//made with redux hook
import React from 'react';
import { updateCheckmark } from '../../redux/actions'
import { useDispatch } from "react-redux";


export default function CheckBox({ isComplete, id }) {

    const dispatch = useDispatch();

    return (
        <input
            type="checkbox"
            id="checkbox-1-1"
            className="regular-checkbox"
            onChange={() => dispatch(updateCheckmark(id))}
            checked={isComplete ? "checked" : ""}

        />
    )

}
