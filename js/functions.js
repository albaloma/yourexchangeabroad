function VENTANAALERTA ()
    {
        alert("ATENCIÓN VENTANA DE ALERTA");
    }
function VENTANACONFIRMACION (){
    var respuesta;
    if(confirm("Desea Confirmar?"))
{
respuesta= "Has pulsado OK";
    }
    else
    {
        respuesta="Has pulsado CANCEL";
    }
    document.getElementById("MensajeConfirmacion").innerHTML=respuesta;
}
function PIDEINFORMACION()
{
    var respuesta;
    var person= prompt("Cómo te llamas?");
    if(person==null||person=="")
    {
        respuesta="El usuario pulso CANCEL";
    }
    else
    {
        respuesta= "Hola "+ person + ". ¿Que tal te va la vida?";
    }
    document.getElementById("MensajeInformacion").innerHTML=respuesta;
}