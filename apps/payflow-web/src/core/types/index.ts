export type Employee = {
  staffId: number;
  name: string;
  joiningDate: Date;
  basicSalary: number;
  salaryAllowances: number;
};

export type AuthUser = {
  username: string;
  password: string;
  email: string;
  accessToken: string;
};

export type StateType = {
  auth: AuthUser;
  employee: Employee[];
  loading: boolean;
};

export enum ActionType {
  SET_AUTH_USER = 'SET_AUTH_USER',
  CLEAR_AUTH_USER = 'CLEAR_AUTH_USER',
  SET_EMPLOYEES = 'SET_EMPLOYEES',
  SET_LOADING_STATE = 'SET_LOADING_STATE',
}

export type Action = {
  type: ActionType;
  payload?: any;
};
// Create an array of employees
export const employees: Employee[] = [
  {
    staffId: 1,
    name: 'Alice Johnson',
    joiningDate: new Date('2020-01-15'),
    basicSalary: 50000,
    salaryAllowances: 5000,
  },
  {
    staffId: 2,
    name: 'Bob Smith',
    joiningDate: new Date('2019-02-20'),
    basicSalary: 55000,
    salaryAllowances: 6000,
  },
  {
    staffId: 3,
    name: 'Charlie Brown',
    joiningDate: new Date('2021-03-10'),
    basicSalary: 60000,
    salaryAllowances: 7000,
  },
  {
    staffId: 4,
    name: 'Daisy Miller',
    joiningDate: new Date('2018-04-25'),
    basicSalary: 52000,
    salaryAllowances: 5500,
  },
  {
    staffId: 5,
    name: 'Ethan Davis',
    joiningDate: new Date('2022-05-30'),
    basicSalary: 58000,
    salaryAllowances: 6500,
  },
  {
    staffId: 6,
    name: 'Fiona Green',
    joiningDate: new Date('2021-06-15'),
    basicSalary: 54000,
    salaryAllowances: 5700,
  },
  {
    staffId: 7,
    name: 'George White',
    joiningDate: new Date('2019-07-10'),
    basicSalary: 53000,
    salaryAllowances: 5900,
  },
  {
    staffId: 8,
    name: 'Hannah Black',
    joiningDate: new Date('2020-08-05'),
    basicSalary: 56000,
    salaryAllowances: 6200,
  },
  {
    staffId: 9,
    name: 'Ian Grey',
    joiningDate: new Date('2018-09-25'),
    basicSalary: 51000,
    salaryAllowances: 5300,
  },
  {
    staffId: 10,
    name: 'Jackie Brown',
    joiningDate: new Date('2019-10-30'),
    basicSalary: 57000,
    salaryAllowances: 6400,
  },
];
