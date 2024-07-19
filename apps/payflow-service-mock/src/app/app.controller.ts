import { Controller, Get, Post, Body, Headers } from '@nestjs/common';
import { AppService } from './app.service';
import { hash } from 'bcrypt';
import { readFileSync } from 'fs';
import { join } from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Post('/login')
  async login(@Body() loginData: { email: string; password: string }) {
    const { email, password } = loginData;
    const combinedCredentials = email + password;
    const accessToken = await hash(combinedCredentials, 10);
    return { accessToken };
  }

  @Get('/employees')
  getEmployees(@Headers('Authorization') accessToken: string) {
    return employeeData;
  }
}

const employeeData = [
  {
    staffId: 1,
    name: 'Alice Johnson',
    joiningDate: '2020-01-15T00:00:00.000Z',
    basicSalary: 50000,
    salaryAllowances: 5000,
  },
  {
    staffId: 2,
    name: 'Bob Smith',
    joiningDate: '2019-02-20T00:00:00.000Z',
    basicSalary: 55000,
    salaryAllowances: 6000,
  },
  {
    staffId: 3,
    name: 'Charlie Brown',
    joiningDate: '2021-03-10T00:00:00.000Z',
    basicSalary: 60000,
    salaryAllowances: 7000,
  },
  {
    staffId: 4,
    name: 'Daisy Miller',
    joiningDate: '2018-04-25T00:00:00.000Z',
    basicSalary: 52000,
    salaryAllowances: 5500,
  },
  {
    staffId: 5,
    name: 'Ethan Davis',
    joiningDate: '2022-05-30T00:00:00.000Z',
    basicSalary: 58000,
    salaryAllowances: 6500,
  },
  {
    staffId: 6,
    name: 'Fiona Green',
    joiningDate: '2021-06-15T00:00:00.000Z',
    basicSalary: 54000,
    salaryAllowances: 5700,
  },
  {
    staffId: 7,
    name: 'George White',
    joiningDate: '2019-07-10T00:00:00.000Z',
    basicSalary: 53000,
    salaryAllowances: 5900,
  },
  {
    staffId: 8,
    name: 'Hannah Black',
    joiningDate: '2020-08-05T00:00:00.000Z',
    basicSalary: 56000,
    salaryAllowances: 6200,
  },
  {
    staffId: 9,
    name: 'Ian Grey',
    joiningDate: '2018-09-25T00:00:00.000Z',
    basicSalary: 51000,
    salaryAllowances: 5300,
  },
  {
    staffId: 10,
    name: 'Jackie Brown',
    joiningDate: '2019-10-30T00:00:00.000Z',
    basicSalary: 57000,
    salaryAllowances: 6400,
  },
];
