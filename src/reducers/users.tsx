import { SHOW_USERS } from "../types";

const initialState = {
  list: []
};

export function showUsers(state = initialState, action: any) {
  switch (action.type) {
    case SHOW_USERS:
      return Object.assign({}, state, { list: action.payload });
    default:
      return state;
  }
}
