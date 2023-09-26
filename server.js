require('dotenv').config()

const childrenRouter = require('./Routes/childrensRouter')
const childRouter = require('./Routes/childRouter')
const consumbleRouter = require('./Routes/consumblesRouter')
const curriculumRouter = require('./Routes/curriculumRouter')
const employeeRouter = require('./Routes/employeeRouter')
const femaleParentRouter = require('./Routes/femaleParentsRouter')
const maleParentRouter = require('./Routes/maleParentsRouter')
const mainofficeRouter = require('./Routes/mainOfficeRouter')
const programRouter = require('./Routes/programRouter')
const schoolTripRouter = require('./Routes/schoolTripRouter')
const toyRouter = require('./Routes/toysRouter')
const waitinglistRouter = require('./Routes/waitingListRouter')

const mongoose = require('mongoose')
const express = require('express')
const app = express()


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use('/api',childrenRouter)
app.use('/api',childRouter)
app.use('/api',consumbleRouter)
app.use('/api',curriculumRouter)
app.use('/api',employeeRouter)
app.use('/api',femaleParentRouter)
app.use('/api',mainofficeRouter)
app.use('/api',maleParentRouter)
app.use('/api',programRouter)
app.use('/api',schoolTripRouter)
app.use('/api',toyRouter)
app.use('/api',waitinglistRouter)


mongoose.connect(process.env.DB_URL).then(() =>{
    app.listen(process.env.PORT,()=>{
        console.log('Database Connected')
        console.log('Server Running in port ' + process.env.PORT)
    })
}).catch(error => {
    console.log({  error: error.message })
})