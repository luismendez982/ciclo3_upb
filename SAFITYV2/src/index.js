const express= require('express');
const app=express();
const path=require('path');
//SETTINGS
app.set('port',4000);
app.set ('views',path.join(__dirname,'views'));
app.engine('html',require('ejs').renderFile);
app.set('view engine','ejs');
//MIDDLEWARE

// RUTAS
app.use(require('./ruotes/index'));
// ARCHIVOS ESTATICOS

app.use(express.static(path.join(__dirname, 'public')));

//SERVIDOR ESCUCHANDO
app.listen(app.get('port'),()=>{
    console.log('Servidor en puerto:',app.get('port'));
});