'use client';
import React, { useEffect } from 'react';
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
import { PayflowContext } from '../../../contexts/PayflowContextProvider';
import useAPI from 'apps/payflow-web/src/core/network';
import {
  setEmployees,
  setLoadingState,
} from 'apps/payflow-web/src/contexts/actions';

export default function Employees() {
  const api = useAPI();
  const { state, dispatch } = React.useContext(PayflowContext);
  const { employee } = state;

  const fetchEmployees = async () => {
    dispatch(setLoadingState(true));
    try {
      const res = await api.get('/employees');
      console.log({ res });
      dispatch(setEmployees(res as Employee[]));
      dispatch(setLoadingState(false));
    } catch (err) {
      dispatch(setLoadingState(false));
      // Ideally, we should show a snackbar here or redirect the user to an error page
      console.error(err);
    }
  };

  const deleteEmployee = async (id: string) => {
    dispatch(setLoadingState(true));
    try {
      // This should be a DELETE request
      await api.post(`/employees/${id}`, {});
      fetchEmployees();
    } catch (err) {
      dispatch(setLoadingState(false));
      console.error(err);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);
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
            {employee.map((row: Employee) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.staffId}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.basicSalary}</TableCell>
                <TableCell>{row.salaryAllowances}</TableCell>
                <TableCell>
                  {new Date(row.joiningDate).toDateString()}
                </TableCell>
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
