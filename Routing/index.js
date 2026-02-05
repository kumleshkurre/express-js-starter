// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = 1000;
// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public' )));         //define folder name
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Or specify your origin
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
    next();
  });

  app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, 'public','index.html'));    //define path public name ke folder me index.html ka file ko chalo
  });

    app.get('/about',(req, res) => {
        res.send(`<h1 style="color: green;">welcome to about express</h1>`);
    });
    
    app.listen(PORT,() => {
        console.log(`Server is listening at ${PORT}`);
    });