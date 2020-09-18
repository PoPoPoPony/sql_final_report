<?php
    include "../connect_db.php";
    $conn = connect_db();

    $account=$_POST['account'];
    
    $sql="select stu.ID, name, sex, bDate, phone, email, r.S_ID, grade, dep, a.score_1, a.score_2, c.score_1, c.score_2
    FROM student_info as stu, register_info as r, login_info as l, academic_score as a, conduct_score as c
    WHERE account = '$account'
    AND stu.ID = r.ID
    AND r.S_ID = l.S_ID
    AND a.S_ID = r.S_ID
    AND c.S_ID = r.S_ID";
    
    $result=sqlsrv_query($conn,$sql)or die("sql error".sqlsrv_errors());
    $row=sqlsrv_fetch_array($result);


    for($i=0 ; $i<12 ; $i++){
        echo trim($row[$i]);
        echo '***';
    };

    echo trim($row[12])
?>