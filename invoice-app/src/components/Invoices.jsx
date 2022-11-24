import { useState, useEffect } from 'react';

import axios from 'axios';

import { Table, TableRow, TableCell, TableBody, TableHead, Typography, Box, Button, styled } from '@mui/material';

const Component = styled(Box)`
  width: 80%;
  margin: 50px auto;
  & > h4 {
    margin-bottom: 20px;
  } 
  & > div > table > thead {
    background-color: #000;
  }
  & > div > table > thead > tr > th {
    color: #FFFFFF;
    font-weight: 600;
    font-size: 16px;
  }
  & > div > table > tbody > tr > td {
    font-size: 16px;
  }
`

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);
  
  useEffect(() => {
    const getData = async () => {
      let response = await axios.get('https://of5ekko7ng.execute-api.ap-south-1.amazonaws.com/Dev');
      setInvoices(JSON.parse(response.data.body).Items);
    }  
    getData();
  }, [])

  const removeData = (id) => {
    const updatedInvoices = invoices.filter(invoice => invoice.id !== id);
    setInvoices(updatedInvoices);
  }

  return (
    <Component>
      <Typography variant="h4">Users</Typography>
      <Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Salary</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Remove Entry</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
                {
                  invoices.length ? 
                    <>
                      {
                        invoices.map(invoice => (
                          <TableRow key={invoice.id}>
                            <TableCell>{invoice.id}</TableCell>
                            <TableCell>{invoice.name}</TableCell>
                            <TableCell>{invoice.email}</TableCell>
                            <TableCell>{invoice.phone}</TableCell>
                            <TableCell>{invoice.salary}</TableCell>
                            <TableCell>{invoice.age}</TableCell>
                            <TableCell><Button variant="contained" color="error" onClick={() => removeData(invoice.id)}>Remove</Button></TableCell>
                          </TableRow>
                        ))
                      }
                    </>
                  : <Typography>All Caught Up!</Typography>
                }
          </TableBody>
        </Table>
      </Box>
    </Component>
  );
}

export default Invoices;
