const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Movie = new Schema({

    movie_name:{
        type: String
    },
    movie_description:{
        type: String
    },
    movie_year:{
        type: String
    },
    movie_priority:{
        type: String
    },
    movie_watched:{
        type: Boolean
    }
});

module.exports = mongoose.model('Movie', Movie);