import React, { useReducer, useRef } from "react";

// useReducer() hook

// standard syntax for creating a useStateHook()
// a variable then a dispatch function which is called when ever we want to change something;
// it takes in two arguments reducer function and initial states
// const [state, dispatch] = useReducer(reducer, { count: 0, showText: false });

// {
//   /* {state.showText && <p>{state?.count}</p>} */
// }

// {
//   /* <button
//         onClick={() => {
//           dispatch({ type: "INCREMENT" });
//           dispatch({ type: "toggleShowText" });
//         }}
//       >
//         submit
//       </button> */
// }

// reducer will have two arguments is state and action
// const reducer = (state: any, action: any) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return { count: state.count + 1, showText: state.showText };
//     case "toggleShowText":
//       return { count: state.count, showText: !state.showText };
//     default:
//       return state;
//   }
// };

// useRef hook

// mainly used for dom manipulations
// const inputRef = useRef<any>(null);
// const handleClick = () => {
//   // means we always access the current value
//   console.log(inputRef?.current?.focus(), "ssss");
// };

// {
//   /* <input ref={inputRef} type="text" placeholder="Ex..." />
// <button onClick={handleClick}>focus</button> */
// }

function App() {
  // mainly used for dom manipulations

  return (
    <div className="App" style={{ textAlign: "center", padding: "3rem" }}></div>
  );
}

export default App;
