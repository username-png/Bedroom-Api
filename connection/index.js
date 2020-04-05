const knex = require ('knex')({
    client: 'pg',// database type
    connection:{
        host: "localhost",
        user:"postgres",
        password:"Mnkg",
        database:"bedroom"
    }
});

module.exports = knex;