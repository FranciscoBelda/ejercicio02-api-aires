const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
require('dotenv').config();
require('./database');

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.set('port', process.env.PORT || 3000);

app.use('/api/v2/airespepito', require('./routes/aire.route'));
app.use('/', (req, res) => {res.status(404).json({
    message: 'La API está en /api/v2/airespepito'});});

app.listen(app.get('port'), () => {
    console.log('Listening on port', app.get('port'));})
