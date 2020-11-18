import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authenticate } from "./actions/Users";
 

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(authenticate('supreme', 'supreme'))
  }, [])
  return (
    <div className="App">
    </div>
  );
}

export default App;
