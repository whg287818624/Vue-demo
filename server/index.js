// 运行主文件
/*
这是启动文件，也是设置跨域、端口的文件。一般来说项目运行端口号为8080，服务端口为3000，所以会造成跨域的问题。这里我们设置跨域的域名为*，即表示允许任意域名跨域（代码里已注释），跨域允许的请求方式为put、get、post等。端口默认为3000，如果被占用的话，改为其他不被占用的端口就行。
*/
// node 后端服务器
const Api = require('./api/api');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
// 采用设置所有均可访问的方法解决跨域问题
app.all('*', function(req, res, next) {
  // 设置允许跨域的域名，*代表允许任意域名跨域
  res.header('Access-Control-Allow-Origin', '*');
  // 允许的header类型
  res.header('Access-Control-Allow-Headers', 'content-type');
  // 跨域允许的请求方式
  res.header('Access-Control-Allow-Methods', 'DELETE,PUT,POST,GET,OPTIONS');
  if (req.method.toLowerCase() === 'options') {
    res.send(200); // 让options尝试请求快速结束
  } else {
    next();
  }
});
app.use(bodyParser.json()); // 以json格式返回出去
app.use(bodyParser.urlencoded({ extended: false }));
// 后端api路由

app.use('/api', Api);
// 监听端口
app.listen(3000);
//运行服务: node index.js
console.log('success listen at port:3000......');
// 接口:
app.get("/",(req,res)=>{
	res.send("主页");
});
