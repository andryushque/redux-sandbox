import { createStore, bindActionCreators } from "redux";
import reducer from "./reducer";
import * as actions from "./actions";

const store = createStore(reducer);
const { dispatch } = store;

const { inc, dec, res, rnd } = bindActionCreators(actions, dispatch);

document.getElementById("inc").addEventListener("click", inc);
document.getElementById("dec").addEventListener("click", dec);
document.getElementById("res").addEventListener("click", res);

document.getElementById("rnd").addEventListener("click", () => {
  const randomValue = Math.floor(Math.random() * 10);
  rnd(randomValue);
});

const update = () => {
  document.getElementById("counter").innerHTML = store.getState();
};

store.subscribe(update);
