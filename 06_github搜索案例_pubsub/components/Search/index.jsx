import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends Component {
	keyWordContainer = React.createRef()

	search = ()=>{
		//1.获取用户的输入
		const {value} = this.keyWordContainer.current
		//2.校验数据
		if(!value.trim()) return alert('输入不能为空')
		//通知List将：isFirst变为false、isLoading变为true
		PubSub.publish('updateListState',{isFirst:false,isLoading:true})
		//3.发送请求获取数据
		axios.get(`/search/users?q=${value}`).then(
			response => {
				const {items} = response.data
				//请求成功后，通知List：存储用户信息、将isLoading变为false
				PubSub.publish('updateListState',{users:items,isLoading:false})
			},
			error => {
				//注意：此处的error是一个对象，真正的错误信息在error.message
				//请求失败后，存储错误信息、将isLoading变为false
				PubSub.publish('updateListState',{isLoading:false,errorMsg:error.message})
			}
		)
	}

	render() {
		return (
			<section className="jumbotron">
				<h3 className="jumbotron-heading">github用户搜索</h3>
				<div>
					<input type="text" ref={this.keyWordContainer} placeholder="请输入搜索关键词"/>&nbsp;
					<button onClick={this.search}>搜索</button>
				</div>
			</section>
		)
	}
}
