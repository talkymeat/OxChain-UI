import * as user from "../actions/user_list";

let defaultList = {
  client: [],
  validator: [],
  service: [],
  admin: [],
};

const userlist = (state = defaultList, action) => {
  switch (action.type) {
    case user.SET_CLIENT().type:
      state = {
        ...state,
        client: [].concat(action.payload),
      };
      return state;
    case user.SET_VALIDATOR().type:
      state = {
        ...state,
        validator: [].concat(action.payload),
      };
      return state;
    case user.SET_SERVICE().type:
      state = {
        ...state,
        service: [].concat(action.payload),
      };
      return state;
    case user.SET_ADMIN().type:
      state = {
        ...state,
        admin: [].concat(action.payload),
      };
      return state;
    default:
      return state;
  }
};

export default userlist;
