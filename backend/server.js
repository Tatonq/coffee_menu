const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const MenusApi = require('./routes/menu')
require('dotenv').config()

const app = express()
//conect local database
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: false
}).then(() => console.log('Connected to Database'))
.catch((err) => console.log(err))
//middleware
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

app.get('/', (req, res) => {
    res.send('HELLO')
})

//route
app.use('/api', MenusApi);

const port = process.env.PORT || 2022
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
})