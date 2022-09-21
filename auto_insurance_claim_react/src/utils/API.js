import axios from "axios";


axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
const api = "http://localhost:8080/api";

var config = {
  headers: { "Access-Control-Allow-Origin": "*" },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  //POST Claim
  saveNewClaim: function (data) {
    axios({
      method: "post",
      headers: { "Access-Control-Allow-Origin": "*" },
      url: api + "/claims",
      data: data,
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  //Get All Claims
  getAllClaims: function () {
    axios
      .get(api + "/claims")
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  //Get Single Claim
  getClaimById: function (id) {
    axios
      .get(api + "claim/" + id)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  assignUserToClaim: function (claimId, userId) {
    axios.put(api + "claim/" + claimId + "/user/" + userId)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  // //PUT Claim
  // updateClaim: function (data, id) {

  //   axios
  //     .post(api + "/claim", {
  //       vehicleYear: data.vehicleYear,
  //       vehicleMake: data.vehicleMake,
  //       vehicleModel: data.vehicleModel,
  //       creationDate: data.creationDate,
  //       status: "submitted",
  //       description: data.description,
  //     })
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // },

  // Delete Claim
  deleteClaim: function (id) {
    axios
      .delete(api + "/claim/" + id)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  // POST User
  createUser: function (data) {
    axios({
      method: "post",
      headers: { "Access-Control-Allow-Origin": "*" },
      url: api + "/users",
      data: data,
    })
   .then(function(response) {
     console.log(response);
   })
   .catch(function(error) {
     console.log(error);
   });
  },
  // Get Single User
  getUserById: function (id) {
    axios
      .get(api + "user/" + id)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  // Update User
  // updateUser: function (data) {
  //   axios
  //     .post(api + "/user", {
  //       firstName: data.firstName,
  //       lastName: data.lastName,
  //       email: data.email,
  //       password: data.password,
  //       streetAddress: data.streetAddress,
  //       city: data.city,
  //       state: data.state,
  //       zip: data.zip,
  //     })
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // },
  // Delete User
  deleteUser: function (id) {
    axios
      .delete(api + "/user/" + id)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};