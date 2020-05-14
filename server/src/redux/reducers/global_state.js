import { globalAction } from "../actions/global_state";

let defaultSate = {
  backdropOpen: false,
  notification: false,
  notificationText: "Loading",
  notificationType: true,
};

const global = (state = defaultSate, action) => {
  switch (action.type) {
    case "TOOGLE_BACKDROP":
      state = {
        ...state,
        backdropOpen: !state.backdropOpen,
      };
      return state;
    case "NOTIFICATION":
      state = {
        ...state,
        ...action["payload"],
      };
      return state;
    case "NOTIFICATION_CLOSE":
      state = {
        ...state,
        notification: false,
      };
      return state;

    default:
      return state;
  }
};

export default global;
