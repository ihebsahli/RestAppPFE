const express = require('express');
const app = express();
const http = require('http');
const platRouter = require('./src/routes/plat');
const ingredientRouter = require('./src/routes/ingredient')
const recompencesRouter = require('./src/routes/recompence')
const tablesRouter = require('./src/routes/tables')

const cors = require('cors');

// Import the database connection function from db.js
const database = require('./config/db');
const bodyParser = require('body-parser');

const server = http.createServer(app);

// Call the database function to establish the connection
database();


// function isAuthenticated(req, res, next) {
//   if (req.user && req.isAuthenticated()) {
//     return next();
//   }

//   return res.json({ success: false });
// }

// router.get('/get-session', (req, res) => {
//   if (req.user && req.isAuthenticated()) {
//     return res.json({ success: true, userInfo: req.user });
//   }

//   return res.json({ success: false });
// });
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static("public"));
app.use("/ingredient", express.static("uploads/Ingredients"));
app.use("/plat", express.static("uploads/Menus"));

app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.send('API Running'));
app.use('/plats', platRouter);
app.use('/tables', tablesRouter);
app.use('/ingredients' , ingredientRouter);
app.use('/recompences' , recompencesRouter);
app.use('/users', require('./src/routes/users'));
app.use('/auth', require('./src/routes/auth'));
app.use('/panier', require('./src/routes/panier'));
app.use('/reservation', require('./src/routes/reservation'));
app.use('/admin', require('./src/routes/admin'));
app.use('/authadmin', require('./src/routes/authAdmin'));
app.use('/order', require('./src/routes/order'));


app.listen(5000, () => {

    console.log("Server is running on port 5000");
  })



