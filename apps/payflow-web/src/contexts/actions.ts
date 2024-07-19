import { AuthUser } from '../core/types';

enum ActionType {
  SET_AUTH_USER = 'SET_AUTH_USER',
  CLEAR_AUTH_USER = 'CLEAR_AUTH_USER',
}

interface SetAuthUserAction {
  type: ActionType.SET_AUTH_USER;
  payload: AuthUser;
}

interface ClearAuthUserAction {
  type: ActionType.CLEAR_AUTH_USER;
}

export type Action = SetAuthUserAction | ClearAuthUserAction;
