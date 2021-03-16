const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const users = require('./routes/api/users');

app.use('/api/users', users);

app.listen(port, () => console.log(`Server is runnig on port ${port}`));
