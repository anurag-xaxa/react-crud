const express = require('express');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
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

    app.post('/login', async (req, res) => {
      const { name, password } = req.body;
      // console.log(password)
      // if (!name || !password) {
      //   return res.status(400).json({ error: 'name and password are required' });
      // }
      const hashedPassword = await bcrypt.hash(password, 10);
      // console.log("hashedPasswordhashedPassword", hashedPassword)
      const query = 'SELECT * FROM users WHERE name = ?';
      connection.query(query, [req.body.name], (error, results) => {
        if (error) {
          console.error('Error executing query:', error);
          return res.status(500).json({ error: 'Internal Server Error' });
        }
         if(results.length > 0) {
           bcrypt.compare(hashedPassword, results[0].password, (err, response) => {
            console.log("results[0].password", results[0].password)
            console.log("hashedPassword",hashedPassword)
            if(err) {
              return res.json({Error: "Password compare error"})
            }
            if(response) {
              console.log("responseresponseresponse", response)
              const name = results[0].name;
              const token = jwt.sign({name}, secretKey, {expiresIn:'1d'})
              res.Cookie('token',token)
              return res.json({Status: "Success"})
            } else {
              return res.json({Error: "Password not matched"})
            }
          })
          // const user = {
          //   name:results.name,
            
          // }      
          // console.log("results", results)
         
          // if (isPasswordMatch) {
          // // User found, login successful
          // const token = jwt.sign(user, secretKey, {expiresIn:'86400'})
          // return res.status(200).json({ message: "Login successful", token });
          // } else {
          //   alert("error")
          // }
        } else {
          // User not found or incorrect credentials
          return res.status(401).json({ error: 'Invalid name or password' });
        }
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
        



app.listen(PORT, ()=>{
    console.log(`App is running at port: ${PORT}`)
})