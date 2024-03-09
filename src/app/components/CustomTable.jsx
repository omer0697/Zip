import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const PRICE_LIST = [
    {
      id: 1,
      measeurement: '15x20',
      price: 2.35,
    },
    {
      id: 2,
      measeurement: '18x20',
      price: 2.59,
    },
    {
      id: 3,
      measeurement: '20x20',
      price: 2.76,
    },
    {
      id: 4,
      measeurement: '20x25',
      price: 3.01,
    },
    {
      id: 5,
      measeurement: '25x20',
      price: 3.17,
    },
    {
      id: 6,
      measeurement: '25x25',
      price: 3.49,
    },
    {
      id: 7,
      measeurement: '25x30',
      price: 3.80,
    },
    {
      id: 8,
      measeurement: '30x30',
      price: 4.34,
    },
    {
      id: 9,
      measeurement: '30x35',
      price: 4.72,
    },
    {
      id: 10,
      measeurement: '35x30',
      price: 4.88
    },
    {
      id: 11,
      measeurement: '35x40',
      price: 5.36,
    },
    {
      id: 12,
      measeurement: '35x40',
      price: 5.76,
    },
    {
      id: 13,
      measeurement: '35x45',
      price: 6.20,
    },
    {
      id: 14,
      measeurement: '40x35',
      price: 6.38,
    },
    {
      id: 15,
      measeurement: '40x45',
      price: 6.93,
    },
    {
      id: 16,
      measeurement: '40x50',
      price: 7.43,
    },
    {
      id: 17,
      measeurement: '45x50',
      price: 8.22,
    },
    {
      id: 18,
      measeurement: '50x50',
      price: 9.01,
    },
    {
      id: 19,
      measeurement: '50x55',
      price: 9.64,
    },
    {
      id: 20,
      measeurement: '50x53',
      price: 10,
    },
    {
      id: 21,
      measeurement: '50x60',
      price: 11,
    },
    {
      id: 22,
      measeurement: '50x65',
      price: 12,
    },
    {
      id: 23,
      measeurement: '50x70',
      price: 15,
    },
    {
      id: 24,
      measeurement: '60x80',
      price: 22,
    },
    {
      id: 25,
      measeurement: '70x70',
      price: 34,
    },
    {
      id: 26,
      measeurement: '90x80',
      price: 35,
    },
    {
      id: 27,
      measeurement: '100x100',
      price: 40,
    },
    {
      id: 28,
      measeurement: '110x70',
      price: 45,
    },
    {
      id: 29,
      measeurement: '110x110',
      price: 55,
    }
  ];

const CustomTable = () => {
    return (
        <TableContainer className='pt-8' component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className='font-bold'>Размер</TableCell>
                        <TableCell className='font-bold' align="right">Цена</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {PRICE_LIST.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.measeurement}
                            </TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CustomTable
