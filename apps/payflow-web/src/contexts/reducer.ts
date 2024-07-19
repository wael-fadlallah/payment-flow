import { StateType, Action, ActionType } from '../core/types';

export const reducer = (state: StateType, action: Action): StateType => {
  switch (action.type) {
    case ActionType.SET_AUTH_USER:
      return {
        ...state,
        auth: action.payload,
      };
    case ActionType.CLEAR_AUTH_USER:
      return {
        ...state,
        auth: {
          username: '',
          password: '',
          email: '',
          accessToken: '',
        },
      };
    case ActionType.SET_EMPLOYEES:
      return {
        ...state,
        employee: action.payload,
      };
    case ActionType.SET_LOADING_STATE:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
