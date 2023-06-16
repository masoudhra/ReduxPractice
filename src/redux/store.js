import { legacy_createStore } from "redux";
import reducer from "./counter/counterReducer";

const store = legacy_createStore(reducer);

export default store;