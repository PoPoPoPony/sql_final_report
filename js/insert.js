$(document).ready(function(){
    $('.datepicker').datepicker();
    if(location.href.split("=")[1]){
        var account = location.href.split("=")[1]
        $.ajax({
            type: "POST",
            url: "../php/insert/fetch_data.php",
            data: {
                "account": account, 
            },
            success: function (result) {
                //new Function(result)();
                $("#ID").val(result.split("***")[0])
                $("#name").val(result.split("***")[1])
                $("#sex").val(result.split("***")[2])
                $("#bDate").val(result.split("***")[3])
                $("#phone").val(result.split("***")[4])
                $("#email").val(result.split("***")[5])
                $("#S_ID").val(result.split("***")[6])
                $("#grade").val(result.split("***")[7])
                $("#dep").val(result.split("***")[8])
                $("#a_score_1").val(result.split("***")[9])
                $("#a_score_2").val(result.split("***")[10])
                $("#c_score_1").val(result.split("***")[11])
                $("#c_score_2").val(result.split("***")[12])
            }
        });

    }
    else{
        return;
    }
    
    

});


$("#send").on("click", function(){
    var condition = ""
    $("input:checkbox[name=condition]:checked").each(function(){
        condition += $(this).val();
        condition += ","
    });

    // 0代表都沒有選
    if(!condition){
        condition="0"
    }

    var a_score_1 = $("#a_score_1").val()
    var a_score_2 = $("#a_score_2").val()
    var c_score_1 = $("#c_score_1").val()
    var c_score_2 = $("#c_score_2").val()

    if(!a_score_1){
        $('html,body').animate({scrollTop:$('#a_score_1').offset().top}, 1000);
        M.toast({html: '請填入您第一學期的學業成績!', classes: 'rounded'});
        return;
    }

    if(!a_score_2){
        $('html,body').animate({scrollTop:$('#a_score_2').offset().top}, 1000);
        M.toast({html: '請填入您第二學期的學業成績!', classes: 'rounded'});
       
        return;
    }
    if(!c_score_1){
        $('html,body').animate({scrollTop:$('#c_score_1').offset().top}, 1000);
        M.toast({html: '請填入您第一學期的操行成績!', classes: 'rounded'});
        return;
    }

    if(!c_score_2){
        $('html,body').animate({scrollTop:$('#c_score_2').offset().top}, 1000);
        M.toast({html: '請填入您第二學期的操行成績!', classes: 'rounded'});
        return;
    }

    var time = ""
    $("input:checkbox[name=time]:checked").each(function(){
        time += $(this).val();
        time += ","
    });

    if(!time){
        M.toast({html: '請選擇您的可工讀時間!', classes: 'rounded'});
        alert(time)
        return;
    }

    var unit = ""
    $("input:checkbox[name=unit]:checked").each(function(){
        unit += $(this).val();
        unit += ","
    });


    if(!unit){
        M.toast({html: '請選擇您的擬工讀單位!', classes: 'rounded'});
        return;
    }

    var teacher = $("#teacher").val()
    var f_count = $("#f_count").val()
    var s_count = $("#s_count").val()
    var w_count = $("#w_count").val()
    var career = $("#career").val()
    var income = $("#income").val()
    var other = $("#other").val()

    if(!teacher){
        $('html,body').animate({scrollTop:$('#teacher').offset().top}, 1000);
        M.toast({html: '請填入您導師的簽章!', classes: 'rounded'});
        return;
    }

    if(!f_count){
        $('html,body').animate({scrollTop:$('#f_count').offset().top}, 1000);
        M.toast({html: '請填入您家庭的人數!', classes: 'rounded'});
        return;
    }

    if(!s_count){
        $('html,body').animate({scrollTop:$('#s_count').offset().top}, 1000);
        M.toast({html: '請填入您家庭中就學的人數!', classes: 'rounded'});
        return;
    }

    if(!w_count){
        $('html,body').animate({scrollTop:$('#w_count').offset().top}, 1000);
        M.toast({html: '請填入您家庭中工作的人數!', classes: 'rounded'});
        return;
    }

    if(!career){
        $('html,body').animate({scrollTop:$('#career').offset().top}, 1000);
        M.toast({html: '請填入您家長的職業!', classes: 'rounded'});
        return;
    }

    if(!income){
        $('html,body').animate({scrollTop:$('#income').offset().top}, 1000);
        M.toast({html: '請填入您家庭的收入情形!', classes: 'rounded'});
        return;
    }

    if(!other){
        other=NaN
    }
     


    var wish = ""
    $("input:checkbox[name=wish]:checked").each(function(){
        wish += $(this).val();
        wish += ","
    });

    if(!wish){
        M.toast({html: '請選擇您的工作志願與專長!', classes: 'rounded'});
        return;
    }

    var S_ID = $("#S_ID").val()
    var ID = $("#ID").val()




    $.ajax({
        type: "POST",
        url: "../php/insert/insert.php",
        data: {
            "condition": condition,
            "a_score_1": a_score_1,
            "a_score_2": a_score_2,
            "c_score_1": c_score_1,
            "c_score_2": c_score_2,
            "time": time,
            "unit": unit,
            "teacher": teacher,
            "f_count": f_count,
            "s_count": s_count,
            "w_count": w_count,
            "career": career,
            "income": income,
            "other": other,
            "wish": wish,
            "S_ID": S_ID,
            "ID": ID,
        },
        success: function (result) {
            //new Function(result)();
            M.toast({html: 'Submit success!', classes: 'rounded'});
        }
    });




})



$("#icon_insert").on("click", function(){
    window.location.href = "http://127.0.0.1/final_report/html/insert.html?a=" + location.href.split("=")[1]
})

$("#icon_search").on("click", function(){
    window.location.href = "http://127.0.0.1/final_report/html/search.html?a=" + location.href.split("=")[1]
})

$("#icon_diagram").on("click", function(){
    window.location.href = "http://127.0.0.1/final_report/html/diagram.html?a=" + location.href.split("=")[1]
})

$("#icon_modify").on("click", function(){
    window.location.href = "http://127.0.0.1/final_report/html/modify.html?a=" + location.href.split("=")[1]
})

