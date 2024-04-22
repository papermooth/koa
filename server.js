// 1. 引入 koa
const Koa = require('koa')

// 2. 创建 koa 实例
const app = new Koa()

// 3. 创建一个中间件，所有的请求都会执行到这个中间件进行处理
//   Koa 提供一个 Context 对象，表示一次对话的上下文（包括 HTTP 请求和 HTTP 回复）。
//   通过加工这个对象，就可以控制返回给用户的内容。
app.use(async ctx => {
  // 为方便起见许多上下文的访问器和方法直接委托给它们的 ctx.request 或 ctx.response
  // 例如: ctx.body => ctx.response.body
    
  // 设置响应体  ctx.body = 'xxx'
  ctx.response.body = 'Hello,World'
})

// 4. 启动 koa 实例所关联的 http 服务器，并监听在 3000 端口上向外提供服务
app.listen(3000, () => {
  // http 服务器启动成功后执行本回调函数
  console.log('请访问 http://localhost:3000')
})
