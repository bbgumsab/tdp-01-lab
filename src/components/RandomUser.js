import { useEffect, useState } from "react";
import axios from "axios";

const RandomUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [change, setChange] = useState(false);

  useEffect(() => {
    axios.get("https://randomuser.me/api/").then((response) => {
      console.log("randomuser data", response.data);
      setFirstName(response.data.results[0].name.first);
      setLastName(response.data.results[0].name.last);
    });
    // fetch("https://randomuser.me/api/")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("randomuser data", data);
    //     setFirstName(data.results[0].name.first);
    //     setLastName(data.results[0].name.last);
    //   });
  }, [change]);

  return (
    <>
      Random User: {firstName} {lastName}
      <button onClick={() => setChange(!change)}>Change random user!</button>
    </>
  );
};

export default RandomUser;
