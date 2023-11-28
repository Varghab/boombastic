const app = require('./app');
const dotenv = require('dotenv');
const connectToDatabase = require('./config/db.config');

// Unhandled uncaught exception
process.on('uncaughtException',(err)=>{
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server because of uncaught exception!");
    process.exit(1);
})

dotenv.config({
    path: './config/config.env',
})

connectToDatabase();

const server = app.listen(process.env.PORT, () =>{
    console.log(`Server is working on ${process.env.PORT}`);
})

//Unhandled promise rejection
process.on('unhandledRejection',(err)=>{
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server because of unhandled promise rejection!");
    server.close(()=>{
        process.exit(1);
    })
})