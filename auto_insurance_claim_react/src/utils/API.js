import axios from "axios";

axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
const api = "http://localhost:8080/api";

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
      .then(function (response) {
        console.log(response);
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  rejectClaim: function (data, claimId) {
    axios({
      method: "put",
      headers: { "Access-Control-Allow-Origin": "*" },
      url: api + "/claim/" + claimId,
      claimId: claimId,
      data: data,
    })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  getClaimsByUserId: function (id) {
    return axios.get(api + "/claims/user/" + id).then(function (response) {
      return response;
    });
  },

  // Delete Claim
  deleteClaim: function (id) {
    return axios
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
      .then(function (response) {
        console.log(response.data.userId);
        return response.data.userId;
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function (response) {});
  },
  // Get Single User
  getUserById: function (id) {
    return axios({
      method: "get",
      headers: { "Access-Control-Allow-Origin": "*" },
      url: api + "/user/" + id,
      id: id,
    })
      .then(function (response) {
        // console.log(response.data)
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  //unused API calls but here for possible future version implementation

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
  // deleteUser: function (id) {
  //   axios
  //     .delete(api + "/user/" + id)
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // },

  //Get All Claims
  // getAllUnassignedClaimsByUserId: function (id) {
  //   axios({
  //     method: "get",
  //     headers: { "Access-Control-Allow-Origin": "*" },
  //     url: api + "/unassignedClaims/",
  //     id: id,
  //   })
  //     .then(function (response) {
  //       return response;
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // },

  // assign user to Claim
  // assignUserToClaim: function (claimId, userId) {
  //   axios
  //     .put(api + "/claim/" + claimId + "/user/" + userId)
  //     .then(function (response) {
  //       return response;
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // },

  // update claim
  updateClaim: function (data, claimId) {
    axios({
      method: "put",
      headers: { "Access-Control-Allow-Origin": "*" },
      url: api + "/claim/" + claimId,
      claimId: claimId,
      data: data,
    })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
