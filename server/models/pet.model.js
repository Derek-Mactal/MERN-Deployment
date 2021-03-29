const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    Name: { 
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [3, "{PATH} must be at least {MINLENGTH} character."],
        unique: [true, "{PATH} must be unique"],
        sparse: [true]
    },
    Type: { 
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [3, "{PATH} must be at least {MINLENGTH} character."]
    },
    Description: { 
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [3, "{PATH} must be at least {MINLENGTH} character."]
    },
    SkillOne: { type: String },
    SkillTwo: { type: String },
    SkillThree: { type: String },
}, { timestamps: true});
PetSchema.plugin(require('mongoose-beautiful-unique-validation'));

module.exports.Pet = mongoose.model('Pet' , PetSchema);