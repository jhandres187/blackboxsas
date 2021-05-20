<?php
if(isset($_POST['emailUser'])){
    $name = $_POST['nameUser'];
    $email_from = $_POST['emailUser'];
    $email_subject = $_POST['subject'];
    $message = $_POST['message'];
    $phone = $_POST['phoneUser'];


/* determina que la variable nameUser no sea null o vacio*/
if(isset($_POST['nameUser'])) {
    /*Elimina etiquetas, opcionalmente elimina o codifica caracteres especiales*/
    $nameUser = filter_var($_POST['nameUser'], FILTER_SANITIZE_STRING);
}
/* determina que la variable emailUser no sea null o vacio*/
if(isset($_POST['emailUser'])) {
    /* se elimina espacios caracteres especiales que no corresponden  al formato RFC 822 de correo y digitos decimales*/
    $emailUser = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['emailUser']);
    /*filtramos los caracteres para validar que el correo este correcto al formato RFC 822*/
    $emailUser = filter_var($emailUser, FILTER_VALIDATE_EMAIL);
}
/*determina que el campo del mensaje no este vacio */
if(isset($_POST['message'])) {
    /*Convierte caracteres especiales en entidades HTML, para poder mostrar el mensaje con las etiquetas <p> */
    $message = htmlspecialchars($_POST['message']);
}
/*************validamos el pais seleccionado para poder enviar los datos a los correos correspondientes de servicio al cliente o soporte ***************/
if($email_subject == "cita") {
    $emailTo = "ventas@blackboxsas.com";
}
else if($email_subject == "info") {
    $emailTo = "servicioalcliente@blackboxsas.com";
}


/*Este es el cuerpo del mensaje tal y como llegará al correo*/
$email_message = "Contenido del Mensaje.\n\n";

function clean_string($string) {
    $bad = array("content-type","bcc:","to:","cc:","href");
    return str_replace($bad,"",$string);
}

$mensaje =  

$email_message .= "Nombre: ".clean_string($name)."\n";

$email_message .= "Email: ".clean_string($email_from)."\n";

$email_message .= "Asunto: ".clean_string($email_subject)."\n";

$email_message .= "Telefono: ".clean_string($phone)."\n";

$email_message .= "Mensaje: ".clean_string($message)."\n";


//Se crean los encabezados del correo

$headers = 'From: '.$email_from."\r\n".

'Reply-To: '.$email_from."\r\n" .

'X-Mailer: PHP/' . phpversion();


if(@mail($emailTo, $email_subject, $email_message, $headers)) {
    /*utilizamos el nombre del usuario para personalizar el mensaje de confirmacion */
    echo "<div>
            <h1>gracias por contactarte con nosotros, $name. Recibirá una respuesta dentro de 48 horas.</h1>
            <a href='index.html'>volver</a>
        </div>";

    /*si alguno de los datos "pais" "asunto del correo" "mensaje" dio como resultado null mostramos este mensaje*/
} else {
    echo "<div>
            <h1>Lo sentimos, $name por favor verifique que <b>TODOS</b> los campos del formulario esten diligenciados correctamente.</h1>
            <a href='index.html'>volver</a>
        </div>";
}
/*control de exepcion por si no llega a funcionar por algun factor externo a este formulario mostramos este mensaje*/
} else {
echo "<div>
        <h1>Algo salió mal, $name por favor vuelve a diligenciar el formulario.</h1>
        <a href='index.html'>volver</a>
    </div>";
}

?>