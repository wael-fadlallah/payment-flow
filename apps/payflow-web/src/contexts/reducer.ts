import { StateType, Action } from '../core/types';

export const reducer = (state: StateType, action: Action): StateType => {
  switch (action.type) {
    case 'SET_AUTH_USER':
      return {
        ...state,
        auth: action.payload,
      };
    case 'CLEAR_AUTH_USER':
      return {
        ...state,
        auth: {
          username: '',
          password: '',
          email: '',
          accessToken: '',
        },
      };
    default:
      return state;
  }
};
