import { configureStore } from "redux";
import reducer from "./counterReducer";

const store = configureStore(reducer);

export default store;