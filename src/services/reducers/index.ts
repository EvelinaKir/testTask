import { combineReducers } from "redux";
import { Tactions, USER_LOG_IN } from "../actions/index";

type TinitialUserInfo = {
  info: {
    login: string;
    password: number;
  };
  logged: boolean;
};

export const initialUserInfo = {
  info: {
    login: "developer21",
    password: 123456,
  },
  logged: false,
};

export const userInfo = (
  state = initialUserInfo,
  action: Tactions
): TinitialUserInfo => {
  switch (action.type) {
    case USER_LOG_IN: {
      return {
        ...state,
        logged: true,
      };
    }
    default: {
      return state;
    }
  }
};

export const rootReducer = combineReducers({
  userInfo: userInfo,
});
