const { createBootcamp } = require('./app/controllers/bootcamp.controller');
const { createUser } = require('./app/controllers/user.controller');
const db = require('./app/models/index');

async function initializeDatabase() {
    try {
        // Sincroniza la base de datos
        await db.sequelize.sync({ force: true});
        console.log('Eliminando y resincronizando la base de datos.');

        // Validando la creacion de usuarios
        let usuarioUno = await createUser('Mateo','Díaz','mateo.diaz@correo.com')
        console.log(JSON.stringify(usuarioUno, null, 2))
        let usuarioDos = await createUser('Santiago','Mejías','santiago.mejias@correo.com')
        console.log(JSON.stringify(usuarioDos, null, 2))
        let usuarioTres = await createUser('Lucas','Rojas','lucas.rojas@correo.com')
        console.log(JSON.stringify(usuarioTres, null, 2))
        let usuarioCuatro = await createUser('Facundo','Fernandez','facundo.fernandez@correo.com')
        console.log(JSON.stringify(usuarioCuatro, null, 2))

        // Validando la creacion de bootcamps
        let bootUno = await createBootcamp('Introduciendo El Bootcamp De React.',10,'React es la librería más usada en JavaScript para el desarrollo de interfaces.')
        console.log(JSON.stringify(bootUno, null, 2))
        let bootDos = await createBootcamp('Bootcamp Desarrollo Web Full Stack.',12,'Crearás aplicaciones web utilizando las tecnologías y lenguajes más actuales y populares, como: JavaScript, nodeJS, Angular, MongoDB, ExpressJS.')
        console.log(JSON.stringify(bootDos, null, 2))
        let bootTres = await createBootcamp('Bootcamp Big Data, Inteligencia Artificial & Machine Learning.',18,'Domina Data Science, y todo el ecosistema de lenguajes y herramientas de Big Data, e intégralos con modelos avanzados de Artificial Intelligence y Machine Learning.')
        console.log(JSON.stringify(bootTres, null, 2))

    } catch (error) {
        console.error('Error initializing database:', error.message);
    }
}

initializeDatabase();
