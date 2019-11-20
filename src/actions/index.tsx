import { SHOW_USERS } from "../types";
import { getMembers } from "../utils/api";

export function showUsers() {
  return async (dispatch: any, getState: any) => {
    const result = await getMembers(116, "senate");
    const data = dispatch({
      type: SHOW_USERS,
      payload: result.data.results[0].members
    });
  };
}
