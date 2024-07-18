'use client';
import React from 'react';
import { Box, IconButton, Toolbar, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { AddCircleOutline } from '@mui/icons-material';
import { employees, Employee } from '../../../core/types';
import { Dialog } from '../../../core/components';

export default function Employees() {
  return (
    <Box>
      <Box className="my-4" />
      <TableContainer component={Paper}>
        <Toolbar className="justify-between">
          <Typography variant="h4">Employees</Typography>
          <IconButton>
            <AddCircleOutline className="mx-1" />
            Create
          </IconButton>
        </Toolbar>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Staff ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Basic Salary</TableCell>
              <TableCell>Salary Allowances</TableCell>
              <TableCell>Joining Date</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((row: Employee) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.staffId}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.basicSalary}</TableCell>
                <TableCell>{row.salaryAllowances}</TableCell>
                <TableCell>{row.joiningDate.toDateString()}</TableCell>
                <TableCell>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog
        title={'Delete employee'}
        text={'Are you sure you want to delete this employee?'}
        open={false}
        onClose={function (): void {}}
        onPrimaryButtonPress={function (): void {}}
      />
    </Box>
  );
}
