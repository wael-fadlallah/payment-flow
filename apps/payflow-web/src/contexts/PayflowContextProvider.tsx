'use client';
import React, { Dispatch, createContext, useReducer } from 'react';
import { StateType, Action } from '../core/types';
import { reducer } from './reducer';

const initialState: StateType = {
  auth: {
    username: '',
    password: '',
    email: '',
    accessToken: '',
  },
  employee: [],
  loading: false,
};

export const PayflowContext = createContext<{
  state: StateType;
  dispatch: Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => {},
});

const PayflowContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PayflowContext.Provider value={{ state, dispatch }}>
      {children}
    </PayflowContext.Provider>
  );
};

export default PayflowContextProvider;
