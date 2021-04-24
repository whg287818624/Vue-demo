// const models = require('../db');
const express = require('express');
const router = express.Router();
const Ftp = require('jsftp');
const multer = require('multer');
// const mysql = require('mysql');
// 连接数据库
// const conn = mysql.createConnection(models.mysql);
// conn.connect();
const upload = multer({dest:'./upload'});

// const ftp = new Ftp({
//   host: "192.168.0.32",
//   port: 8704, // defaults to 21
//   user: "ftp", // defaults to "anonymous"
//   pass: "Welcome@1234~" // defaults to "@anonymous"
// });
// 接口：
router.get('/link', (req, res) => {
  res.send('连接成功');
});

router.post('/upload',upload.single('file'),(req,res)=>{
    res.send('上传成功');
    // res.send(req.files.upload.name);
	// ftp.put(buffer, "./upload/274b7e0a968f9558c32640c3988ac498", err => {
	//   if (!err) {
	// 	res.send('File transferred successfully!');
	//   }else{
	// 	res.send(err);
	//   }
	// });
})
module.exports = router;