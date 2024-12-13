const { bootcamp, user } = require('../models');

module.exports = {
  async createBootcamp(data) {
    return await bootcamp.create(data);
  },
  async addUser(bootcamp_id, user_id) {
    const bootx = await bootcamp.findByPk(bootcamp_id);
    if (!bootx) { throw new Error("Bootcamp no existe!."); } 
    const userx = await user.findByPk(user_id); 
    if (!userx) { throw new Error("User no existe!."); } 
    await bootx.addUser(userx); 
    console.log(`Agregado el usuario id=${user_id} al bootcamp con id=${bootcamp_id}`); 
  },
  async findById(id) {
    return await bootcamp.findByPk(id);
  },
  async findAll() {
    return await user.findAll({ include: bootcamp });
  },
};