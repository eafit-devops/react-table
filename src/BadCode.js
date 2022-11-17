import React from 'react'

export default function BadCode() {
	// TODO: confirm names for domain
	const testValues = {
		expected: 50,
		high: 70,
		low: 45,
	}

	const getProbability = (expected, high) => {
		return (expected + (5 * high)) / 6;
	};

	const getErrorRate = (high, low) => {
		return Math.sqrt(Math.pow((high-low), 2) / 36);
	};

	const getProbabilityAndErrorRate = (expected, high, low) => {
		const prob = getProbability(expected, high, low);
		const err = getErrorRate(high, low);
		return {prob, err}
	}

	const render = getProbabilityAndErrorRate(
		testValues.expected,
		testValues.high,
		testValues.low,
	);

	return (
		<div>
			<p>El esperado es {render.prob}</p>
			<p>El error es {render.err}</p>
		</div>
	)
}
