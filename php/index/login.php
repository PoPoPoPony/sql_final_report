<?php
    include "../connect_db.php";
    $conn = connect_db();

    $account=$_POST['account'];
    $pwd=$_POST['pwd'];
    
    function certification($conn, $account, $pwd){
        $sql="select password from login_info where account = '$account'";
        
        $result=sqlsrv_query($conn,$sql)or die("sql error".sqlsrv_errors());
        $row=sqlsrv_fetch_array($result);

        if(trim($row['password']) == $pwd){
            echo "1";
        } 
        else{
            echo "0";
        } 
    };

    if($account && $pwd){
        certification($conn, $account, $pwd);
    } 
?>