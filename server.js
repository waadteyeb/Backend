const express=require('express');
const server=express();
const bodyParser=require('body-parser');
const morgan=require('morgan');
const mongoose=require('mongoose');
const cors=require('cors');
require('dotenv/config');
server.use(cors());
server.options('*',cors());

const fournituresRouter=require('./routers/fournitures');
const exchangesRouter=require('./routers/exchanges');
const categoriesRouter=require('./routers/categories');
const usersRouter=require('./routers/users');
const notificationsRouter=require('./routers/notifications');
const api = process.env.API_URL;

//el middelware
server.use(bodyParser.json());
server.use(morgan('tiny'));

//el routers
server.use(`${api}/fournitures`,fournituresRouter);
server.use(`${api}/exchanges`,exchangesRouter);
server.use(`${api}/categories`,categoriesRouter);
server.use(`${api}/users`,usersRouter);
server.use(`${api}/notifications`,notificationsRouter);


server.use(cors({
  origin: 'http://localhost:8000'
}));




mongoose.connect(process.env.CONNECTION_STRING,{
  useNewUrlParser:true,useUnifiedTopology:true,
  dbName:'fournitures2give'
})
.then(( )=>{
  console.log('Database connection is ready');
}
)
.catch((err)=>{
  console.log(err);
})


server.listen(8000,()=>{
  
  console.log('server is running http://localhost:8000')
})