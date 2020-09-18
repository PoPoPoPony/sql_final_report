<?php
    include "../connect_db.php";
    $conn = connect_db();

    $account=$_POST['account'];
    
    $sql = "select dep, grade, register_info.S_ID, name, sex, student_info.ID, bDate, email, phone, condition, time, unit, teacher, f_count, s_count, w_count, career, income, other, wish, academic_score.score_1, academic_score.score_2, conduct_score.score_1, conduct_score.score_2, L_ID ";
    $sql .= "FROM student_info, register_info, login_info, academic_score, family, list, conduct_score ";
    $sql .= "WHERE account = '$account' AND";
    

    $sql .= " student_info.ID = register_info.ID AND family.ID = student_info.ID AND academic_score.S_ID = register_info.S_ID AND ";
    $sql .= "conduct_score.S_ID = register_info.S_ID AND list.S_ID = register_info.S_ID AND login_info.S_ID = register_info.S_ID ";
    
    $result=sqlsrv_query($conn,$sql)or die("sql error".sqlsrv_errors());

    while($row=sqlsrv_fetch_array($result)){
        for($i=0 ; $i < 25; $i +=1 ){
            echo trim($row[$i]);
            echo "***";
        }
        echo '%%%';
    };
?>