<?php 

$name = $POST['username'];
$phone = $POST['phone'];
// $phone = $POST['email'];


require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.bk.ru';                                                                                              // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'rnaturalis@bk.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'recordsman1451'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, ssl also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('rnaturalis@bk.ru'); // от кого будет уходить письмо?
$mail->addAddress('tvv1st@bk.ru');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
// $mail->addReplyTo('tvv1st@bk.ru', 'Contact Blah');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка на услугу от пользователя';
$mail->Body    = '' .$name . '<br>' .$phone.
$mail->AltBody = '';

if(!$mail->send()) {
    header('Error');
} else {
    header('location: thanks.html');
}
?>