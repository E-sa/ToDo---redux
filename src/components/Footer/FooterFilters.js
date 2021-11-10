//there is a "filter:all" in last index of initial state, here when user change filters "filter" value will change to "all" or "active" or "completed".

//<EachTask /> checkes "filter" and map base on its value

import React from 'react';
import { changeFilter } from '../../redux/actions'
import { connect } from "react-redux";

function mapDispatchToProps(dispatch) {
    return {
        clearMyCompleted: tasks => dispatch(changeFilter(tasks))
    };
}



class AddTaskInput extends React.Component {

    constructor() {
        super();

        this.state = {
            filter: "all"
        };
    }

    changeStatus = (filter) => {
        this.props.clearMyCompleted(filter);

        this.setState({ filter: filter });

    }





    render() {
        const filter = this.state.filter
        return (
            <>
                <span
                    id="all"
                    className={[filter === "all" ? 'activeFilter' : ""]}
                    onClick={() => this.changeStatus("all")}
                >
                    All
                </span>

                <span
                    id="active"
                    className={[filter === "active" ? 'activeFilter' : ""]} onClick={() => this.changeStatus("active")}
                >
                    Active
                </span>

                <span
                    id="completed"
                    className={[filter === "completed" ? 'activeFilter' : ""]} onClick={() => this.changeStatus("completed")}
                >
                    Completed
                </span>
            </>
        )
    }
}

const FooterFilters = connect(
    null,
    mapDispatchToProps
)(AddTaskInput);



export default FooterFilters;
