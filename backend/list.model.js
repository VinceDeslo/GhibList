const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let List = new Schema({

    list_description:{
        type: String
    },
    list_owner:{
        type: String
    },
    list_priority:{
        type: String
    },
    list_completed:{
        type: Boolean
    }
});

module.exports = mongoose.model('List', List);