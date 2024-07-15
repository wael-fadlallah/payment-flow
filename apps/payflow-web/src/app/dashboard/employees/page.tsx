import React from 'react';
import { Box, IconButton } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { employees, Employee } from '../../../types';

export default function Employees() {
  return (
    <Box>
      <TableContainer component={Paper}>
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
    </Box>
  );
}
