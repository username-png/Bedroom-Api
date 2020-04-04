const knex = require ('knex')({
    client: 'pg',
    connection:{
        host: "localhost",
        user:"postgres",
        password:"Mnkg",
        database:"bedroom"
    }
});

module.exports = knex;