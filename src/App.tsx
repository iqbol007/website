import React, { useEffect, } from "react";
import MessagesList from "./components/MessageList";
import { UserList } from "./components/UsersList";



function App() {

  useEffect(() => {


  }, [])


  return (
    <div className="App" >
      <MessagesList />
      <UserList />
    </div>
  );
}

export default App;
