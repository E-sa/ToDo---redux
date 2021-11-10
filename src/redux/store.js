import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import { forbiddenWordsMiddleware } from "./middleware";


//Now, time to wire up forbiddenWordsMiddleware to the Redux store. For that we need to import our middleware, another utility from Redux (applyMiddleware), and then cook everything together.
const store = createStore(
  rootReducer,
  applyMiddleware(forbiddenWordsMiddleware)
);

store.subscribe(() => console.log(store.getState()));




export default store;
