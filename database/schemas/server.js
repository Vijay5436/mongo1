const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    frist_name: {
        type : String,
        required : true
    },
    last_name : {
        type : String,
        required : true
    },
    age: {
        type : Number,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    },
})

const postsModel = mongoose.model("New",postSchema);

module.exports =  postsModel;