const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name:{
        type:String,
        require:[true,'Plase add a name']
    },
    email:{
        type:String,
        require:[true,'Plase add a email']
    },
    password:{
        type:String,
        require:[true,'Please add a password']
    }
},{
    timestamps:true,
})

module.exports = mongoose.model('User',userSchema);