// const operaciones=require('./opereaciones.js');
// console.log(operaciones);
// // console.log(operaciones.suma(9,88));
// // console.log(operaciones.resta(9,88));
// // console.log(operaciones.multiplicar(2,88));
// // console.log(operaciones.dividir(9,88));
// // console.log(operaciones.dividir(9,0));


// //modulo os
// const os=require('os');
// console.log(os.platform());
// console.log(os.release());
// console.log(os.freemem());
// console.log(os.totalmem());

// //modulo archivos

// const fs=require('fs');
// // crear
// fs.writeFile('./texto.txt','prueba archivo',function(error){
//     if (error)
//     {
//         console.log(error);
//     }
//     console.log('archivo creado');
// });
// console.log('en espera de archivo');
// // leer

// fs.readFile('./texto.txt',function(err,data){
//     if (err){
//         console.log(err);
//     }
//     console.log(data.toString());
// })
// modulo colors
// const http= require('http');

// const colors=require('colors');
// const handleServer= function(req,res){
//     res.writeHead(404,{'content-type':'text/html'});
//     res.write('<h1>hola mundo prueba nodejs</h1>');
//     res.end();
// }
// const server= http.createServer(handleServer);

// server.listen(3000, function(){
//     console.log('Servidor en puerto  3000'.blue);
// });


// express js
const express=require('express');
const colors=require('colors');
const server=express();
server.get('/',function(req,res){
    res.send('<h1>  prueba nodejs con express');
    res.end();
});
server.listen(3000,function(){
    console.log('servidor en puerto 3000'.bgGreen);
});
