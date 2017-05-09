const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Kid = require('./models/kid');
const bodyParser = require('body-parser');
const cors = require("cors");
const multer = require('multer');
const path = require('path');
const upload = multer({dest: './public'});


app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/June-1');

var db = mongoose.connection;
db.on('error',console.log);
db.once('open', function() {
  console.log('success!')
});

app.get('/', function(req, res){
  Kid.find().exec(function(err, kids){
    res.json({kids});
  });
});

app.post('/kids',upload.single('picture'),function(req,res){
  console.log(req.body);
  let kid = new Kid(req.body);
  if(req.file && req.file.filename) {
    kid.picture = req.file.filename;
  }
  kid.save();
  console.log('kid saved!');
  res.json({
    message: 'Kid创建成功了！'
  });
})

app.post('/kids/:id',function(req,res){
  Kid.findById(req.params.id,function(err,kid){
    if(err) return console.log(err);
    res.json({kid})
  })
})

app.post('/kids/update/:id',function(req,res){
  Kid.findOneAndUpdate({_id:req.params.id},req.body,function(err){
    if(err) res.status(500).json({error:'更新失败'})
    res.send('update success')
  })
})

app.post('/kids/remove/:id',function(req,res){
  Kid.findById({_id:req.params.id},function(err,kid){
    kid.remove(function(err){
      res.json({ message: 'kid已经删除了！' });
    })
  })
})

app.listen(4000,function () {
  console.log('running on port 4000...')
})
