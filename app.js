const express = require('express');
const path = require('path');
const session = require('express-session');

const app = express();



// Serve static files like CSS
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Sample user data
const userProfile = {
  name: "John Doe",
  contact: "+255 712 345 678",
  email: "onethcorporation@example.com",
  country: "Tanzania",
  region: "Dar es Salaam",
  dob: "1995-06-10",
  gender: "male",
  age: 29,
  job: "Land Consultant",
  documents: ["Voters ID", "NIDA (National ID)", "License", "Any Valid ID"]
};

//Middleware for session management
app.use(session({
  secret: 'foreverGOD',
  resave: false,
  saveUninitialized: true,
}));

// Home route
app.get('/', (req, res) => {
  const user = req.session.user || { name: "Guest", profilePicUrl:"/uploads/default.jpg" };
  res.render('index', { user });
});

app.get('/login', (req, res) => {
  req.session.user = { name: "John Doe", profilePicUrl:"/upload/john-doe.jpg" };

  res.redirect('/');
});

app.get('/dashboard/profile', (req, res) => {
  res.render('profile', { user: userProfile });
});

app.post('/profile', (req, res) => {
  res.send('Profile submitted!');
});

const PORT =5000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});

