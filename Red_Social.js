//RED SOCIAL
/*
1.- EL USUARIO DEBE TENER USUARIO Y CONTRASENIA
2.-EL SISTEMA DEBE SER CAPAZ DE VALIDAR SI EL USUARIO Y CONTRASENIA EXISTEN
3,- sI SON CORRECTOS LOS DATOS SE DEBE INGRESAR UN MENSAJE DE BIEN
4.-Si el usuario y contrasenia son incorrectos,debe decir error y no mosrtrar resultado



*/

const usersDatabase=[
    {username:"andres",password:"123",

    },{username:"caro",password:"456",}
    ,{username:"mariana",password:"789",},];
const usersTimeline=[
    {username:"Estefany",timeline:"Me encata Javascript!",}
    ,{username:"Oscar",timeline:"Bebeloper es lo mejor!",}
    ,{username:"Mariana",timeline:"A mi me gusta mÃ¡s el cafÃ© que el tÃ©",}
    ,{username:"Andres",timeline:"Yo hoy no quiero trabajar",},]
    ;
    const username=prompt("CuÃ¡l es tu usuario?");
    const password=prompt("CuÃ¡l es tu contraseÃ±a?");
 
    function usuarioExistente(username,password){
        for(let i=0;i<usersDatabase.length;i++){
            if(usersDatabase[i].username===username&&usersDatabase[i].password===password)
                {
                    return true;

                }
            }
    return false;
    }
   
    function signIn(username,password){
        if(usuarioExistente(username,password)){
            alert(`Bienvenido a tu cuenta ${username}`);
            console.log(usersTimeline);
              }
              else
              {alert("Uuups, usuario o contraseÃ±a incorrectos!");

              }
            }
signIn(username,password);
//para que el prompt te funcione en la terminakl debes escribir npm install prompt-sync y agregar la siguiente linea de codigo en la
//parte superior: const prompt = require('prompt-sync')();

