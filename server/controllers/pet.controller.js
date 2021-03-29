const { Pet } = require("../models/pet.model");





module.exports ={
    index(req,res){
        console.log("requesting index");
        res.json({
            message: "Hello world"
        });
    },
    
    createPet(req,res){
        // schema.plugin(require('mongoose-beautiful-unique-validation'));
        console.log("creating pet...");
        Pet.create(req.body)
        .then((pet) => {
            res.json(pet);
        })
        .catch((err)=>{
            //dont forget the status(400)
            res.status(400).json(err);
        });
    },
    
    getAll(req,res){
        console.log("getting all pets...");
        Pet.find()
        .then((pet)=>{
            res.json(pet);
        })
        .catch((err)=>{
            res.status(400).json(err);
        })
    },
    
    getOne(req,res){
        //this is just ".id" because thats what we call it in our routes.
        console.log("getting pet with params: " + req.params.id);
        Pet.findById(req.params.id)
        .then((pet)=>{
            res.json(pet);
            })
            .catch((err)=>{
                res.status(400).json(err);
            });
        },
        
        updateOne(req,res){
            console.log("updating pet with params:" + req.params.id);
            Pet.findByIdAndUpdate(req.params.id, req.body, {
                //always have these two for updating
                runValidators: true,
                new: true,
            })
            .then((pet)=>{
                res.json(pet);
            })
            .catch((err)=>{
                res.status(400).json(err);
            });
        },
        
        deleteOne(req,res){
            console.log("deleteing with params:" + req.params.id);
            Pet.findByIdAndDelete(req.params.id)
            .then((pet)=>{
                res.json(pet);
            })
            .catch((err)=>{
                res.status(400).json(err);
            });
        },
    }
// module.exports.index = (request, response) => {
//     response.json({
//         message: "Hello World"
//     });
// }

// module.exports.createPet = (request, response) => {
//     const { firstName, lastName } = request.body;
//     console.log("creating pet...");
//     Pet.create({
//         firstName, 
//         lastName
//     })
//         .then(person => response.json(person))
//         .catch(err => response.json(err));

// }

// module.exports.getAll = (request, response) => {
//     console.log("getting all the pets...");
//     Pet.find()
//         .then(people => response.json(people))
//         .catch(err => response.json(err)); 
    
// }