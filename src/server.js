const http = require('http');

const app =  require('./app');
const {mongoConnect}=require('./service/mongo');

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

async function startserver(){
        await mongoConnect();// this well connet to mongodb

         server.listen(PORT,()=>{
              console.log(`${PORT} listening on .... `);
        });

}

startserver();
