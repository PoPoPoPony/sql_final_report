$(document).ready(function(){
    $('.slider').slider({
        "height": 700,
    });
    $('.datepicker').datepicker();
});



$("#to_sign_up").click(function(){
    $('html,body').animate({scrollTop:$('#sign_up_panel_container').offset().top}, 800);     
})

$("#nav_sign_up").click(function(){
    $('html,body').animate({scrollTop:$('#sign_up_panel_container').offset().top}, 800); 
})


$("#login").on("click", function(){
    var account = $("#account").val()
    var pwd = $("#pwd").val()

    $.ajax({
        type: "POST",
        url: "../php/index/login.php",
        data: {
            "account": account, 
            "pwd": pwd
        },
        success: function (result) {
            //new Function(result)();
            if(result == '1'){
                window.location.href = "http://127.0.0.1/final_report/html/insert.html?a=" + account
            }
            else{
                M.toast({html: 'Login Fail!', classes: 'rounded white red-text'});
                $("#account").val(account)
                $("#pwd").val("")
            }
        }
    });
})


$("#sign_up").on("click", function(){
    var s_id = $("#s_id").val()
    var id = $("#id").val()
    var bDate = $("#bDate").val()
    var s_account = $("#s_account").val()
    var s_pwd = $("#s_pwd").val()

    $.ajax({
        type: "POST",
        url: "../php/index/sign_up.php",
        data: {
            "s_id": s_id, 
            "id": id,
            "bDate": bDate,
            "s_account": s_account,
            "s_pwd": s_pwd,
        },

        success: function (result) {
            if(result == '1'){
                M.toast({html: 'Create account success!', classes: 'rounded white black-text'});
                $("#s_id").val()
                $("#id").val()
                $("#bDate").val()
                $("#s_account").val()
                $("#s_pwd").val()
                $('html,body').animate({scrollTop:$('nav').offset().top}, 800); 
            }
            else if(result == '0'){
                M.toast({html: 'Student has already create an account', classes: 'rounded white black-text'});
                $("#s_id").val()
                $("#id").val()
                $("#bDate").val()
                $("#s_account").val()
                $("#s_pwd").val()
                $('html,body').animate({scrollTop:$('nav').offset().top}, 800);
            }

            else if(result == '-1'){
                M.toast({html: 'Create fail, Please try again', classes: 'rounded white red-text'});
            }
            else{
                M.toast({html: 'Student not found', classes: 'rounded white black-text'});
            }
        }
    });
})


    
