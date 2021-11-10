// this component map thro initial state and counts all objects that have "completed: false";

//made with redux hook
import React from "react";
import { useSelector } from "react-redux";



export default function ItemsLeft() {

    const tasks = useSelector(state => state)

    //counter for items left
    let itemsLeft = -1;
    tasks.filter((task) => {
        if (!task.completed) {
            itemsLeft++
        }
        return itemsLeft
    });


    return (

        <span id="items-left">{itemsLeft} items left</span>

    )
};

