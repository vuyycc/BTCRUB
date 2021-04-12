const express = require('express')
const app = express()
const cors = require('cors');
const PORT = 8797
const mongoose = require('mongoose');
const User = require('./model/user')
const Student = require('./model/student')
const Class = require('./model/class');
const School = require('./model/school')
const Suject = require('./model/suject')

const { findByIdAndUpdate } = require('./model/user');

app.use(express.json())
app.use(cors());
app.use(express.urlencoded({ extended: true }))

//Thiet lap mot ket noi mongoose mac dinh
var mongoDB = 'mongodb://localhost:27017/projectmongo';
mongoose.connect(mongoDB, function (err) {
  if (err) throw err;
  console.log('Successfully connected');
});
//Ep mongoose su dung thu vien promise toan cuc
mongoose.Promise = global.Promise;
//Lay ket noi mac dinh
var db = mongoose.connection;
//Rang buoc ket noi voi su kien loi (de lay ra thong bao khi co loi)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.listen(PORT, () => { console.log("Server started on http://localhost:" + PORT) })
module.exports = app;


//

app.post('/newUser', (req, res) => {
  let user = new User(req.body)
  user.save((err) => {
    if (err) throw err;
    console.log('user save successfully')
  })

  res.json({ "mess": user })
})


app.put('/updateUser', async (req, res) => {
  const id = { _id: req.body._id }
  const update = req.body;
  User.findByIdAndUpdate(id, update, { new: true }, function (err, result) {
    if (err) return res.send(err)
    res.json(result)
  });
})

app.delete('/deleteUser/:id', (req, res) => {
  const id = { _id: req.params.id }
  User.findByIdAndDelete(id, function (err, docs) {
    if (err) {
      console.log(err)
    }
    else {
      res.json({ mess: "Sucessesful delete id:" + req.params.id })
    }
  })
})

app.get('/', (req, res) => {

  User.find({}, function (err, user) {
    res.json(user);

  })
})

//Đến đây thôii
app.get('/getUser/:id', (req, res) => {
  const id = { _id: req.params.id }
  User.findById(id, function (err, result) {
    if (err) {
      console.log(err)
    }
    else {
      res.json(result)
    }
  })
})

//student
app.get('/getStudent/:id', (req, res) => {
  const id = { _id: req.params.id }
  Student.findById(id, function (err, result) {
    if (err) {
      console.log(err)
    }
    else {
      res.json(result)
    }
  })
})

app.post('/newStudent', (req, res) => {
  let student = new Student(req.body)
  student.save((err) => {
    if (err) throw err;
    console.log('student saved successfully')
  })

  res.json({ mess: student })
})

app.put('/updateStudent', (req, res) => {
  const id = { _id: req.body._id }
  const update = req.body;
  Student.findByIdAndUpdate(id, update, { new: true }, function (err, result) {
    if (err) return res.send(err)
    res.json(result)
  })
})

app.delete('/deleteStudent/:id', (req, res) => {
  const id = { _id: req.params.id }
  Student.findByIdAndDelete(id, function (err, docs) {
    if (err) {
      console.log(err)
    }
    else {
      res.json({ mess: "Successfull delete id: " + req.params.id })
    }
  })
})
//class
app.post('/newClass', (req, res) => {
  let classStudent = new Class(req.body)
  classStudent.save((err) => {
    if (err) throw err;
    console.log('class save successfully')
  })

  res.json({ "mess": classStudent })
})

app.put('/updateClass', async (req, res) => {
  const id = { _id: req.body._id }
  const update = req.body;
  Class.findByIdAndUpdate(id, update, { new: true }, function (err, result) {
    if (err) return res.send(err)
    res.json(result)
  });
})

app.delete('/deleteClass/:id', (req, res) => {
  const id = { _id: req.params.id }
  Class.findByIdAndDelete(id, function (err, docs) {
    if (err) {
      console.log(err)
    }
    else {
      res.json({ mess: "Successfull delete id:" + req.params.id })
    }
  })
})


app.get('/getClass/:id', (req, res) => {
  const id = { _id: req.params.id }
  Class.findById(id, function (err, result) {
    if (err) {
      console.log(err)
    }
    else {
      res.json(result)
    }
  })
})
//school
app.post('/newSchool', (req, res) => {
  let school = new School(req.body)
  school.save((err) => {
    if (err) throw err;
    console.log('school save successfully')
  })

  res.json({ "mess": school })
})

app.put('/updateSchool', async (req, res) => {
  const id = { _id: req.body._id }
  const update = req.body;
  School.findByIdAndUpdate(id, update, { new: true }, function (err, result) {
    if (err) return res.send(err)
    res.json(result)
  });
})

app.delete('/deleteSchool/:id', (req, res) => {
  const id = { _id: req.params.id }
  School.findByIdAndDelete(id, function (err, docs) {
    if (err) {
      console.log(err)
    }
    else {
      res.json({ mess: "Successfull delete id:" + req.params.id })
    }
  })
})


app.get('/getSchool/:id', (req, res) => {
  const id = { _id: req.params.id }
  School.findById(id, function (err, result) {
    if (err) {
      console.log(err)
    }
    else {
      res.json(result)
    }
  })
})

//suject
app.post('/newSuject', (req, res) => {
  let suject = new Suject(req.body)
  suject.save((err) => {
    if (err) throw err;
    console.log('suject save successfully')
  })

  res.json({ "mess": suject })
})

app.put('/updateSuject', async (req, res) => {
  const id = { _id: req.body._id }
  const update = req.body;
  School.findByIdAndUpdate(id, update, { new: true }, function (err, result) {
    if (err) return res.send(err)
    res.json(result)
  });
})

app.delete('/deleteSuject/:id', (req, res) => {
  const id = { _id: req.params.id }
  School.findByIdAndDelete(id, function (err, docs) {
    if (err) {
      console.log(err)
    }
    else {
      res.json({ mess: "Successfull delete id:" + req.params.id })
    }
  })
})


app.get('/getSuject/:id', (req, res) => {
  const id = { _id: req.params.id }
  School.findById(id, function (err, result) {
    if (err) {
      console.log(err)
    }
    else {
      res.json(result)
    }
  })
})


