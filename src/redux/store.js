import { createStore, combineReducers } from "redux";

import booksReducer from "./reducers/booksReducers";
import categoriesReducer from "./reducers/categoriesReducer";
import themeReducer from "./reducers/themeReducers";
import loginReducer from "./reducers/loginReducer";

const rootReducer = combineReducers({
  booksState: booksReducer,
  categoriesState: categoriesReducer,
  themeState: themeReducer,
  loginState: loginReducer,
});

const store = createStore(rootReducer);

export default store;
