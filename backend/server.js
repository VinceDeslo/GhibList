const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const listRoutes = express.Router();

let List = require('./list.model');

app.use(cors());
app.use(bodyParser.json());
app.use('/ghiblists', listRoutes);


// mongoose connection initialization
mongoose.connect('mongodb://127.0.0.1:27017/ghiblists', { useNewUrlParser: true });
const connection = mongoose.connection;

// Connect mongoose to MongoDB
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
});


// Create endpoint to obtain all list items
listRoutes.route('/').get(function(req,res){
  
    List.find(function(err, list){
        if(err) {
            console.log(err);
        }
        else{
            res.json(list);
        }
    });
});

// Create endpoint to obtain list item via id value
listRoutes.route('/:id').get(function(req,res){
   
    let id = req.param.id;
   
    List.findById(id, function(err,list){
        res.json(list);
    });
});

// Create route permitting to add new lists
listRoutes.route('/add').post(function(req, res){

    let list = new List(req.body);
    
    list.save()
        .then(list => {
            res.status(200).json({'list': "list added successfully"});
        })
        .catch(err => {
            res.status(400).send("Adding new list failed");
        });
});

// Create route to update existing list items in db
listRoutes.route('/update/:id').post(function(req,res){
    
    // Retrieve original list
    List.findById(req.params.id, function(err, list){
        
        if(!list)
            res.status(404).send("Data not found");
        else 
            // Update list item states
            list.list_description = req.body.list_description;
            list.list_owner = req.body.list_owner;
            list.list_priority = req.body.list_priority;
            list.list_completed = req.body.list_completed;

            // Re-Update the list in the database
            list.save()
                .then(list => {
                    res.json("List updated");
                })
                .catch(err =>{
                    res.status(400).send("Update impossible");
                });
    });
});

// Run server on port 4000
app.listen(PORT, function(){
    console.log("Backend server running on Port: " + PORT);
});