import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Header = ({name}) => {
	return (
		<h1>{name}</h1>
	)
}

const Content = ({parts}) => {
	return parts.map(part => (
		<Part key={part.name} name={part.name} exercises={part.exercises} />
	))
}

const Part = ({name, exercises}) => {
	return (
		<div>{name} {exercises}</div>
	)
}

const Total = ({parts}) => (
	<p>Number of exercises {parts.map(pa => pa.exercises).reduce((p,n) => p+n)}</p>
)

const History = (props) => {
	if (props.allClicks.length === 0) {
		return (
			<div>
				the app is used by pressing the buttons
			</div>
		)
	}

	return (
		<div>
		button press history: {props.allClicks.join(' ')}
		</div>
	)
}

const Button = (props) => { 
	console.log(props)
	const { onClick, text } = props
	return (
		<button onClick={onClick}>
			{text}
		</button>
	)
}

const App = () => { 
	const course = {
		name: 'Half Stack application development',
		parts: [
			{
				name: 'Fundamentals of React',
				exercises: 10
			},
			{
				name: 'Using props to pass data',
				exercises: 7
			},
			{
				name: 'State of a component',
				exercises: 14
			}
		]
	}
	const [left, setLeft] =useState(0);
	const [right, setRight] = useState(0);
	const [allClicks, setAll] = useState([])

	const handleLeftClick = () => {
		setAll(allClicks.concat('L'))
		setLeft(left + 1)
	}

	const handleRightClick = () => {
		setAll(allClicks.concat('R'))
		setRight(right + 1)
	}

	const hello = (who) => () => {
		console.log('hello', who)
	}
	return (
		<div>
			<Header name={course.name} />
			<Content parts={course.parts} />
			<Total parts={course.parts} />
			{left}
			<Button onClick={handleLeftClick} text='left' />
			<Button onClick={handleRightClick} text='right' />
			{right}
			<History allClicks={allClicks} />
			<button onClick={hello('world')}>hello</button>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));
