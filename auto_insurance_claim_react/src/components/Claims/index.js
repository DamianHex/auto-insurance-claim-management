import React, { useState } from "react";
import { useEffect } from "react";
import API from "../../utils/API";
import { useAuth0 } from "@auth0/auth0-react";

function Claims() {
  const user = useAuth0();
  const { sub } = user.user;
  const userId2 = Number(sub.slice(18));

  const [Claims, setClaims] = useState("");

  useEffect(() => {
    API.getClaimsByUserId(userId2).then((res) => setClaims(res.data));
  }, []);

  const handleRejectClaiam = (claim) => {
    console.log(claim, claim.claimId);
    API.updateClaim(claim, claim.claimId);
    window.location.reload();
  };

  const deleteClaim = (id) => {
    API.deleteClaim(id);
    window.location.reload();
  }

  return (
    <div>
      <h1 id='cardTitle'>Claims History</h1>
      {Claims.length == 0 ? (
        <p>No Claims Have Been Filed</p>
      ) : (
        <div className='container'>
          {Claims.map((claim) => (
            <div id='vehicleCard' key={claim.claimId}>
              <p>
                <span style={{ fontWeight: "bold" }} name='claimId'>
                  {" "}
                  Claim Id:{" "}
                </span>
                {claim.claimId}
              </p>
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
              <div className='card'>
                <button
                  className={"btn btn-danger"}
                  style={{
                    border: " solid black",
                    color: "black",
                    fontWeight: "bold",
                  }}
                  onClick={() => handleRejectClaiam(claim)}
                >
                  Reject Case
                </button>
                <button
                  className={"btn btn-dark"}
                  style={{
                    border: " solid black",
                    color: "white",
                    fontWeight: "bold",
                  }}
                  onClick={() => deleteClaim(claim.claimId)}
                >
                  Delete Claim
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Claims;
