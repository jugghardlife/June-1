const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Kid = require('./models/kid');
const Dog = require('./models/dog');
const User = require('./models/user');
const bodyParser = require('body-parser');
const cors = require("cors");
const multer = require('multer');
const path = require('path');
const jwt = require('jsonwebtoken');
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

//kid api

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

app.get('/kids/:id',function(req,res){
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

//dog api

app.post('/dogs/newdog',upload.single('picture'),function(req,res){
  console.log(req.body)
  let dogObj = req.body;
  let kidId = req.body.kid;
  console.log(kidId);
  console.log(dogObj);
  Kid.findById(kidId, function (err, kid) {
    if (err) return res.status(400).json({msg: '分类获取失败',err});
    if (!kid) {
      res.status(400).json({
        msg: '分类不存在'
      })
    }else {
      var dog = new Dog(dogObj);
      if(req.file && req.file.filename) {
        dog.picture = req.file.filename;
      }
      console.log(dog)
      dog.save(function (err, newdog) {
        if (err) return res.status(500).json({msg: '新增商品失败', err});
        kid.dogs.push(newdog._id);
        kid.save(function (err) {
        if (err) return res.status(500).json({msg: '分类添加商品失败',err});
        res.json({
          message: '新增商品成功',
          dog: newdog
        })
      })
    })
    }
  })
})

app.get('/dogs/:id',function(req,res){
  console.log(req.params.id)
  Dog.findById(req.params.id,function(err,dog){
    if(err) return console.log(err);
    res.json({dog})
  })
})

//user api

let generateToken = function(user) {
  return jwt.sign(user,'kid', {
    expiresIn: 86400
  });
}

app.post('/signup',function(req,res){
  console.log(req.body)
  let user = new User();
  user.email = req.body.email;
  user.password = req.body.password;
  user.admin = req.body.admin
  console.log(user)
  user.save(function(err) {
    if(err) { return console.log(err); }
    return res.json({
      token: generateToken({_id: user._id, email: user.email}),
    })
  })
})

app.post('/login',function(req,res){
  console.log(req.body),
  User.findOne({ email: req.body.email }, function(err, user) {
    if(err) { return console.log(err); }
    if(!user) { return res.status(403).json({error: '用户不存在！'}) }
    user.comparePassword(req.body.password, function(err, isMatch) {
      if(err) { return console.log(err); }
      if (!isMatch) { return res.status(403).json({error: "密码无效！" }); }
      if(user.admin === true) {
        return res.json({
          token: generateToken({_id: user._id, email: user.email, admin: user.admin})
        });
      } else {
        return res.json({
          token: generateToken({_id: user._id, email: user.email}),
        });
      }
    });
  });
})

app.get('/user/:id',function (req, res) {
  console.log(req.params.id)
  User.findOne({_id: req.params.id},function (err,user) {
    if (err) return res.status(500).json({msg: '查找用户失败',err});
    if (user) {
      return res.json({msg: '读取用户成功', user:user.email})
    }
  })
})


app.listen(4000,function () {
  console.log('running on port 4000...')
})
