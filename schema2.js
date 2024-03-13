const mongoose=require('mongoose');

const recipeschema=new mongoose.Schema({
    title:{
        type:String
    },
    ingredients:[String],
    instructions:{
        type:String
    },
    imageUrl:{
        type:String,
    }
})

const recipe=mongoose.model("addedRecipe",recipeschema)

module.exports={recipe}