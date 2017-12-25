import React, { Component } from 'react';
import { TodoHeader, TodoForm, TodoBody, TodoFooter } from './components';
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
			todoInput : '',
			filterType : 'all',
			filterGroup : [
				{
					type : 'all',
					name : '전체'
				},
				{
					type : 'complete',
					name : '완료'
				},
				{
					type : 'uncomplete',
					name : '미완료'
				}
			]
		};

	}

	todoFilter = ( filterType ) => {
		let originalList = JSON.parse(localStorage.getItem('todoList'));
		let todoList     = null;

		if ( filterType === 'all' ){
			todoList = originalList;
		} else {
			todoList = originalList.filter( todo => {
				return filterType === 'complete' ? todo.complete : !todo.complete;
			});
		}

		this.setState({
			filterType,
			todoList
		});
	}

	todoItemDelete = ( event, index ) => {
		const todoList = [ ...this.state.todoList ];
		todoList.splice(index, 1 );
		this.setState({
			todoList
		});
		localStorage.setItem('todoList', JSON.stringify(todoList));
	}

	toggleComplete = ( index ) => {
		const todoList = [ ...this.state.todoList ];
		const todoItem = todoList[index]
		todoList[index] = Object.assign( {}, todoItem, {
			complete : !todoItem.complete
		});

		this.setState({
			todoList
		});

		localStorage.setItem('todoList', JSON.stringify(todoList));
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
				id : new Date().toString(),
				complete : false
			}),
			todoInput : ''
		});

		localStorage.setItem('todoList', JSON.stringify(this.state.todoList));
	}


	render() {
		return (
			<div className="TodoApp">
				<TodoHeader
				 	title={ this.props.title }
				/>
				<TodoBody
					todoInput={this.state.todoInput}
					todoInputChange={this.todoInputChange}
					todoSave={this.todoSave}
					todoList={this.state.todoList}
					todoItemDelete={this.todoItemDelete}
					toggleComplete={this.toggleComplete}
				/>
				<TodoFooter
					todoList={this.state.todoList}
					todoFilter={this.todoFilter}
					filterType={this.state.filterType}
					filterGroup={this.state.filterGroup}
				/>
			</div>
		);
	}
}

export default App;
