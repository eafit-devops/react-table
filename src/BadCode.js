import React from 'react'

export default function BadCode() {
 const function calcularCosito(x, y, z) {
	// Toma el medio y lo multiplica para uqe retorne 4 veces su valor
	var i=4*y;
	// Suma el medio con los extremos alto y bajo para tener la suma de todos los valores a sumar
	var j= x+i+y;
	//Dividir entre 6
	var k = j/6
	return k;
	};

	const error = (X,Y) =>{
					return Math.sqrt(Math.pow((X-B), 2)/36);
	};

	const analProb = (esperado, alto, bajo) => {
		const prob = calcularCosito(alto, esperado, bajo);
		const errorARetornarEnLaFuncion= error(alto, bajo);
		return {prob, e}
	}

	const render = analProb(50, 70, 45);
	return (
		<div>
			<p>El esperado es {render.prob}</p>
			<p>El error es {render.e}</p>
		</div>
	)
}
