import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFail,
} from "./actions";
import { getUsers } from "./../../../api/usersApi";

export const fetchUsers = (requestParams) => {
  return (dispatch) => {
    dispatch(fetchUsersRequest(requestParams));
    return getUsers(requestParams)
      .then((res) => {
        dispatch(fetchUsersSuccess(res));
        return res;
      })
      .catch((err) => {
        dispatch(fetchUsersFail(err));
        return err;
      });
  };
};
