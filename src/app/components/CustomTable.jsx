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
      price: 2.85,
    },
    {
      id: 2,
      measeurement: '18x20',
      price: 2.95,
    },
    {
      id: 3,
      measeurement: '20x20',
      price: 4,
    },
    {
      id: 4,
      measeurement: '20x25',
      price: 4.10,
    },
    {
      id: 5,
      measeurement: '25x20',
      price: 4.20,
    },
    {
      id: 6,
      measeurement: '25x25',
      price: 4.30,
    },
    {
      id: 7,
      measeurement: '25x30',
      price: 4.50,
    },
    {
      id: 8,
      measeurement: '30x30',
      price: 5,
    },
    {
      id: 9,
      measeurement: '30x35',
      price: 5.80,
    },
    {
      id: 10,
      measeurement: '35x30',
      price: 5.50
    },
    {
      id: 11,
      measeurement: '30x40',
      price: 6.50,
    },
    {
      id: 12,
      measeurement: '35x40',
      price: 7,
    },
    {
      id: 13,
      measeurement: '35x45',
      price:7.50,
    },
    {
      id: 14,
      measeurement: '40x35',
      price: 7,
    },
    {
      id: 15,
      measeurement: '40x45',
      price: 8.50,
    },
    {
      id: 16,
      measeurement: '40x50',
      price: 9.50,
    },
    {
      id: 17,
      measeurement: '45x50',
      price: 11,
    },
    {
      id: 18,
      measeurement: '50x50',
      price: 13,
    },
    {
      id: 19,
      measeurement: '50x55',
      price: 14,
    },
    {
      id: 20,
      measeurement: '50x53',
      price: 14
    },
    {
      id: 21,
      measeurement: '50x60',
      price: 15
    },
    {
      id: 22,
      measeurement: '50x65',
      price: 15
    },
    {
      id: 23,
      measeurement: '50x70',
      price: 17
    },
    {
      id: 24,
      measeurement: '60x80',
      price: 25
    },
    {
      id: 25,
      measeurement: '70x70',
      price: 40
    },
    {
      id: 26,
      measeurement: '90x80',
      price: 45
    },
    {
      id: 27,
      measeurement: '100x100',
      price: 50
    },
    {
      id: 28,
      measeurement: '110x70',
      price: 55
    },
    {
      id: 29,
      measeurement: '110x110',
      price: 60
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
