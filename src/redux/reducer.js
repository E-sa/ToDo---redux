import { ADD_TASK, CHANGE_FILTER, CLEAR_COMPLETD, REMOVE_TASK, UPDATE_CHECKMARK } from "./action-types";

const initialState = [
  { id: -1, filter: "all", completed: false }
];


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    //1. ADD TASK
    case ADD_TASK:
      return [

        {
          id: action.id,
          text: action.payload,
          completed: false
        },
        ...state,
      ];

    // 2. REMOVE TASK
    case REMOVE_TASK:
      var newArr = [...state.filter((task) => {
        return task.id !== action.id
      })];
      return newArr;

    //3. handle check mark toggle whether its completed or not 
    case UPDATE_CHECKMARK:
      return state.map(tasks => {
        if (tasks.id === action.id) {
          return { ...tasks, completed: !tasks.completed }
        };
        return tasks;
      });

    // 4. delete completed tasks
    case CLEAR_COMPLETD:
      newArr = [...state.filter((task) => {
        return task.completed === false
      })];
      return newArr;

    case CHANGE_FILTER:
      return state.map(tasks => {
        if (tasks.id === -1) {
          return { ...tasks, filter: action.filter }
        };
        return tasks;
      });





    //DEFAULT
    default:
      return state;
  }
};


export default rootReducer;
