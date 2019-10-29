const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = 4000;
const movieRoutes = express.Router();

let Movie = require('./movie.model');

app.use(cors());
app.use(bodyParser.json());
app.use('/ghiblist', movieRoutes);


// mongoose connection initialization
mongoose.connect('mongodb://127.0.0.1:27017/ghiblist', { useNewUrlParser: true });
const connection = mongoose.connection;

// Connect mongoose to MongoDB
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
});


// Create endpoint to obtain all movie items
movieRoutes.route('/').get(function(req,res){
  
    Movie.find(function(err, movies){
        if(err) {
            console.log(err);
        }
        else{
            res.json(movies);
        }
    });
});

// Create endpoint to obtain movie item via id value
movieRoutes.route('/:id').get(function(req,res){
   
    let id = req.param.id;
   
    Movie.findById(id, function(err,movie){
        res.json(movie);
    });
});

// Create endpoint permitting to add new movies
movieRoutes.route('/add').post(function(req, res){

    let movie = new Movie(req.body);
    
    movie.save()
        .then(movie => {
            res.status(200).json({'movie': "Movie added successfully"});
        })
        .catch(err => {
            res.status(400).send("Adding new movie failed");
        });
});

// Create route to update existing movie items in db
movieRoutes.route('/update/:id').post(function(req,res){
    
    // Retrieve original movie
    Movie.findById(req.params.id, function(err, movie){
        
        if(!movie)
            res.status(404).send("Data not found");
        else 
            // Update movie item states
            movie.movie_name = req.body.movie_name;
            movie.movie_description = req.body.movie_description;
            movie.movie_year = req.body.movie_year;
            movie.movie_priority = req.body.movie_priority;
            movie.movie_watched = req.body.movie_watched;

            // Re-Update the movie in the database
            movie.save()
                .then(movie => {
                    res.json("Movie updated");
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