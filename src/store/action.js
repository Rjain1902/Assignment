export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const fetchNewRequest = () => {
  return {
    type: FETCH_REQUEST,
  };
};
export const fetchSuccess = (data) => {
  return {
    type: FETCH_SUCCESS,
    payload: data,
  };
};
export const fetchFailure = (error) => {
  return {
    type: FETCH_FAILURE,
    payload: error,
  };
};
export const fetchAPI = () => {
  return async (dispatch) => {
    dispatch(fetchNewRequest());

    try {
      const response = await fetch("https://reqres.in/api/users?page=1");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      dispatch(fetchSuccess(data));
    } catch (error) {
      dispatch(fetchFailure(error));
    }
  };
};
