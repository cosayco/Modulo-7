const { user, bootcamp } = require('../models');

module.exports = {
  async createUser(data) {
    return await user.create(data);
  },
  async findUserById(id) {
    return await user.findByPk(id, { include: bootcamp });
  },
  async findAll() {
    return await user.findAll({ include: bootcamp });
  },
  async updateUserById(user_id, data) {
    try{
      const userx = await user.findByPk(user_id); 
      if (!userx) { throw new Error(`user_id: ${user_id} no existe!.`); }     
      await user.update(data, { where: { id: user_id } });
      return `El user con ID ${user_id} fue actualizado con ${data.firstName} ${data.lastName}.`;
    } catch(error) {
      console.error(error.message);
    }
  },
  async deleteUserById(user_id) {
    try {
      const userx = await user.findByPk(user_id); 
      if (!userx) { throw new Error(`user_id: ${user_id} no existe!.`); }     
      await user.destroy({ where: { id: user_id } });
      return `Usuario ${userx.firstName} con ID ${user_id} fue eliminado.`;
    } catch(error) {
      console.error(error.message);
    }
  }
};