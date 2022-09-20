import React, { useState } from "react";

function Test() {
  const [user, setUser] = useState({
    name: "Damian",
  })


  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  )

}

export default Test;