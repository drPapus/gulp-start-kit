<?php
$fio = $_POST['fio'];
$target = $_POST['target']
$date = $_POST['date']
$number_auto = $_POST['number_auto']
$extra = $_POST['extra']
$phone = $_POST['phone'];
$fio = htmlspecialchars($fio);
$target = htmlspecialchars($target)
$phone = htmlspecialchars($phone);
$date = htmlspecialchars($date);
$number_auto = htmlspecialchars($number_auto);
$extra = htmlspecialchars($extra);
$fio = urldecode($fio);
$target = urldecode($target)
$phone = urldecode($phone);
$date = urldecode($date);
$number_auto = urldecode($number_auto);
$extra = urldecode($extra);
$fio = trim($fio);
$target = trim($target)
$phone = trim($phone);
$date = trim($date);
$number_auto = trim($number_auto);
$extra = trim($extra);
//echo $fio;
//echo "<br>";
//echo $phone;
//echo $date;
//echo $number_auto;
//echo $extra;

if (mail("zubets.andriy@gmail.com", "Заявка с сайта", "ФИО:".$fio.". Тема: ".$target.". Дата: ".$date.". Телефон: ".$phone.". Номер авто: ".$number_auto.". Пожелания к визиту: ".$extra. ,"From: zubets.andriy@gmail.com \r\n"))
 {     echo "сообщение успешно отправлено"; 
} else { 
    echo "при отправке сообщения возникли ошибки";
}?>