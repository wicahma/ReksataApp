export const initialState = {
  dataMakanan: [],
  dataMinuman: [],
};

export default function handleApiReducers(state = initialState, action) {
  switch (action.type) {
    case "SET_MENU":
      return { ...state, dataMakanan: action.dataMak, dataMinuman: action.dataMin};
    default:
      return state;
  }
}
