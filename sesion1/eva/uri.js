const { Pool, Client } = require('pg')

const connectionString = 'postgresql://cduran:cduran@localhost:5432/modulo7_sesion1'

const pool = new Pool ({
    connectionString,
})
pool.query('SELECT * FROM estudiantes', (err, res)=> {
    if(err){
        console.error('Error en la consulta: ', err.message)
    } else{
        console.log('Resultado Pool: ', res.rows)
        pool.end()
    }
})

const cliente = new Client({
    connectionString,
})

cliente.connect()
cliente.query('SELECT * FROM estudiantes', (err, res)=> {
    if(err){
        console.error('Error en la consulta: ', err.message)
    } else{
        console.log('Resultado Client: ', res.rows)
        cliente.end()
    }
})
