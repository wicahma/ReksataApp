import axios from "axios";

export const GET_DATA = "GET_DATA";
export const GET_DATA_SUCCES = "GET_DATA_SUCCES";
export const GET_DATA_FAIL = "GET_DATA_FAIL";
export const GET_DATA_MENU = "GET_DATA_MENU";
export const GET_DATA_SETUP = "GET_DATA_SETUP";

const rootPath = "http://localhost:4000";

export const getData = () => ({
  type: GET_DATA,
  payload: null,
});

export const getDataSucceed = (data) => ({
  type: GET_DATA_SUCCES,
  payload: data,
});

export const getDataFail = (error) => ({
  type: GET_DATA_FAIL,
  payload: error,
});


export const getDataMenu = (data) => ({
  type: GET_DATA_MENU,
  payload: data,
});

export const getDataSetup = (data) => ({
  type: GET_DATA_SETUP,
  payload: data,
});

export const fetchAPI = (dataPath, func) => {
  return (dispatch) => {
    dispatch(getData());
    axios
      .get(`${rootPath}/${dataPath}`)
      .then((res) => {
        dispatch(func(res.data.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(getDataFail(err));
      });
  };
};


