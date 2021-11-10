//this component map on what we have in redux

//made with redux hook
import React from "react";
import { useSelector } from "react-redux";
import CrossMark from "./EachTaskCrossMark";
import CheckBox from "./EachTaskCheckBox";


export default function List() {

    const myTasks = useSelector(state => state)


    //slice because last item is "status" not the task so we exclude last item
    return myTasks.slice(0, -1).map((task, index) => {

        //1. SHOWS ALL TASKS
        if (myTasks[myTasks.length - 1].filter === "all") {
            return (

                <div key={index} className="each-task">

                    <CheckBox id={task.id} isComplete={task.completed} />

                    <p>{task.text}</p>

                    <CrossMark id={task.id} />

                </div>
            )
        }

        //2. SHOWS ONLY ACTIVE TASKS
        else if (myTasks[myTasks.length - 1].filter === "active") {
            if (!task.completed) {

                return (

                    <div key={index} className="each-task">

                        <CheckBox id={task.id} isComplete={task.completed} />

                        <p>{task.text}</p>

                        <CrossMark id={task.id} />

                    </div>
                )
            }
        }
        else {
            //3.SHOWS ONLY COMPLETED TASKS
            if (task.completed) {

                return (

                    <div key={index} className="each-task">

                        <CheckBox id={task.id} isComplete={task.completed} />

                        <p>{task.text}</p>

                        <CrossMark id={task.id} />

                    </div>
                )
            }

        }

        return null
    })




};
