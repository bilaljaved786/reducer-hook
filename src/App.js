import './App.css';
import { addNumber, MinusNumber } from './ReducerHookSetup/action';
import { useReducer } from 'react';
import AddMinusReducer from './ReducerHookSetup/reducer';

function App() {

  // for small state use [usestate hook]
  // if we have multiple states we can manage in this way using useReducer hook

  // using reducer hooks here for state management
  // returning dispatch method reference
  const [state, dispatch] = useReducer(AddMinusReducer, 10);

  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={() => dispatch(addNumber())}>Add</button> &nbsp;
      <button onClick={() => dispatch(MinusNumber())}>Minus</button>
    </div>
  );
}

export default App;