import { Action, ActionType, AuthUser, Employee } from '../core/types';

export const setAuthUser = (user: AuthUser): Action => ({
  type: ActionType.SET_AUTH_USER,
  payload: user,
});

export const clearAuthUser = (): Action => ({
  type: ActionType.CLEAR_AUTH_USER,
});

export const setLoadingState = (isLoading: boolean): Action => ({
  type: ActionType.SET_LOADING_STATE,
  payload: isLoading,
});

export const setEmployees = (employees: Employee[]): Action => ({
  type: ActionType.SET_EMPLOYEES,
  payload: employees,
});
