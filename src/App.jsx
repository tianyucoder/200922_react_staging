import React, { Component } from 'react'
import Add from './components/Add'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
	render() {
		return (
			<div className="todo-container">
				<div className="todo-wrap">
					<Add/>
					<List/>
					<Footer/>
				</div>
			</div>
		)
	}
}
