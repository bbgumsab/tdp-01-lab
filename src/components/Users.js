import { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log("users data", response.data);
        setUsers(response.data);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, []);

  return (
    <>
      Users:
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Users;
