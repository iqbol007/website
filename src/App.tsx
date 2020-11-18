import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authenticate } from "./actions/Users";
import { UserList } from "./components/UsersList";


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(authenticate('supreme', 'supreme'))
  }, [dispatch])
  return (
    <div className="App">
      <UserList />
    </div>
  );
}

export default App;
