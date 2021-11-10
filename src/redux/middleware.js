import { ADD_TASK } from "./action-types";

// Here’s what the middleware does: when action type is ADD_ARTICLE check if action.payload.title contains a bad word. If it does then dispatch an action of type FOUND_BAD_WORD, otherwise let the next middleware run.

const forbiddenWords = ["donkey", "cow"];

export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      // do your stuff
      if (action.type === ADD_TASK) {
        
        const foundWord = forbiddenWords.filter(word =>
          action.payload.includes(word)
        );

        //if found anything:
        if (foundWord.length) {
          return dispatch({ type: "FOUND_BAD_WORD" });
        }
      }
      return next(action);
    };
  };
}