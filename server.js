const express = require('express');
const http = require('http')
const fs = require('fs')
require('dotenv').config();
const app = express();
const port = process.env.PORT; //Port for the backend to listen on
const helper = require('./helper')
const morgan = require('morgan')

const winston = require('./winston');
const morganformat = ':method on :url by :remote-addr with status code :status took :response-time ms';
app.use(morgan(morganformat, { stream: winston.stream }));

let server = http.createServer(app);
server.listen(port,()=>{
    console.log(`http server listining on Port: ${port}`)
})

app.post('/createUser', async (req, res) =>
{
    try{
        await helper.createUser( req.query.email, req.query.username, req.query.password)
        res.status(200)
        res.send("User wurde erstellt.");
        
    }
    catch(err){
        res.status(500)
        res.send("User erstellen hat nicht funktoniert.")
    }
})

app.delete('/deleteUser', async (req, res) =>
{
    try{
        await helper.deleteUser( req.query.username)
        res.status(200)
        res.send("User wurde gelöscht.");
        
    }
    catch(err){
        res.status(500)
        res.send("User löschen hat nicht funktoniert.")
    }
})





