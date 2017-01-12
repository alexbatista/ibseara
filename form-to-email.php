<?php
/**
 * This example shows how to handle a simple contact form.
 */

$msg = '';
//Don't run this unless we're handling a form submission
if (array_key_exists('email', $_POST)) {
    date_default_timezone_set('Etc/UTC');

    require 'PHPMailerAutoload.php';

    //Create a new PHPMailer instance
    $mail = new PHPMailer;
    //Tell PHPMailer to use SMTP - requires a local mail server
    //Faster and safer than using mail()
    $mail->isSMTP();
    $mail->Host = 'smtp.lugarderecomecos.com.br';
    $mail->Port = 587;
	$mail->SMTPAuth = true;                               // Enable SMTP authentication
	$mail->Username = 'contato@lugarderecomecos.com.br';                 // SMTP username
	$mail->Password = 'ibseara123';
    //Use a fixed address in your own domain as the from address
    //**DO NOT** use the submitter's address here as it will be forgery
    //and will cause your messages to fail SPF checks
    $mail->setFrom('contato@lugarderecomecos.com.br', 'NOVO CONTATO - SITE IB SEARA');
    //Send the message to yourself, or whoever should receive contact for submissions
    $mail->addAddress('alexbatista.asb@gmail.com', 'Alex Batista');
	$mail->addAddress('contato@lugarderecomecos.com.br', 'Igreja Batista Seara');
    //Put the submitter's address in a reply-to header
    //This will fail if the address provided is invalid,
    //in which case we should ignore the whole request
    if ($mail->addReplyTo($_POST['email'], $_POST['name'])) {
        $mail->Subject = $_POST['assunto'];
        //Keep it simple - don't use HTML
        $mail->isHTML(false);
        //Build a simple message body
        $mail->Body = <<<EOT
Nome: {$_POST['name']}
Email: {$_POST['email']}
Endereco: {$_POST['endereco']}
Bairro: {$_POST['bairro']}
Telefone1: {$_POST['telefone1']}
Telefone2: {$_POST['telefone2']}
Mensagem: {$_POST['message']}
EOT;
        //Send the message, check for errors
        if (!$mail->send()) {
            //The reason for failing to send will be in $mail->ErrorInfo
            //but you shouldn't display errors to users - process the error, log it on your server.
            $msg = 'Desculpe, algo deu errado. Tente novamente mais tarde.';
        } else {
			header('Location: thank-you.html');
            //$msg = 'Message sent! Thanks for contacting us.';
        }
    } else {
        $msg = 'Endereço de email inválido.';
    }
}
?>
