import * as actions from "../Actions/handleAPIAction";

export const initialState = {
  loading: false,
  hasErrors: false,
  dataAPI: false,
  dataMenu: [],
  dataSetup: [],
};

export default function handleApiReducers(state = initialState, action) {
  switch (action.type) {
    case actions.GET_DATA:
      return { ...state, loading: true };
    case actions.GET_DATA_SUCCES:
      return {
        ...state,
        dataAPI: action.payload,
        loading: false,
        hasErrors: false,
      };
    case actions.GET_DATA_FAIL:
      return { ...state, loading: false, hasErrors: true };
    case actions.GET_DATA_MENU:
      return {
        ...state,
        dataMenu: action.payload,
        loading: false,
        hasErrors: false,
      };
    case actions.GET_DATA_SETUP:
      return {
        ...state,
        dataSetup: action.payload,
        loading: false,
        hasErrors: false,
      };
    default:
      return state;
  }
}
