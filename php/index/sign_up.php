<?php
    include '../connect_db.php';
    $conn = connect_db();

    $s_id=$_POST['s_id'];
    $id=$_POST['id'];
    $bDate=$_POST['bDate'];
    $s_account=$_POST['s_account'];
    $s_pwd=$_POST['s_pwd'];
    
    function create($conn, $s_id, $id, $bDate, $s_account, $s_pwd){
        $sql="select S_ID, student_info.ID, bDate from student_info, register_info where S_ID = '$s_id' AND student_info.ID = '$id' AND bDate = '$bDate'";
        $result=sqlsrv_query($conn,$sql)or die("sql error".sqlsrv_errors());
        $row=sqlsrv_fetch_array($result);

        if($row){
            $sql2="select account, password from login_info where S_ID = '$s_id'";
            $result2=sqlsrv_query($conn,$sql2)or die("sql error".sqlsrv_errors());
            $row2=sqlsrv_fetch_array($result2);
            if($row2){
                //0 : student has already create an account
                echo "0";
            }
            else{
                $sql3="insert into login_info values('$s_account', '$s_pwd', '$s_id')";
                sqlsrv_query($conn,$sql3)or die("sql error".sqlsrv_errors());
                
                $sql4="select account, password from login_info where S_ID = '$s_id'";
                $result4=sqlsrv_query($conn,$sql4)or die("sql error".sqlsrv_errors());
                $row4=sqlsrv_fetch_array($result4);
                if($row4){
                    //1 : create success!
                    echo "1";
                }
                else{
                    //-1 : create fail, please try again
                    echo "-1";
                }
            }
        } 
        else{
            //-2 : student not found
            echo "-2";
        } 
        
        
        
        
    };

    create($conn, $s_id, $id, $bDate, $s_account, $s_pwd)

    



?>