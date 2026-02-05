# Express JS Starter 🚀
A beginner-friendly Express.js starter project demonstrating how to set up a basic Node.js server.
---
## 1️⃣ Install Node.js (must-have)
- Express runs on Node.js.
- Go to 👉 https://nodejs.org
- Download LTS version
- Install → Next → Next → Finish
- Check installation
- Open VS Code → Terminal (Ctrl + `) and run:
```css
node -v
npm -v
```
- If versions show up ✅ you’re good.

## 2️⃣ Open / Create a Project Folder in VS Code
- Open VS Code
- File → Open Folder
- Create a folder (example: express-app)
- Open it

## 3️⃣ Initialize Node Project
- In VS Code terminal:
```css
npm init -y
```
- This creates package.json 📦

## 4️⃣ Install Express.js

Now run:
```css
npm install express
After this you’ll see:
node_modules/ folder
package-lock.json
express added in package.json
```
✅ Express installed!

## 📁 Final Folder Structure
```js
Routing
│── node_modules
│── package.json
│── package-lock.json
│── public
│── index.js
```
## 5️⃣ Create Your First Express Server

Create a file: index.js 
```js
// index.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = 1000;
// Server static files from the "public" directory
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
```
## 6️⃣ Run the Server
In vs code terminal:
```css
node index.js
```

Open browser:
```css
http://localhost:1000
```
🎉 Done! Express is live.

## 🔹 Express + PostgreSQL Setup
### 1️⃣ Install Packages
```css
npm install express pg body-parser
```
## 📁 Final Folder Structure
```js
Database
│── node_modules
│── package.json
│── package-lock.json
│── public
│── sql.js
```
## 2️⃣ PostgreSQL Connection (sql.js)
```js
const express = require("express");
const { Pool } = require("pg"); // Import Pool from the pg library

const app = express();

// PostgreSQL connection configuration
  const pool = new Pool({
  user: "your_username",
  host: "localhost",
  database: "your_database_name",
  password: "YOUR_PASSWORD",
  port: 5432, // Default PostgreSQL port
});

// Test the connection
app.get('/',(req, res) => {
    res.send(`<h1>EXPRESS JS API</h1>`);
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error("Error connecting to the database:", err.stack);
  }
  console.log("Connected to the PostgreSQL database!");
  release();
});

//CRUD Example (PostgreSQL)
app.get("/employe", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM employe"); //select your table
    res.json(result.rows); // Send rows as JSON response
  } catch (err) {
    console.error("Error executing query:", err.stack);
    res.status(500).send("Error retrieving data");
  }
});

const PORT = 7000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```
## Run the Server
In vs code terminal:
```css
node sql.js
```
Open browser:
```css
http://localhost:5432
```
🎉 Done! Express is live.

## ✅ Output
- REST API successfully performs CRUD operations
- All REST endpoints tested using Postman
- Proper request/response handling with JSON

## 🎯 Learning Outcome
- Hands-on experience with Express.js & Node.js
- Real-world REST API development
- PostgreSQL database integration using `pg`
- Clean project structure & route separation

## 👨‍💻 Author
**Kumlesh Kurre**  
Backend Developer | Express.js | Node.js | PostgreSQL
