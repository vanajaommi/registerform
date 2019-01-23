var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/registerform");


//schema
var formSchema=mongoose.Schema({
    fullname:{
        type:String,
        require:true
        },
    phonenumber:
    {type:Number,
        require:true
    },
    dob:
    {type:Number,
    require:true},
    email:
    {
        tyep:String,
    require:true},
    password:
    {type:String,
        require:true
    },
    city:
    {
        type:String,
        require:true},

    male:{
        type:String,
        require:true},
    female:{
        type:String,
        require:true}
    })


//model
exports.Form=mongoose.model('Form',formSchema,'forms');  
