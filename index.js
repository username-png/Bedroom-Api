const express = require ('express') //Framework

const bodyParser = require('body-parser')// para pegar trechos do corpo da pagina

const app = express();

app.use(bodyParser.json()) //formato que sera passado
app.use(bodyParser.urlencoded({ //pode passar objetos(acho)
    extended:true
}))



app.listen('3000')