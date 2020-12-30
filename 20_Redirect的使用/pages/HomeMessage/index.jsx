import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import MessageDetail from '../MessageDetail'

export default class HomeMessage extends Component {
	state = {
		messageArr:[
			{id:'001',title:'消息001',content:'我爱你，中国'},
			{id:'002',title:'消息002',content:'我爱你，尚硅谷'},
			{id:'003',title:'消息003',content:'我爱你，未来的女朋友'}
		]
	}

	handlePush = (msgObj)=>{
		const {id,title,content} = msgObj
		return ()=>{
			this.props.history.push('/home/message/detail',{id,title,content})
		}
	}
	handleReplace = (msgObj)=>{
		const {id,title,content} = msgObj
		return ()=>{
			this.props.history.replace('/home/message/detail',{id,title,content})
		}
	}

	render() {
		return (
			<div>
				<ul>
					{
						this.state.messageArr.map((msgObj)=>{
							return (
								<li key={msgObj.id}>
									{/* 给路由组件传递location.state参数 */}
									<Link 
										to={{
											pathname:'/home/message/detail',
											state:{
												id:msgObj.id,
												title:msgObj.title,
												content:msgObj.content
											}
										}}
									>{msgObj.title}</Link>&nbsp;&nbsp;
									<button onClick={this.handlePush(msgObj)}>push查看详情</button>
									<button onClick={this.handleReplace(msgObj)}>replace查看详情</button>
								</li>
							)
						})
					}
				</ul>
				<hr/>
				{/* 注册路由 */}
				{/* location.state参数无需声明接收 */}
				<Route path="/home/message/detail" component={MessageDetail}/>
			</div>
		)
	}
}
