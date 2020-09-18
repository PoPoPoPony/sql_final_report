<?php
    function connect_db(){
        $serverName="localhost\SQLEXPRESS";
        $connectionInfo=array("Database"=>"final_report","UID"=>"PoPoPoPony","PWD"=>"123","CharacterSet"=>"UTF-8");
        $conn=sqlsrv_connect($serverName,$connectionInfo);
        if($conn){
            return $conn;
        }else{
            echo"Error!!!<br />";
            die(print_r(sqlsrv_errors(),true));
        }
    }
?>