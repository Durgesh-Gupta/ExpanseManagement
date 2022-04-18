const app=require('./app')
const dotenv=require('dotenv')
const connectDatebase=require('./config/database')

dotenv.config({path:'backend/config/config.env'})


// Connceting to DataBase
connectDatebase()

const server = app.listen(process.env.PORT,()=>{
    console.log(`Server started on PORT:${process.env.PORT} in ${process.env.NODE_ENV}`)
})

// handle unhandledpromiserejection
process.on('unhandledRejection',err=>{
    console.log(`ERROR: ${err.message}`)
    console.log(`Shutting down the server due to unHandled Promise Rejection`);
    server.close(()=>{
        process.exit(1)
    })
})