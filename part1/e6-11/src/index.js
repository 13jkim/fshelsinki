import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ text, onClick }) => (
	<button onClick={onClick}>{text}</button>
)

const App = () => {
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	const handleClickGood = (val) => () => {
		setGood(val)
	}

	const incrementNeutral = () => () => {
		setNeutral(neutral + 1)
	}

	const incrementBad = () => () => {
		setBad(bad + 1)
	}

	return (
		<div>
			<h1>give feedback</h1>
			<Button onClick={handleClickGood(good + 1)} text='good' />
			<Button onClick={incrementNeutral()} text='neutral' />
			<Button onClick={incrementBad()} text='bad' />
			<h1> statistics</h1>
			<p>good {good}</p>
			<p>neutral {neutral}</p>
			<p>bad {bad}</p>
		</div>
	)
}
ReactDOM.render(<App />, document.getElementById('root'));

