import React, { useState } from "react";
import { useEffect } from "react";
import API from "../../utils/API";

function Claims() {

  const [Claims, setClaims] = useState([])
  
  useEffect(() => {
    API.getAllUnassignedClaims().then((res) => setClaims(res.data))
  }, [])

  const handleRejectClaim = (e) => {
    e.preventDefault();
    console.log(e);
    let claimId = ((e) => e.target.claimId)
    let data = ((e) => e.target)
    // API.updateClaim(data, claimId)
  }

return (
  <div>
    <h1 id='cardTitle'>Claims History</h1>
    {Claims.length == 0 ? (
      <p>No Claims Have Been Filed</p>
    ) : (
      <div className='container'>
        {Claims.map((claim) => (
          <form
            id='vehicleCard'
            key={claim.claimId}
            onSubmit={handleRejectClaim}
          >
            <p>
              <span style={{ fontWeight: "bold" }}> Date Submitted: </span>
              {claim.creationDate}
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}> Status: </span>
              {claim.status}
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}> Vehicle Year: </span>
              {claim.vehicleYear}
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}> Vehicle Make: </span>
              {claim.vehicleMake}
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}> Vehicle Model: </span>
              {claim.vehicleYear}
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}> Description: </span>
              {claim.description}
            </p>
            <button
              className={"btn btn-danger"}
              style={{
                border: " solid black",
                color: "black",
                fontWeight: "bold",
              }}
            >
              Reject Claim
            </button>
          </form>
        ))}
      </div>
    )}
  </div>
);
}

export default Claims