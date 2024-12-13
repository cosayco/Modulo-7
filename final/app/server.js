const { sequelize } = require('./models');
const bootcampController = require('./controllers/bootcamp.Controller');
const userController = require('./controllers/user.Controller');

async function initializeDatabase() {
    try {
        // Sincroniza la base de datos
        await sequelize.sync({ force: true});
        console.log('Eliminando y resincronizando la base de datos.');

        // Validando la creacion de usuarios
        const usuarioUno = await userController.createUser({firstName:'Mateo',lastName:'Díaz',email:'mateo.diaz@correo.com'})
        console.log(JSON.stringify(usuarioUno, null, 2))
        const usuarioDos = await userController.createUser({firstName:'Santiago',lastName:'Mejías',email:'santiago.mejias@correo.com'})
        console.log(JSON.stringify(usuarioDos, null, 2))
        const usuarioTres = await userController.createUser({firstName:'Lucas',lastName:'Rojas',email:'lucas.rojas@correo.com'})
        console.log(JSON.stringify(usuarioTres, null, 2))
        const usuarioCuatro = await userController.createUser({firstName:'Facundo',lastName:'Fernandez',email:'facundo.fernandez@correo.com'})
        console.log(JSON.stringify(usuarioCuatro, null, 2))

        // Validando la creacion de bootcamps
        const bootUno = await bootcampController.createBootcamp({title:'Introduciendo El Bootcamp De React.',cue:10,description:'React es la librería más usada en JavaScript para el desarrollo de interfaces.'})
        console.log(JSON.stringify(bootUno, null, 2))
        const bootDos = await bootcampController.createBootcamp({title:'Bootcamp Desarrollo Web Full Stack.',cue:12,description:'Crearás aplicaciones web utilizando las tecnologías y lenguajes más actuales y populares, como: JavaScript, nodeJS, Angular, MongoDB, ExpressJS.'})
        console.log(JSON.stringify(bootDos, null, 2))
        const bootTres = await bootcampController.createBootcamp({title:'Bootcamp Big Data, Inteligencia Artificial & Machine Learning.',cue:18,description:'Domina Data Science, y todo el ecosistema de lenguajes y herramientas de Big Data, e intégralos con modelos avanzados de Artificial Intelligence y Machine Learning.'})
        console.log(JSON.stringify(bootTres, null, 2))

        // Asociar ingredientes a recetas
        await bootcampController.addUser(bootUno.id, usuarioUno.id);
        await bootcampController.addUser(bootUno.id, usuarioDos.id);
        await bootcampController.addUser(bootDos.id, usuarioUno.id);
    } catch (error) {
        console.error('Error initializing database:', error.message);
    }
}

initializeDatabase();

//npm init -y
//npm install sequelize pg pg-hstore
//npm install --save-dev sequelize-cli
//npx sequelize-cli init
