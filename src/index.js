const express = require('express');
const morgan = require('morgan');
const pool = require('./db_connection');

const app = express();

// Settings
app.set('port', process.env.PORT || 3312); // validar si hay puerto default o no
app.set('json spaces', 2);

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));// Enivar y recibir archivos json
app.use(express.json());

// Routes
// app.use(require('./routes/index'));
// app.use('/api/movies', require('./routes/movies'));
// app.use('/api/users', require('./routes/users'));
app.use('/api/experiences', require('./routes/experiences'));

// Starting server
app.listen(app.get('port'), () => {
    console.log(`Server on port http://localhost:${app.get('port')}`);
});

const main=() => {
    
} 