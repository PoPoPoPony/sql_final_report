<?php
    include "../connect_db.php";
    $conn = connect_db();

    $L_ID=$_POST['L_ID'];
    $condition=$_POST['condition'];
    $time=$_POST['time'];
    $unit=$_POST['unit'];
    $teacher=$_POST['teacher'];
    $other=$_POST['other'];
    $wish=$_POST['wish'];
  
    $sql="update list set condition='$condition', time='$time', unit='$unit', teacher='$teacher', other='$other', wish='$wish'";
    $sql.=" where L_ID='$L_ID'";
    $result=sqlsrv_query($conn,$sql)or die("sql error".sqlsrv_errors());
    $row=sqlsrv_fetch_array($result);
    echo $row;
?>