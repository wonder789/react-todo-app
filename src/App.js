import React, { Component } from 'react';
import { TodoHeader, TodoForm } from './components';
import { TodoList } from './containers';
import logo from './logo.svg';
import './App.css';

class App extends Component {

	constructor(props){
		super(props);

		let todoList = [];

		if ( localStorage.getItem('todoList') ){
			todoList = JSON.parse(localStorage.getItem('todoList'));
		}
		this.state = {
			todoList,
			todoKind : 'all',
			todoInput : ''
		};

	}

	todoInputChange = ( event ) => {
		this.setState({
			todoInput : event.target.value
		});
	}

	todoSave = ( event ) => {
		this.setState({
			todoList : this.state.todoList.concat({
				content : this.state.todoInput,
				id : new Date().toString()
			}),
			todoInput : ''
		});

		localStorage.setItem('todoList', JSON.stringify(this.state.todoList));
	}


	render() {
		return (
			<div className="TodoApp">
				<TodoHeader title={ this.props.title }/>
				<div className="TodoBody">
					<TodoForm
						todoInput={this.state.todoInput}
						todoInputChange={this.todoInputChange}
						todoSave={this.todoSave}
					/>
					<div>
						<TodoList
							todoList={this.state.todoList}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
