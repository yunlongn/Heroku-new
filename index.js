const express = require("express");
const multer = require("multer");
const cors = require('cors');
var options = {
        target: 'http://localhost:8088', // 目标主机
        changeOrigin: true,               // 需要虚拟主机站点
    };
var exampleProxy = proxy(options);  //开启代理功能，并加载配置
app.use('/', exampleProxy);//对地址为’/‘的请求全部转发


const port = process.env.PORT || 3000;
app.listen(port);
