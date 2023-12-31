require('dotenv').config({ path: `./server/config/.env.${process.env.NODE_ENV}` })

const express = require('express');
const cookieSession = require('cookie-session');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const morgan = require('morgan');

require('./models/User')
require('./services/passport');

mongoose.connect(process.env.MONGO_URI)

const app = express();

app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY]
  })
)

app.use(morgan('common'));

app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

const PORT = process.env.PORT || 5002;
app.listen(PORT);
