const { Client } = require('pg')

const cliente = new Client({
    user: 'cduran',
    host: 'localhost',
    database: 'modulo7_sesion1',
    password: 'cduran',
    port: 5432,
})

cliente.connect()

cliente.query('SELECT * FROM estudiantes', (err, res)=> {
    if(err){
        console.error('Error en la consulta: ', err.message)
    } else{
        console.log('Resultado: ', res.rows)
        cliente.end()
    }
})