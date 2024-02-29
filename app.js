//Import express module to create the app
const express = require('express');
//Create express app instance
const app = express();
//Import itemsRoutes module
const itemsRoutes = require('./routes/items');
//Import expressError class 
const expressError = require('./expressError');
//Parse incoming json data via middleware
app.use(express.json());
//Use routes
app.use('/api/items', itemsRoutes);
//Catch 404 and forward to error handler
app.use((req, res, next) => {
    const error = new expressError('Not Found', 404);
    next(error);
});
//Catch 500 and forward to error handler
app.use((error, req, res, next) => {
    res.status(error.status).json({
        message: error.message
    });
});
//Export app
module.exports = app;
