const { Pool } = require('pg')

const pool = new Pool({
    user: 'cduran',
    host: 'localhost',
    database: 'modulo7_sesion1',
    password: 'cduran',
    port: 5432,
})

pool.query('SELECT * FROM estudiantes', (err, res)=> {
    if(err){
        console.error('Error en la consulta: ', err.message)
    } else{
        console.log('Resultado: ', res.rows)
        pool.end()
    }
})