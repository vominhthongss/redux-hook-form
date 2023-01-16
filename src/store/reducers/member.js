const initialState = [{ fullname: "Vo Minh Thong", age: "18" }];
const memberReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADDMEMBER":
      return [...state, action.payload];
    case "UPDATEMEMBER":
      return;
    case "DELETEMEMBER":
      return;

    default:
      return state;
  }
};
export default memberReducers;
