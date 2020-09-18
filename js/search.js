$(document).ready(function(){
    $('.datepicker').datepicker();
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



$("#search").on("click", function(){
    var search_data = {}
    
    var dep = $("#dep").val()
    var grade = $("#grade").val()
    var S_ID = $("#S_ID").val()
    var name = $("#name").val()
    var sex = $("#sex").val()
    var ID = $("#ID").val()
    var bDate = $("#bDate").val()
    var email = $("#email").val()
    var phone = $("#phone").val()

    if(dep){
        search_data['dep'] = dep
    }
    
    if(grade){
        search_data['grade'] = grade
    }
    
    if(S_ID){
        search_data['S_ID'] = S_ID
    }

    if(name){
        search_data['name'] = name
    }

    if(sex){
        search_data['sex'] = sex
    }
    
    if(ID){
        search_data['ID'] = ID
    }

    if(bDate){
        search_data['bDate'] = bDate
    }

    if(email){
        search_data['email'] = email
    }

    if(phone){
        search_data['phone'] = phone
    }
    
    var condition = ""
    $("input:checkbox[name=condition]:checked").each(function(){
        condition += $(this).val();
        condition += ","
    });

    if(condition){
        search_data['condition'] = condition
    }
    
    var a_score_1 = $("#a_score_1").val()
    var a_score_2 = $("#a_score_2").val()
    var c_score_1 = $("#c_score_1").val()
    var c_score_2 = $("#c_score_2").val()
    

    if(a_score_1){
        search_data['a_score_1'] = a_score_1
    }

    if(a_score_2){
        search_data['a_score_2'] = a_score_2
    }
    if(c_score_1){
        search_data['c_score_1'] = c_score_1
    }

    if(c_score_2){
        search_data['c_score_2'] = c_score_2
    }
    
    var time = ""
    $("input:checkbox[name=time]:checked").each(function(){
        time += $(this).val();
        time += ","
    });

    if(time){
        search_data['time'] = time
    }
    
    var unit = ""
    $("input:checkbox[name=unit]:checked").each(function(){
        unit += $(this).val();
        unit += ","
    });

    if(unit){
        search_data['unit'] = unit
    }
    
    var teacher = $("#teacher").val()
    var f_count = $("#f_count").val()
    var s_count = $("#s_count").val()
    var w_count = $("#w_count").val()
    var career = $("#career").val()
    var income = $("#income").val()
    var other = $("#other").val()

    if(teacher){
        search_data['teacher'] = teacher
    }

    if(f_count){
        search_data['f_count'] = f_count
    }

    if(s_count){
        search_data['s_count'] = s_count
    }

    if(w_count){
        search_data['w_count'] = w_count
    }

    if(career){
        search_data['career'] = career
    }

    if(income){
        search_data['income'] = income
    }

    if(other){
        search_data['other'] = other
    }
    
    var wish = ""
    $("input:checkbox[name=wish]:checked").each(function(){
        wish += $(this).val();
        wish += ","
    });

    if(wish){
        search_data['wish'] = wish
    }
    
   var dep = $("#dep").val()
   var grade = $("#grade").val()
   var S_ID = $("#S_ID").val()
   var name = $("#name").val()
   var sex = $("#sex").val()
   var ID = $("#ID").val()
   var bDate = $("#bDate").val()
   var email = $("#email").val()
   var phone = $("#phone").val()


    
    if(Object.keys(search_data).length != 0){
        $.ajax({
            type: "POST",
            url: "../php/search/search.php",
            data: {
                // 不會用php處理JSON= =
                "dep": dep,
                "grade": grade,
                "S_ID": S_ID,
                "name": name,
                "sex": sex,
                "ID": ID,
                "bDate": bDate,
                "email": email,
                "phone": phone,
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
            },
            success: function (result) {
                //new Function(result)();
                var insert_html1 = ""
                var insert_html2 = ""
                
                //-1 去掉split後的空白
                for(i=0 ; i < result.split("%%%").length - 1 ; i++){
                    if(result.split("%%%")[i]){
                        insert_html1 += "<tr>"
                        insert_html2 += "<tr>"
                        for(j=0 ; j < result.split("%%%")[i].split("***").length ; j++){
                            if(result.split("%%%")[i].split("***")[j]){
                                if(j < 12){
                                    insert_html1 += "<td>"
                                    insert_html1 += result.split("%%%")[i].split("***")[j]
                                    insert_html1 += "</td>"
                                }
                                else{
                                    insert_html2 += "<td>"
                                    insert_html2 += result.split("%%%")[i].split("***")[j]
                                    insert_html2 += "</td>"
                                }
                            }
                        }
                        insert_html1 += "</tr>"
                        insert_html2 += "</tr>"
                    }
                }

                $("#search_table1>tbody").html(insert_html1)
                $("#search_table2>tbody").html(insert_html2)
            }
        });
    }
    else{
        M.toast({html: '請輸入想查詢的條件!', classes: 'rounded'});
    }
})

$("#search_table1").on("click", "tr", function() {
    $("#search_table1>tbody>tr").removeClass("selected")
    $(this).addClass("selected")
    var idx = $(this).index();
    $("#search_table2>tbody>tr").removeClass("selected")
    $("#search_table2>tbody>tr:eq(" + idx + ")").addClass("selected")  
})

$("#search_table2").on("click", "tr", function() {
    $("#search_table2>tbody>tr").removeClass("selected")
    $(this).addClass("selected")
    var idx = $(this).index();
    $("#search_table1>tbody>tr").removeClass("selected")
    $("#search_table1>tbody>tr:eq(" + idx + ")").addClass("selected")  
})
