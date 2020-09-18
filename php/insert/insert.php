<?php
    include "../connect_db.php";
    $conn = connect_db();

    $condition=$_POST['condition'];
    $a_score_1=$_POST['a_score_1'];
    $a_score_2=$_POST['a_score_2'];
    $c_score_1=$_POST['c_score_1'];
    $c_score_2=$_POST['c_score_2'];
    $time=$_POST['time'];
    $unit=$_POST['unit'];
    $teacher=$_POST['teacher'];
    $f_count=$_POST['f_count'];
    $s_count=$_POST['s_count'];
    $w_count=$_POST['w_count'];
    $career=$_POST['career'];
    $income=$_POST['income'];
    $other=$_POST['other'];
    $wish=$_POST['wish'];
    $S_ID=$_POST['S_ID'];
    $ID=$_POST['ID'];
  
    $sql="select top 1 L_ID from list order by L_ID desc";
    $result=sqlsrv_query($conn,$sql)or die("sql error".sqlsrv_errors());
    $row=sqlsrv_fetch_array($result);

    $L_ID = (int)$row[0] + 1;

    $sql="insert into list values('$L_ID', '$unit', '$time', '$condition', '$teacher', '$wish', '$other', '$S_ID')";
    $result=sqlsrv_query($conn,$sql)or die("sql error".sqlsrv_errors());

    $sql="insert into academic_score values('$a_score_1', '$a_score_2', '$S_ID')";
    $result=sqlsrv_query($conn,$sql)or die("sql error".sqlsrv_errors());

    $sql="insert into conduct_score values('$c_score_1', '$c_score_2', '$S_ID')";
    $result=sqlsrv_query($conn,$sql)or die("sql error".sqlsrv_errors());

    $sql="insert into family values('$s_count', '$f_count', '$w_count', '$career', '$income', '$ID')";
    $result=sqlsrv_query($conn,$sql)or die("sql error".sqlsrv_errors());


    
?>