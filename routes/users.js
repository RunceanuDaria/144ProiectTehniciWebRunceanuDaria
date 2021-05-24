var express = require('express');
var router = express.Router();
const fs = require('fs');


router.post('/login', function(req, res, next) {
  const user = {
    "nume": req.body.nume,
    "parola": req.body.parola,
    "email": req.body.email
};

fs.readFile('user.json', 'utf-8', (err, data) => {
  if (err) {
      throw err;
  }

  // parse JSON object
  let users = JSON.parse(data.toString());
  console.log(users);
  console.log(user);
  

  let success = (users.map(x =>  x.nume == user.nume && x.email == user.email && x.parola == user.parola).filter(x=>x == true)).length  == 1 ;
  
  if(success){
    sess = req.session;
    sess.login = true;
  }
  return res.redirect('/');

});

});

router.get('/isLoggin', function(req,res,next) {
  let sol = false;
  let sess = req.session;
  sol = sess.login == true;

   res.send({"status" : sol});
});

router.get('/logout', function(req,res,next) {
  if(req.session.login == true){
    req.session.login = false;
  }

   res.send({"status" : sol});
});

router.post('/register', function(req, res, next) {

  const user = {
    "nume": req.body.nume,
    "parola": req.body.parola,
    "email": req.body.email
};

// read JSON object from file
fs.readFile('user.json', 'utf-8', (err, data) => {
  if (err) {
      throw err;
  }

  // parse JSON object
  let users = JSON.parse(data.toString());
  users.push(user);

  // convert JSON object to string
  const data_write = JSON.stringify(users);

  // write JSON string to a file
fs.writeFile('user.json', data_write, (err) => {
  if (err) {
      throw err;
  }
  console.log("JSON data is saved.");
});

  console.log(req.body.id)
  res.send({'success':users});
}); 
});

module.exports = router;

 
 
