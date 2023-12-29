const express = require('express');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const bcrypt = require('bcryptjs');
// const mongoose = require('mongoose')
const cors = require('cors');
const User = require('./Models/userSchema')
// const DB = "mongodb+srv://anurag:anurag@cluster0.ypbw3d9.mongodb.net/?retryWrites=true&w=majority"
const app = express();
const PORT = 5000;
// mongoose.connect(DB).then(() => {
//     console.log('Connected to Database')
// })
const secretKey = 'yourSecretKey';
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'react'
  });
  connection.connect((error) => {
    if (error) {
      console.error('Error connecting to MySQL database: ' + error.stack);
      return;
    }
    console.log('Connected to MySQL database as id ' + connection.threadId);
  });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.get('/', (req, res) => {
    res.status(200).send("Page not found"); 
});

app.get('/getUser/:id', (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ error: 'No Id Found' });
  }

  const query = 'SELECT * FROM users WHERE id = ?';
          connection.query(query, [id], (error, results) => {
            if (error) {
              console.error('Error executing query: ' + error.stack);
              return res.status(500).json({ error: 'Internal Server Error' });
            }
            res.json(results);
          });
        });


    app.post('/users', async (req, res) => {
        const { name, email, password } = req.body;

         const hashedPassword = await bcrypt.hash(password, 10);

        if (!name || !email || !password) {
          return res.status(400).json({ error: 'All fields are mandatory..!' });
        }

        const query = await 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
        connection.query(query, [name, email, hashedPassword], (error, results) => {
         
    if (error) {
        console.error('Error executing query: ' + error.stack);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
        res.status(201).json({ message: 'User created successfully', userId: results.insertId });
        
        });
    })

    
    app.get('/users', (req, res) => {
       
          const query = 'SELECT * FROM users';
          connection.query(query, (error, results) => {
            if (error) {
              console.error('Error executing query: ' + error.stack);
              return res.status(500).json({ error: 'Internal Server Error' });
            }
            res.json(results);
          });
        });
      

        app.put('/users/:id', (req, res) => {
          const userId = req.params.id;
          const { name, email } = req.body;

          if (!name || !email) {
            return res.status(400).json({ error: 'name and email are required' });
          }
      
          const updateQuery = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
          connection.query(updateQuery, [name, email, userId], (error, results) => {
              if (error) {
                  console.error('Error executing query: ' + error.stack);
                  return res.status(500).json({ error: 'Internal Server Error' });
              }
      
              if (results && results.affectedRows !== undefined) {
                  res.json({ message: 'User updated successfully', affectedRows: results.affectedRows });
              } else {
                  res.json({ message: 'User updated successfully' });
              }
          });
      });
            

    app.delete('/users/:id', (req, res) => {
        const userId = req.params.id;
         
        const deleteQuery = 'DELETE FROM users WHERE id = ?';
        connection.query(deleteQuery, [userId], (error, results) => {
    
        if (error) {
            console.error('Error executing query: ' + error.stack);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json({ message: 'User deleted successfully', affectedRows: results.affectedRows });
        });
    });


    // Login route
    app.post('/login', (req, res) => {
    const { name, password } = req.body;
  
  // Find the user in the database
  connection.query('SELECT * FROM users WHERE name = ?', [name], (error, results, fields) => {
     if (error) {
       return res.status(500).json({ error: error });
     }
     let name = ''
     let password1 = ''
     for (let row of results) {
      name = row.name
      password1 = row.password
     }
     
     if (results.length === 0) {
       return res.status(404).json({ message: 'Name not found.' });
     }
 
     // Check if the password is correct
     bcrypt.compare(password, password1, (err, isMatch) => {

      // console.log("password", password)
      // console.log("password1", password1)
      
      if (err) {
         return res.status(500).json({ error: err });
       }
 
       if (!isMatch) {
         return res.status(400).json({ message: 'password not match' });
       }
        // res.status(400).json({ message: 'password match' })
       // Create a JWT token
       const token = jwt.sign({ id: results[0].id }, secretKey, { expiresIn: '1h' });
       res.status(200).json({ message: 'Logged in successfully.', token: token });
      
      });
  });
 });
 




app.listen(PORT, ()=>{
    console.log(`App is running at port: ${PORT}`)
})