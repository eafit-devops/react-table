import { render, screen } from '@testing-library/react';
import App, { getRandom, getSuma } from './App';

test('Se renderiza la App', () => {
  render(<App />);
  expect(screen).toBeDefined();
});

test('Se renderiza el título', () => {
  render(<App />);
  const linkElement = screen.getByText("Tabla de Postres");
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

test('Randomizador retorna un número',() => {
  const random = getRandom();
  expect(random).toBeGreaterThanOrEqual(0);
});

test('Randomizador retorna un aleatorio',() => {
  const random1 = getRandom();
  const random2 = getRandom();
  expect(random1 === random2).toBeFalsy();
});

test('Suma de dos numeros positivos',() => {
  const numero1 = 2;
  const numero2 = 5;
  const resultado = getSuma(numero1, numero2);
  const esperado = 7;
  expect(resultado).toBe(esperado);
});

test('Suma de dos numeros negativos',() => {
  const numero1 = -4;
  const numero2 = -10;
  const resultado = getSuma(numero1, numero2);
  const esperado = -14;
  expect(resultado).toBe(esperado);
});


