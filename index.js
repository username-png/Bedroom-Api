const express = require ('express') //Framework
const bodyParser = require('body-parser')// para pegar trechos do corpo da pagina
const apiRoute = require ('./routes/api')

const app = express();

app.use(bodyParser.json()) //formato que sera passado
app.use(bodyParser.urlencoded({ //pode passar objetos(acho)
    extended:true
}))
app.use("/api",apiRoute)

app.listen('3000') // porta que a api usara 