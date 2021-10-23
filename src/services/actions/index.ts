import { Dispatch } from "redux";

export const USER_LOG_IN: "USER_LOG_IN" = "USER_LOG_IN";

export type TUserLogInRequest = {
  readonly type: typeof USER_LOG_IN;
};

export type Tactions = TUserLogInRequest;

export const loginRequest = () => {
  return function (dispatch: Dispatch<Tactions>) {
    dispatch({
      type: USER_LOG_IN,
    });
  };
};
