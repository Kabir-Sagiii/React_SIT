import { legacy_createStore } from "redux";
import ecommReducer from "../reducer/ecommReducer";

const store = legacy_createStore(ecommReducer);

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
