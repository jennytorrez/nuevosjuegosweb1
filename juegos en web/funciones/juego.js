const botonpiedra=document.getElementById("piedra");
const botonpapel=document.getElementById("papel");
const botontijera=document.getElementById("tijera");

botonpiedra.addEventListener("click", () => {

    jugar("piedra");
});
botonpapel.addEventListener("click", () => {

    jugar("papel");
});
botontijera.addEventListener("click", () => {

    jugar("tijera");
});
function jugar(opcion)
 {
    alert ("el jugador eligio "+ opcion);
   const opcionmaquina=Math.floor(Math.random()*3)+1;
  // alert(opcionmaquina);
   switch (opcionmaquina){

   case 1:
       resultado="piedra";
       break;
   case 2:
       resultado="papel";
       break;
   case 3:
        resultado="tijera";
        break;
   }
   alert ("la maquina eligio "+ resultado);
   if(opcion==resultado){
       alert ("empatados");
   } else if (opcion=="piedra"){
       if (resultado="papel"){
           alert ("PERDISTE");
       }
       else if (resultado=="tijera"){
           alert("GANASTE");
       }
   }
  
   else if (opcion=="papel")
   {
    if (resultado="piedra"){
        alert ("GANASTE");
    }
    else if (resultado=="tijera"){
        alert("PERDISTE");
    }
   }


   else if (opcion=="tijera")
   {
    if (resultado="piedra"){
        alert ("PERDISTE");
    }
    else if (resultado=="PAPEL"){
        alert("GANASTE");
    }
   }

}