<?php
    //установка локали и даты
setlocale(LC_ALL, "russian");
$day = strftime('%d');
$mon = strftime('%B');
$mon = iconv('windows-1251','utf-8', $mon);
$year = strftime('%y');
?>
<!DOCTYPE HTML>
<html>
    <head>
    </head>
    <body>
        
        <blockquote>
        <?php
        //вывод даты и времени
        //echo strftime('Сегодня %d-%m-%y');
        echo 'Сегодня',$day,$mon,$year;
        ?>
        </blockquote>

        <?php
        //определение констант
        define("AAA","100");
        const BBB=200;
        echo AAA,'<br>';
        echo BBB;
        ?>
        <?php
        ?>
    </body>
</html>