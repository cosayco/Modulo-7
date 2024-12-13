const bootcampController = require('./controllers/bootcamp.Controller');
const userController = require('./controllers/user.Controller');

async function main() {
  // • Consultando el Bootcamp por id, incluyendo los usuarios.
  const EjercicioUno = await bootcampController.findById(1);
  console.log(JSON.stringify(EjercicioUno, null, 2));

  // • Listar todos los Bootcamp con sus usuarios.
  const EjercicioDos = await bootcampController.findAll();
  console.log(JSON.stringify(EjercicioDos, null, 2));

  // • Consultar un usuario por id, incluyendo los Bootcamp.
  const EjercicioTres = await userController.findUserById(2);
  console.log('Consultar un usuario por id, incluyendo los Bootcamp:',JSON.stringify(EjercicioTres, null, 2));

  // • Listar los usuarios con sus Bootcamp.
  const EjercicioCuatro = await userController.findAll()
  console.log('Listar los usuarios con sus Bootcamp:',JSON.stringify(EjercicioCuatro, null, 2));

  // • Actualizar el usuario según su id; por ejemplo: actualizar el usuario con id=1 por Pedro Sánchez.

  // • Eliminar un usuario por id; por ejemplo: el usuario con id=1.
  userController.deleteUserById(1);
}


main();
