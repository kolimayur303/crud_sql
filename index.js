const connection = require('./connection/connection')
const express = require('express');
const bodyParser = require('express');
const app = express();

// dotenv.config();

app.use(bodyParser.json());

// Middlewares
app.use(express.json());

app.get('/get_person',(req,res) => {
    connection.query('SELECT * FROM Persons',(err,rows) => {
        if(err){
            res.status(500).send({error: err});
        }else{
            res.status(200).send({rows});
        }
    })
});

app.get('/get_person/:id',(req,res) => {
    connection.query('SELECT * FROM Persons WHERE id=?',[req.params.id],(err,rows) => {
        if(err){
            res.status(500).send({error: err});
        }else{
            res.status(200).send({rows});
        }
    })
});

app.post('/create_person',(req,res) => {
    var person = req.body;
    var personData = [person.id,person.LastName,person.FirstName,person.Age]
    connection.query('INSERT INTO Persons(ID,LastName,FirstName,Age) values(?)',[personData],(err,rows) => {
        if(users.err){
            res.status(500).send({error: err});
        }else{
            res.status(200).send({rows});
        }
    })
});

app.patch('/update_person/:id',(req,res) => {
    var person = req.body;
    connection.query('UPDATE Persons SET ? WHERE id=' +req.params.id,[person],(err,rows) => {
        if(err){
            res.status(500).send({error: err});
        }else{
            res.status(200).send({rows});
        }
    })
});


app.put('/update_allPerson/:id',(req,res) => {
    var person = req.body;
    connection.query('UPDATE Persons SET ? WHERE id=' +person.id,[person],(err,rows) => {
        if(err){
            res.status(500).send({error: err});
        }else{
            if(rows.affectedRows==0){
                return res.status(401).json("No such Person found");
            }else{
                res.status(200).send({rows});
            }
            res.status(200).send({rows});
        }
    })
});


app.delete('/delete_person/:id',(req,res) => {
    connection.query('DELETE FROM Persons WHERE id=?',[req.params.id],(err,rows) => {
        if(err){
            res.status(500).send({error: err});
        }else{
            res.status(200).send({rows});
        }
    })
});

app.listen(3000, () => console.log('server running on port 3000'));