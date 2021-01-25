import express from 'express';
import {config} from 'dotenv';
import path from 'path'
config({path: '../.env'}) // Please make your own .env file outside src

const app : express.Express = express()
const port = 3000

app.use(require('morgan')('dev'))
app.use(require('body-parser')({extended: true}))
app.set('view engine', 'ejs')
// app.set('views', path.resolve(__dirname, 'views/ejs'))
app.use('/css',  express.static(path.resolve(__dirname, 'assets/css')))
app.use('/js',  express.static(path.resolve(__dirname, 'assets/js')))


app.get('/' , (req, res) => {
    res.send('Hello World!')
    console.log(req.baseUrl)
})

app.listen(port, () => {
    console.log(`Server started on https://localhost:${port}/`)
})