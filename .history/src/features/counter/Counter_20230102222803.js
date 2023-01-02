import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {incrementCount} from "./counterSlice"

// Moved to counterSlice.js *Now we have a good separation between our Redux-specific code and our React components!*
// function incrementCount(){
//   return {type: "count/increment"}
// }
function Counter() {
  // read from the Redux store
  const items = useSelector((state) => state.items);

  // gives us the dispatch function to send actions to the Redux store
  const dispatch = useDispatch();

  function handleOnClick() {
    // dispatching an action on click
    dispatch(incrementCount());
  }

  return (
    <div>
      <button onClick={handleOnClick}>Click</button>
      <p>{items.length}</p>
    </div>
  );
}

export default Counter;
