import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
	keyWordContainer = React.createRef()

	search = ()=>{
		//1.获取用户的输入
		const {value} = this.keyWordContainer.current
		//2.校验数据
		if(!value.trim()) return alert('输入不能为空')
		//3.发送请求获取数据
		axios.get(`https://api.github.com/search/users?q=${value}`).then(
			response => {console.log('成功了',response.data.items)},
			error => {console.log('失败了',error)}
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
