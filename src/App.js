import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Titulo from './Titulo';

// Seccion de postres

/**
 * Crea un nuevo postre
 * @param {*} name 
 * @param {*} calories 
 * @param {*} fat 
 * @param {*} carbs 
 * @param {*} protein 
 * @returns 
 */
function crdt(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


// Seccion de numeros
export const getRandom = () => Math.random() * 100;
export const getSuma = (a, b) => a+b;
export const modulo = (num, base) => num % base;

/**
 * 
 * @returns {integer} 
 */
export const rdm1a20 = () => Math.ceil(Math.random() * 20);

// Seccion de postres

/**
 * Lista de postres
 */
const r = [
  crdt('Chocolatina Hersheys', 180, 17.0, 40, 2.5),
  crdt('Frozen yoghurt', 159, 6.0, 24, 4.0),
  crdt('Ice cream sandwich', 237, 9.0, 37, 4.3),
  crdt('Eclair', 262, 16.0, 24, 6.0),
  crdt('Cupcake', 305, 3.7, 67, 4.3),
  crdt('Gingerbread', 356, 16.0, 49, 3.9),
  crdt('Torta', 200, 16.0, 49, 3.9),
  crdt('Brazo de Reina', 400, 16.0, 49, 3.9),
  crdt('Brownie', 123, 16.0, 49, 3.9),
  crdt('Merengon', 400, 20.0, 100, 0.1),
  crdt('Tiramisu', 518, 18.0, 50, 4.5),
  crdt('Basbousa', 123, 16.0, 49, 3.9),
  crdt('IslasFlotantes', 150, 15.0, 50, 3.9),
  crdt('Manjar Blanco', 160, 16.0, 70, 5.6),
  crdt('Cakepop', 10, 16.0, 10, 5.6),
  crdt('Salami', 10, 16.0, 10, 5.6),
  crdt('Arequipe', 120, 15.7, 23, 8.2),
];

export default function BasicTable() {
  return (
    <>
      <Titulo/>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {r.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
