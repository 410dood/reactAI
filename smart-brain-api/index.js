const express = require("express");
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const dataBase = {
  users: [
    {
      id: '123',
      name: 'John',
      email: 'john@gmail.com',
      password: 'cookies',
      entries: 0,
      joined: new Date()
    },
    {
      id: '124',
      name: 'Sally',
      email: 'sally@gmail.com',
      password: 'bananas',
      entries: 0,
      joined: new Date()
    }
  ]
};

app.get('/', (req, res) => {
  res.json(dataBase.users);
});

app.get('/profile/:id', (req, res) => {
  const { id } = req.params;
  let found = false;
  dataBase.users.forEach(user => {
    if (user.id === id) {
      found = true;
      return res.json(user);
    }
  });
  if (!found) {
    res.status(404).json("No such user");
  }
});

app.post('/signin', (req, res) => {
  if (req.body.email === dataBase.users[0].email &&
    req.body.password === dataBase.users[0].password
  ) {
    res.json("success");
  } else {
    res.status(400).json("Error logging in");
  }
});

app.post('/image', (req, res) => {
  const { id } = req.body;
  let found = false;
  dataBase.users.forEach(user => {
    if (user.id === id) {
      found = true;
      user.entries++;
      return res.json(user.entries);
    }
  });
  if (!found) {
    res.status(404).json("No such user");
  }
});

app.post('/register', (req, res) => {
  const { email, name, password } = req.body;
  dataBase.users.push({
    id: '125',
    name:name,
    email: email,
    password: password,
    entries: 0,
    joined: new Date()
  });

  res.json(dataBase.users[dataBase.users.length - 1]);
});

app.listen(3000);
