import { useState } from "react";

import "./App.css";
import UserForm from "./Components/UserForm/UserForm";
import UserList from "./Components/UserList/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <>
      <UserForm onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </>
  );
}

export default App;
