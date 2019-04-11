const express = require("express");
const multer = require("multer");
const cors = require('cors');
// 这里定义图片储存的路径，是以当前文件为基本目录
const upload = multer({ dest: "uploads/" });
const app = express();

app.use(cors());

app.options('/upload');
/* 
  upload.single('avatar') 接受以avatar命名的文件，也就是input中的name属性的值
  avatar这个文件的信息可以冲req.file中获取
*/
app.post("/upload", upload.single("avatar"), (req, res) => {
  res.json({name: req.file.filename });
});

app.get("/preview/:name", (req, res) => {
  res.sendFile(`uploads/${req.params.name}`, {
    root: __dirname,
    headers:{
      'Content-Type': 'image/jpeg',
    },
  }, (error)=>{
    if(error){
      res.status(404).send('Not found')
    }
  });
});

const port = process.env.PORT || 3000;
app.listen(port);
