const fs= require('fs')
const https=require('https')


require("dotenv").config();
const app=require('./app')
    
const port = process.env.PORT ;


app.listen(port, () => {
  console.log(`App Runing on port ${port}`);
});