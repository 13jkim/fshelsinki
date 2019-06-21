import React from 'react';
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

	return (
		<div>
			<Header name={course.name} />
			<Content parts={course.parts} />
			<Total parts={course.parts} />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));
