import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
  reset
} from "../redux/counter/counterSlice";

export default function Counter() {
  const [inputval, setInputVal] = useState(0);
  const countValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter</h1>
      <h4>{countValue}</h4>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <br />
      <br />
      <input
        type="number"
        value={inputval}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <br />
      <button onClick={() => dispatch(incrementByAmount(Number(inputval)))}>
        + {inputval}
      </button>
      <button onClick={() => dispatch(decrementByAmount(Number(inputval)))}>
        - {inputval}
      </button>
      <br />
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}
