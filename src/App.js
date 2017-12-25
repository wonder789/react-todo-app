import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

	constructor(props){
		super(props);
		this.setState({
			todoList : []
		});
	}


	render() {
		return (
			<div className="TodoApp">
				<div className="TodoHeader">
					<h1>{this.props.appTitle}</h1>
				</div>
				<div className="TodoBody">
					<div className="TodoForm">
						<input type='text' />
						<button>저장</button>
					</div>
					<div className="TodoList">
						<ul>
							<li className="TodoItem">

							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
