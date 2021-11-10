import { ADD_TASK, CHANGE_FILTER, CLEAR_COMPLETD } from "./action-types";
import { REMOVE_TASK } from "./action-types";
import { UPDATE_CHECKMARK } from "./action-types";


let taskID = 0;

export function addTask(payload) {
  return { type: ADD_TASK, payload, id: taskID++ };
}

export function removeTask(id) {
  return { type: REMOVE_TASK, id };
}


export function updateCheckmark(id) {
  return { type: UPDATE_CHECKMARK, id };
}

export function clearCompletd() {
  return { type: CLEAR_COMPLETD };
}

export function changeFilter(filter) {
  return { type: CHANGE_FILTER, filter };
}

