import React, { Component } from 'react';
import { TodoHeader, TodoBody, TodoFooter } from './components';
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
		this.setState({
			filterType
		});
	}

	todoItemDelete = ( id ) => {
		const todoList = [ ...this.state.todoList ];
		const index    = todoList.findIndex( todo => {
			return todo.id === id;
		});
		todoList.splice(index, 1 );
		this.setState({
			todoList
		});
		localStorage.setItem('todoList', JSON.stringify(todoList));
	}

	toggleComplete = ( id ) => {
		const todoList = [ ...this.state.todoList ];
		const index    = todoList.findIndex( todo => {
			return todo.id === id;
		});
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
				id : this.state.todoList.length + 1,
				complete : false,
				created : new Date()
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
					filterType={this.state.filterType}
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
