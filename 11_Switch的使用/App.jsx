import React, { Component } from 'react'
import {NavLink,Route,Switch} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Test from './pages/Test'
import Header from './components/Header'

export default class App extends Component {
	render() {
		return (
			<div>
				{/* 一般组件——Header */}
				<Header/>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">
							{/* react中使用Link标签实现【组件】的【切换】------编写路由导航 */}
							<NavLink className="list-group-item" activeClassName="navigation" to="/about">About</NavLink>
							<NavLink className="list-group-item" activeClassName="navigation" to="/home">Home</NavLink> 

						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 展示区要根据路径去决定展示哪个组件----注册路由 */}
								<Switch>
									<Route path="/about" component={About}/>
									<Route path="/home" component={Home}/>
									<Route path="/about" component={Test}/>
								</Switch>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
