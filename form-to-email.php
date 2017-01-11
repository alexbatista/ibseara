<?php
if(!isset($_POST['submit']))
{
	//This page should not be accessed directly. Need to submit the form.
	echo "Erro! Você precisa submeter o formulário.";
}
$assunto = $_POST['assunto'];
$name = $_POST['name'];
$endereco = $_POST['endereco'];
$bairro = $_POST['bairro'];
$telefone1 = $_POST['telefone1'];
$telefone2 = $_POST['telefone2'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

//Validate first
if(empty($name)||empty($visitor_email))
{
    echo "Nome e email são obrigatórios!";
    exit;
}

if(IsInjected($visitor_email))
{
    echo "Email inválido!";
    exit;
}

$email_from = 'tom@amazing-designs.com';//<== update the email address
// $email_subject = "New Form submission";
$email_body = "Dados do contato:\n Nome:$name\n".
    "Endereço: $endereco\n".
    "Bairro: $bairro\n".
    "Telefone1: $telefone1\n".
    "Telefone2: $telefone2\n".
    "Email: $visitor_email\n".
    "Here is the message:\n $message";

$to = "tom@amazing-designs.com";//<== update the email address
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";
//Send the email!
mail($to,$assunto,$email_body,$headers);
//done. redirect to thank-you page.
header('Location: thank-you.html');


// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}

?>
