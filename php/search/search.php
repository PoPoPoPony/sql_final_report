<?php
    include "../connect_db.php";
    $conn = connect_db();

    $dep=$_POST['dep'];
    $grade=$_POST['grade'];
    $S_ID=$_POST['S_ID'];
    $name=$_POST['name'];
    $sex=$_POST['sex'];
    $ID=$_POST['ID'];
    $bDate=$_POST['bDate'];
    $email=$_POST['email'];
    $phone=$_POST['phone'];
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

    

    $sql = "select dep, grade, register_info.S_ID, name, sex, student_info.ID, bDate, email, phone, condition, time, unit, teacher, f_count, s_count, w_count, career, income, other, wish, academic_score.score_1, academic_score.score_2, conduct_score.score_1, conduct_score.score_2, L_ID ";  
    $sql .= "From student_info, register_info, family, academic_score, conduct_score, list where ";
    
    if($dep){
        $sql .= "dep = '$dep' AND ";
    };

    if($grade){
        $sql .= "grade = '$grade' AND ";
    };

    if($S_ID){
        $sql .= "register_info.S_ID = '$S_ID' AND ";
    };

    if($name){
        $sql .= "name = '$name' AND ";
    };

    if($sex){
        $sql .= "sex = '$sex' AND ";
    };

    if($ID){
        $sql .= "student_info.ID = '$ID' AND ";
    };

    if($bDate){
        $sql .= "bDate = '$bDate' AND ";
    };
 
    if($email){
        $sql .= "email = '$email' AND ";
    };

    if($phone){
        $sql .= "phone = '$phone' AND ";
    };

    if($condition){
        $sql .= "condition = '$condition' AND ";
    };

    if($time){
        $sql .= "time = '$time' AND ";
    };

    if($unit){
        $sql .= "unit = '$unit' AND ";
    };

    if($teacher){
        $sql .= "teacher = '$teacher' AND ";
    };

    if($f_count){
        $sql .= "f_count = '$f_count' AND ";
    };

    if($s_count){
        $sql .= "s_count = '$s_count' AND ";
    };

    if($w_count){
        $sql .= "w_count = '$w_count' AND ";
    };

    if($career){
        $sql .= "career = '$career' AND ";
    };

    if($income){
        $sql .= "income = '$income' AND ";
    };

    if($other){
        $sql .= "other = '$other' AND ";
    };
   
    if($wish){
        $sql .= "wish = '$wish' AND ";
    };

    if($a_score_1){
        $sql .= "academic_score.score_1 = '$a_score_1' AND ";
    };

    if($a_score_2){
        $sql .= "academic_score.score_2 = '$a_score_2' AND ";
    };

    if($c_score_1){
        $sql .= "conduct_score.score_1 = '$c_score_1' AND ";
    };

    if($c_score_2){
        $sql .= "conduct_score.score_2 = '$c_score_2' AND ";
    };

    $sql .= " student_info.ID = register_info.ID AND family.ID = student_info.ID AND academic_score.S_ID = register_info.S_ID AND ";
    $sql .= "conduct_score.S_ID = register_info.S_ID AND list.S_ID = register_info.S_ID";

    $result=sqlsrv_query($conn,$sql)or die("sql error".sqlsrv_errors());

    /*
    if($result == false){
        echo 123;
    };
    
    echo $result;
    
    exit;
    */

    while($row=sqlsrv_fetch_array($result)){
        for($i=0 ; $i < 25; $i +=1 ){
            echo trim($row[$i]);
            echo "***";
        }
        echo '%%%';
    };

    /*
    $row=sqlsrv_fetch_array($result);
    for($i=0 ; $i < 20; $i +=1 ){
        echo $row[$i];
    }
    */
    

    
?>