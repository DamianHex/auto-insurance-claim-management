import React, { useState } from "react";
import { useEffect } from "react";
import API from "../../utils/API";
import { useAuth0 } from "@auth0/auth0-react";

function Claims() {
  const user = useAuth0();
  const { sub } = user.user;
  const userId2 = Number(sub.slice(18));
  var today = new Date();
  var DD = String(today.getDate()).padStart(2, "0");
  var MM = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var YYYY = today.getFullYear();
  var HHMT = today.getHours();
  var HH = (today.getHours() + 24) % 12 || 12;
  var mm = (today.getMinutes() < 10 ? "0" : "") + today.getMinutes();
  var ampm = HHMT >= 12 ? "pm" : "am";

  today = MM + "/" + DD + "/" + YYYY;
  let time = HH + ":" + mm + ampm;

  const [Claims, setClaims] = useState("");

  useEffect(() => {
    API.getClaimsByUserId(userId2).then((res) => setClaims(res.data));
  }, []);

  const handleRejectClaiam = (claim) => {
    API.rejectClaim(
      {
        // vehicleYear: formObject.vehicleYear,
        // vehicleMake: formObject.vehicleMake,
        // vehicleModel: formObject.vehicleModel,
        // creationDate: today + " " + time,
        lastModifiedDate: today + " " + time,
        // status: "In Progress",
        // description: formObject.description,
        // gid: userId2,
      },
      claim.claimId
    );
    window.location.reload();
  };

  const deleteClaim = (id) => {
    API.deleteClaim(id);
    window.location.reload();
  }

  return (
    <div>
      <h1 id='cardTitle'>Claims History</h1>
      {Claims.length === 0 ? (
        <p>No Claims Have Been Filed</p>
      ) : (
        <div className='container'>
          {Claims.map((claim) => (
            <div id='vehicleCard' key={claim.claimId}>
              <h5 id='cardTitleBox'>
                <span style={{ fontWeight: "bold" }} name='claimId'>
                  {" "}
                  Claim Id:{" "}
                </span>
                {claim.claimId}
              </h5>
              <div id='cardInfoBox'>
                {claim.status === "Rejected" ? (
                  <p style={{ color: "red" }}>
                    <span style={{ fontWeight: "bold", color: "black" }}>
                      {" "}
                      Status:{" "}
                    </span>
                    {claim.status}
                  </p>
                ) : (
                  <p>
                    <span style={{ fontWeight: "bold" }}> Status: </span>
                    {claim.status}
                  </p>
                )}
                <p>
                  <span style={{ fontWeight: "bold" }}> Date Submitted: </span>
                  {claim.creationDate}
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}> Last Modified: </span>
                  {claim.lastModifiedDate}
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
              </div>

              <div>
                <button
                  className={"btn "}
                  style={{
                    border: " solid black",
                    color: "red",
                    fontWeight: "bold",
                    backgroundColor: "white",
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
