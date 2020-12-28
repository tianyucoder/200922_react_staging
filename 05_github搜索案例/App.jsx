import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {

	state = {
		users:[],//存储用户信息
		isFirst:true, //是否为初始展示
		isLoading:false, //标识是否为加载中
		errorMsg:''//存储错误信息
	}

	updateAppState = (obj)=>{
		this.setState(obj)
	}

/* 	saveUsers = (userArr)=>{
		this.setState({users:userArr})
	}

	saveisFirst = (userArr)=>{
		this.setState({users:userArr})
	}

	saveisLoading = (userArr)=>{
		this.setState({users:userArr})
	}

	saveisError = (userArr)=>{
		this.setState({users:userArr})
	} */

	render() {
		return (
			<div className="container">
				<Search updateAppState={this.updateAppState}/>
				<List {...this.state}/>
			</div>
		)
	}
}
