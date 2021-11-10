//this component includes an text input that user types in it and after enter key pressed new task will be added to redux store
import React from 'react';
import {addTask} from '../redux/actions'
import { connect } from "react-redux";

function mapDispatchToProps(dispatch) {
    return {
      addMyTask: tasks => dispatch(addTask(tasks))
    };
  }
  
  

class AddTaskInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: ''
        };
    }

    //on input change save the new task inside input value
    newTodoText = (typed) => {

        this.setState({ inputValue: typed.target.value })

    }


    //on enter key pressed add new task to redux and empty input
    handleKeyPress = (event) => {

        if (event.key === 'Enter' && this.state.inputValue !== "") {

            this.props.addMyTask(this.state.inputValue );

            this.setState({
                inputValue: ""
            })


        }
    }




    render() {
        return (
            <>
            
            <label id="create-todo-label" htmlFor="create-todo-input"> </label>
            <input
                value={this.state.inputValue}
                id="create-todo-input"
                type="text"
                placeholder="Create a new todo ..."
                onChange={this.newTodoText.bind(this)}
                onKeyPress={this.handleKeyPress}
            >
                
            </input>
            </>
        )
    }
}

const addTasktoRedux = connect(
    null,
    mapDispatchToProps
  )(AddTaskInput);
  


export default addTasktoRedux;
