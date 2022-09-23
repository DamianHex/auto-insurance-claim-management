import React, { useState } from "react";
import { useEffect } from "react";
import API from "../../utils/API";

function Claims() {

  const [Claims, setClaims] = useState([])
  
  useEffect(() => {
    API.getClaimsByUserId(1).then((res) => setClaims(res.data))
  })

  const handleRejectClaim = (e) => {
    e.preventDefault();
    console.log(e);
    let claimId = ((e) => e.target.claimId)
    let data = ((e) => e.target)
    // API.updateClaim(data, claimId)
  }

return (
  <div>
    <p id='cardTitle'>Enter Claim Information</p>
    {Claims.length ? (
      <div className='container'>
        {Claims.map((claim) => (
          // ******************                         *********************                        ************
          //*********************** START HERE - NEED TO GET THE FORM TO SUBMIT THE DATA TO *********************
          // ******************                         *********************                        ************

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
    ) : (
      <p>No Claims Have Been Filed</p>
    )}

    {/* <div className='d-flex flex-wrap'>
      <div className='p-2 flex-fill'>
        <label htmlFor='vehicleYear' className='order-1 p-2 col-form-label'>
          Vehicle Year
        </label>
        <div>
          <input
            type='text'
            className='form-control'
            id='vehicleYear'
            name='vehicleYear'
            defaultValue='{vehicle year}'
            readOnly
          />
        </div>
      </div>
      <div className='p-2 flex-fill'>
        <label htmlFor='vehicleMake' className='order-2 p-2 col-form-label'>
          Vehicle Make
        </label>
        <div>
          <input
            type='text'
            className='form-control'
            id='vehicleMake'
            name='vehicleMake'
            defaultValue='{vehicle make}'
            readOnly
          />
        </div>
      </div>
      <div className='p-2 flex-fill'>
        <label htmlFor='vehicleModel' className='order-3 p-2 col-form-label'>
          Vehical Model
        </label>
        <div>
          <input
            type='text'
            className='form-control'
            id='vehicleModel'
            name='vehicleModel'
            defaultValue='{claim.vehicleModel}'
            readOnly
          />
        </div>
      </div>{" "}
    </div>
    <div className='row'>
      <label htmlFor='description' className='col-sm-3 col-form-label'>
        Description
      </label>
      <div className='col-sm-8'>
        <input
          type='text'
          className='form-control'
          id='description'
          name='description'
          value='{claim description}'
          readOnly
        />
      </div>
    </div> */}
  </div>
);
}

export default Claims