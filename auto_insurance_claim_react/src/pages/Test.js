import React, { useState, useEffect } from "react";
import CustomerInfo from "../components/CustomerInfo";
import API from "../utils/API";

function Test() {
  const [user, setUser] = useState({})

useEffect(() => {
API.getUserById(1).then((res) => setUser(res))
})

  // useEffect(() => {
  //   API.getUserById(id)
  //     .then((res) => setUser(res.data))
  //     .catch((err) => console.log(err));
  // }, []);

  return <CustomerInfo info={user} />;

}

export default Test;