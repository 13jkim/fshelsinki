import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ text, onClick }) => (
	<button onClick={onClick}>{text}</button>
)

const Statistics = ({props}) => {
	console.log(props)
	return (
		<div>
			<Statistic text='good' value={props.good} />
			<Statistic text='neutral' value={props.neutral} />
			<Statistic text='bad' value={props.bad} />
			<Statistic text='all' value={props.total} />
			<Statistic text='average' value={props.avg.toFixed(1)} />
			<Statistic text='positive' value={props.positive.toFixed(1) + ' %'} />
		</div>
	)
}

const Statistic = ({text, value}) => {
	return (
		<p>{text} {value}</p>
	)
}

const App = () => {
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)
	const total = good + neutral + bad
	const avg = total / 3
	const positive = total === 0 ? 0 : good / total * 100 

	const myProps = {
		good: good,
		neutral: neutral,
		bad: bad,
		total: total,
		avg: avg,
		positive: positive
	}

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
			<Statistics props={myProps}/>
		</div>
	)
}
ReactDOM.render(<App />, document.getElementById('root'));

