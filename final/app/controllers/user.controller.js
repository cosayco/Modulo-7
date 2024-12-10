const db = require('../models/index');
const User = db.user;
const Bootcamp = db.bootcamp;

exports.createUser = async (firstName, lastName, email) => {
    try{
        return await User.create({ firstName, lastName, email });
    } catch(error) {
        console.error(error.message)
    }    
};

exports.findUserById = async (userId) => {
    return await User.findAll({ where: { id: userId } })
};

exports.findAll = async () => {
    return await User.findAll({ include: Bootcamp })
};

exports.updateUserById = async () => {
    // Logic to update user by id
};

exports.deleteUserById = async () => {
    // Logic to delete user by id
};
