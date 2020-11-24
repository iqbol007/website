import React, { useEffect } from "react";
import LoginForm from "./components/LoginForm";
import MessagesList from "./components/MessageList";
import { UserList } from "./components/UsersList";
// import { getAccessToken } from "./utils";
// import { useDispatch, useSelector } from "react-redux";
// import { ITokenDecode, userToStore } from "./actions/Users";
// import { IRootState } from "./reducers";
// import { IUsersInitialState } from "./reducers/Users";
// import { IUser } from "./actions/Users/interfaces";




function App() {

  return (
    <div className="App" >
      <LoginForm />
      <MessagesList />
      <UserList />
    </div>
  );
}

export default App;
