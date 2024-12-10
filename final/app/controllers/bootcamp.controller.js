const db = require('../models/index');
const Bootcamp = db.bootcamp;
const User = db.user;

exports.createBootcamp = async (title, cue, description) => {
    try{
        return await Bootcamp.create({ title, cue, description });
    } catch(error) {
        console.error(error.message)
    }    
};

exports.addUser = async (req, res) => {
    // Logic to add user to Bootcamp
};

exports.findById = async (req, res) => {
    // Logic to find Bootcamp by id
};

exports.findAll = async (req, res) => {
    try{
        return await Bootcamp.findAll( { include: User })
    } catch(error) {
        console.error(error.message)
    }
};
