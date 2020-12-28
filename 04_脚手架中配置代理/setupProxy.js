const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy(
			'/api1', //只有/api开头的请求，才转发给后端服务器
			{
				target: 'http://localhost:5000', //转发给谁
				changeOrigin: true, //控制服务器接收到的请求头中host字段的值
				pathRewrite: {'^/api1': ''} //重写路径(目的是：干掉前缀)
			}
		),
    proxy(
			'/api2', //只有/api开头的请求，才转发给后端服务器
			{
				target: 'http://localhost:5001', //转发给谁
				changeOrigin: true, //控制服务器接收到的请求头中host字段的值
				pathRewrite: {'^/api2': ''} //重写路径(目的是：干掉前缀)
			}
		)
  );
};