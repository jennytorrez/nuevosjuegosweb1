const boton1=document.getElementById("carta1");
const boton2=document.getElementById("carta2");
const boton3=document.getElementById("carta3");
const boton4=document.getElementById("carta4");
const boton5=document.getElementById("carta5");
const boton6=document.getElementById("carta6");

const boton7=document.getElementById("carta7");
const boton8=document.getElementById("carta8");
const boton9=document.getElementById("carta9");
const boton10=document.getElementById("carta10");

boton1.addEventListener("click", () => {

    jugar("carta1");
});
boton2.addEventListener("click", () => {

    jugar("carta2");
});
boton3.addEventListener("click", () => {

    jugar("carta3");
});
boton4.addEventListener("click", () => {

    jugar("carta4");
});
boton5.addEventListener("click", () => {

    jugar("carta5");
});
boton6.addEventListener("click", () => {

    jugar("carta6");
});




boton7.addEventListener("click", () => {

    jugar("carta7");
});
boton8.addEventListener("click", () => {

    jugar("carta8");
});
boton9.addEventListener("click", () => {

    jugar("carta9");
});
boton10.addEventListener("click", () => {

    jugar("carta10");
});




function jugar(opcion)
 {
    alert ("el jugador eligio "+ opcion);
   const opcionmaquina=Math.floor(Math.random()*3)+1;
  // alert(opcionmaquina);
   switch (opcionmaquina){

   case 1:
       resultado="carta1";
       break;
   case 2:
       resultado="carta2";
       break;
   case 3:
        resultado="carta3";
        break;

    case 4:
                resultado="carta4";
                break;
    case 5:
                resultado="carta5";
                break;
    case 6:
                 resultado="carta6";
                 break;

    case 7:
                resultado="carta7";
                    break;
    case 8:
                resultado="carta8";
                    break;
    case 9:
                resultado="carta9";
                     break;  
    case 10:
                resultado="carta10";
                        break;             
   }



   alert ("la maquina eligio "+ resultado);
   if(opcion==resultado){
       alert ("empatados");




   } else if (opcion=="carta1"){
       if (resultado="carta2"){
           alert ("GANASTE ");
       }
       else if (resultado=="carta3"){
           alert("PERDISTE");
       }
   }
  
   else if (opcion=="carta2")
   {
    if (resultado="carta3"){
        alert ("GANASTE");
    }
    else if (resultado=="carta4"){
        alert("PERDISTE");
    }
   }


   else if (opcion=="carta3")
   {
    if (resultado="carta4"){
        alert ("GANASTE");
    }
    else if (resultado=="carta5"){
        alert("PERDISTE");
    }
   }




       
 else if (opcion=="carta4"){
    if (resultado="carta5"){
        alert ("GANASTE");
    }
    else if (resultado=="carta6"){
        alert("PERDISTE");
    }
}

else if (opcion=="carta5")
{
 if (resultado="carta6"){
     alert ("GANASTE");
 }
 else if (resultado=="carta7"){
     alert("PERDISTE");
 }
}


else if (opcion=="carta6")
{
 if (resultado="carta7"){
     alert ("GANASTE");
 }
 else if (resultado=="carta8"){
     alert("PERDISTE");
 }
}

else if (opcion=="carta7")
{
 if (resultado="carta8"){
     alert ("GANASTE");
 }
 else if (resultado=="carta9"){
     alert("PERDISTE");
 }
}

else if (opcion=="carta8")
{
 if (resultado="carta9"){
     alert ("GANASTE");
 }
 else if (resultado=="carta10"){
     alert("PERDISTE");
 }
}

else if (opcion=="carta9")
{
 if (resultado="carta10"){
     alert ("GANASTE");
 }
 else if (resultado=="carta1"){
     alert("PERDISTE");
 }
}

else if (opcion=="carta10")
{
 if (resultado="carta1"){
     alert ("GANASTE");
 }
 else if (resultado=="carta2"){
     alert("PERDISTE");
 }
}





}
