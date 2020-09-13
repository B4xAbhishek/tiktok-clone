const mongoose = require("mongoose");


const titokSchema = mongoose.Schema({
    url:String,
    channel:String,
    song:String,
    likes:String,
    messages:String,
    description:String,
    shares:String,
});

// collection inside the database
module.exports = mongoose.model('tiktokvideos', titokSchema);