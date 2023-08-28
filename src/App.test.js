import { render, screen } from '@testing-library/react';
import App, { getRandom, getSuma, modulo } from './App';

test('Se renderiza la App', () => {
  render(<App />);
  expect(screen).toBeDefined();
});

test('Se renderiza el título', () => {
  render(<App />);
  const linkElement = screen.getByText("Tabla de postres");
  expect(linkElement).toBeInTheDocument();
});

test('El título tiene ID', () => {
  render(<App />);
  // eslint-disable-next-line testing-library/no-node-access
  const linkElement = document.querySelector("#titulo-tabla");
  expect(linkElement).toBeInTheDocument();
});

test('El título tiene TestID', () => {
  render(<App />);
  const linkElement = screen.getByTestId("h1-titulo-tabla");
  expect(linkElement).toBeInTheDocument();
});

test('Un postre es el Arequipe',() => {
  render(<App/>);
  const linkElement = screen.getAllByText("Arequipe");
  expect(linkElement).toBeDefined();
});

// Matemáticas

test('Randomizador retorna un número',() => {
  const random = getRandom();
  expect(random).toBeGreaterThanOrEqual(0);
});

test('Randomizador retorna un aleatorio',() => {
  const random1 = getRandom();
  const random2 = getRandom();
  expect(random1 === random2).toBeFalsy();
});

test('Se suman 2 numeros positivos',() => {
  const numero1 = 1;
  const numero2 = 1;
  expect((numero1+numero2) === getSuma(numero1,numero2)).toBeTruthy();
});

test('Se suman 2 numeros negativos',() => {
  const numero1 = -1;
  const numero2 = -1;
  expect((numero1+numero2) === getSuma(numero1,numero2)).toBeTruthy();
});

test('Se suman un numero negativo y un numero positivo',() => {
  const numero1 = 1;
  const numero2 = -1;
  expect((numero1+numero2) === getSuma(numero1,numero2)).toBeTruthy();
});

test('Se suman 2 numeros ceros',() => {
  const numero1 = 0;
  const numero2 = 0;
  expect((numero1+numero2) === getSuma(numero1,numero2)).toBeTruthy();
});


test('3 en módulo 2 es 1', ()=>{
  const numero = 3;
  const base = 2;
  expect(modulo(numero,base) === 1).toBeTruthy();
});

test('2 en módulo 2 es 0', ()=>{
  const numero = 2;
  const base = 2;
  expect(modulo(numero,base) === 0).toBeTruthy();
});

test('1 en módulo 2 es 1', ()=>{
  const numero = 1;
  const base = 2;
  expect(modulo(numero,base) === 1).toBeTruthy();
});

test('5 en módulo 2 es 1', ()=>{
  const numero = 5;
  const base = 2;
  expect(modulo(numero,base) === 1).toBeTruthy();
});

test('6 en módulo 2 es 0', ()=>{
  const numero = 6;
  const base = 2;
  expect(modulo(numero,base) === 0).toBeTruthy();
});

// Unit Test para numeros aleatorios del 1 al 20