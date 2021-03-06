export const setUser = (username) => {
  console.log("action: ", username);
  return {
    type: "SET_USER",
    value: username,
  };
};

export const addListing = (business) => {
  return async (dispatch) => {
    await fetch(
      `https://maps.google.com/maps/api/geocode/json?key=AIzaSyDO4_O1UDOeMQ9P5CvydjO_Rmv8yFdMV2E&address=${business.address}`
    )
      .then((res) => res.json())
      .then((response) => {
        business.lat = response.results[0].geometry.location.lat;
        business.lng = response.results[0].geometry.location.lng;
        const action = {
          type: "ADD_LISTING",
          value: business,
        };
        dispatch(action);
      });
  };
};

export const removeListing = (id) => {
  return {
    type: "REMOVE_LISTING",
    value: id,
  };
};
