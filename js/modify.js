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

$(document).ready(function(){
    $('.datepicker').datepicker();
    var account = location.href.split("=")[1]
    $.ajax({
        type: "POST",
        url: "../php/modify/fetch_form_data.php",
        data: {
            "account": account, 
        },
        success: function (result) {
            //new Function(result)();
            $("#dep").val(result.split("***")[0])
            $("#grade").val(result.split("***")[1])
            $("#S_ID").val(result.split("***")[2])
            $("#name").val(result.split("***")[3])
            $("#sex").val(result.split("***")[4])
            $("#ID").val(result.split("***")[5])
            $("#bDate").val(result.split("***")[6])
            $("#email").val(result.split("***")[7])
            $("#phone").val(result.split("***")[8])

            var condition = result.split("***")[9]
            var time = result.split("***")[10]
            var unit = result.split("***")[11]
            
            $("#teacher").val(result.split("***")[12])
            $("#f_count").val(result.split("***")[13])
            $("#s_count").val(result.split("***")[14])
            $("#w_count").val(result.split("***")[15])
            $("#career").val(result.split("***")[16])
            $("#income").val(result.split("***")[17])
            $("#other").val(result.split("***")[18])
            
            var wish = result.split("***")[19]

            $("#a_score_1").val(result.split("***")[20])
            $("#a_score_2").val(result.split("***")[21])
            $("#c_score_1").val(result.split("***")[22])
            $("#c_score_2").val(result.split("***")[23])

            var L_ID = result.split("***")[24]

            if(condition){
                for(i=0 ; i<condition.split(",").length - 1 ; i++){
                    $("input[name='condition']:eq(" + (parseInt(condition.split(",")[i]) - 1).toString() + ")").attr('checked','true');
                }
            }

            if(time){
                for(i=0 ; i<time.split(",").length - 1 ; i++){
                    $("input[name='time']:eq(" + (parseInt(time.split(",")[i]) - 1).toString() + ")").attr('checked','true');
                }
            }

            if(unit){
                for(i=0 ; i<unit.split(",").length - 1 ; i++){
                    $("input[name='unit']:eq(" + (parseInt(unit.split(",")[i]) - 1).toString() + ")").attr('checked','true');
                }
            }

            if(wish){
                for(i=0 ; i<wish.split(",").length - 1 ; i++){
                    $("input[name='wish']:eq(" + (parseInt(wish.split(",")[i]) - 1).toString() + ")").attr('checked','true');
                }
            }
                
        }
    });
    
    update_table(account)
    
});

$("#search_table1").on("click", "tr", function() {
    $("#search_table1>tbody>tr").removeClass("selected")
    $(this).addClass("selected")
    var idx = $(this).index();
    $("#search_table2>tbody>tr").removeClass("selected")
    $("#search_table2>tbody>tr:eq(" + idx + ")").addClass("selected")  

    update_form()

})

$("#search_table2").on("click", "tr", function() {
    $("#search_table2>tbody>tr").removeClass("selected")
    $(this).addClass("selected")
    var idx = $(this).index();
    $("#search_table1>tbody>tr").removeClass("selected")
    $("#search_table1>tbody>tr:eq(" + idx + ")").addClass("selected")  

    update_form()
})


$("#modify").on("click", function(){
    var selected_L_ID = $("#search_table2>tbody>tr[class='selected']").find("td:eq(12)").text();
    
    var unit = ""
    $("input:checkbox[name=unit]:checked").each(function(){
        unit += $(this).val();
        unit += ","
    });

    var time = ""
    $("input:checkbox[name=time]:checked").each(function(){
        time += $(this).val();
        time += ","
    });

    var condition = ""
    $("input:checkbox[name=condition]:checked").each(function(){
        condition += $(this).val();
        condition += ","
    });

    var teacher = $("#teacher").val()

    var wish = ""
    $("input:checkbox[name=wish]:checked").each(function(){
        wish += $(this).val();
        wish += ","
    });
    var other = $("#other").val()

    $.ajax({
        type: "POST",
        url: "../php/modify/update_data.php",
        data: {
            "L_ID": selected_L_ID,
            "unit": unit,
            "time": time,
            "condition": condition,
            "teacher": teacher,
            "wish": wish,
            "other": other,
        },
        success: function (result){
            //new Function(result)();
            M.toast({html: 'Modify success!', classes: 'rounded'});
            var account = location.href.split("=")[1]
            update_table(account)
        }
    });




})

function update_form(){
    $("#dep").val($("#search_table1>tbody>tr[class='selected']>td:eq(0)").text())
    $("#grade").val($("#search_table1>tbody>tr[class='selected']>td:eq(1)").text())
    $("#S_ID").val($("#search_table1>tbody>tr[class='selected']>td:eq(2)").text())
    $("#name").val($("#search_table1>tbody>tr[class='selected']>td:eq(3)").text())
    $("#sex").val($("#search_table1>tbody>tr[class='selected']>td:eq(4)").text())
    $("#ID").val($("#search_table1>tbody>tr[class='selected']>td:eq(5)").text())
    $("#bDate").val($("#search_table1>tbody>tr[class='selected']>td:eq(6)").text())
    $("#email").val($("#search_table1>tbody>tr[class='selected']>td:eq(7)").text())
    $("#phone").val($("#search_table1>tbody>tr[class='selected']>td:eq(8)").text())

    var condition = $("#search_table1>tbody>tr[class='selected']>td:eq(9)").text()
    var time = $("#search_table1>tbody>tr[class='selected']>td:eq(10)").text()
    var unit = $("#search_table1>tbody>tr[class='selected']>td:eq(11)").text()
    
    $("#teacher").val($("#search_table2>tbody>tr[class='selected']>td:eq(0)").text())
    $("#f_count").val($("#search_table2>tbody>tr[class='selected']>td:eq(1)").text())
    $("#s_count").val($("#search_table2>tbody>tr[class='selected']>td:eq(2)").text())
    $("#w_count").val($("#search_table2>tbody>tr[class='selected']>td:eq(3)").text())
    $("#career").val($("#search_table2>tbody>tr[class='selected']>td:eq(4)").text())
    $("#income").val($("#search_table2>tbody>tr[class='selected']>td:eq(5)").text())
    $("#other").val($("#search_table2>tbody>tr[class='selected']>td:eq(6)").text())
    
    var wish = $("#search_table2>tbody>tr[class='selected']>td:eq(7)").text()

    $("#a_score_1").val($("#search_table2>tbody>tr[class='selected']>td:eq(8)").text())
    $("#a_score_2").val($("#search_table2>tbody>tr[class='selected']>td:eq(9)").text())
    $("#c_score_1").val($("#search_table2>tbody>tr[class='selected']>td:eq(10)").text())
    $("#c_score_2").val($("#search_table2>tbody>tr[class='selected']>td:eq(11)").text())


    if(condition){
        $("input[type='checkbox'][name='condition']").attr("checked", false);
        for(i=0 ; i<condition.split(",").length - 1 ; i++){
            $("input[name='condition']:eq(" + (parseInt(condition.split(",")[i]) - 1).toString() + ")").attr('checked','true');
        }
    }

    if(time){
        $("input[type='checkbox'][name='time']").attr("checked", false);
        for(i=0 ; i<time.split(",").length - 1 ; i++){
            $("input[name='time']:eq(" + (parseInt(time.split(",")[i]) - 1).toString() + ")").attr('checked','true');
        }
    }

    if(unit){
        $("input[type='checkbox'][name='unit']").attr("checked", false);
        for(i=0 ; i<unit.split(",").length - 1 ; i++){
            $("input[name='unit']:eq(" + (parseInt(unit.split(",")[i]) - 1).toString() + ")").attr('checked','true');
        }
    }

    if(wish){
        $("input[type='checkbox'][name='wish']").attr("checked", false);
        for(i=0 ; i<wish.split(",").length - 1 ; i++){
            $("input[name='wish']:eq(" + (parseInt(wish.split(",")[i]) - 1).toString() + ")").attr('checked','true');
        }
    }
}

function update_table(account){
    $.ajax({
        type: "POST",
        url: "../php/modify/fetch_table_data.php",
        data: {
            "account": account, 
        },
        success: function (result2){
            //new Function(result)();
            var insert_html1 = ""
            var insert_html2 = ""
            //-1 去掉split後的空白
            for(i=0 ; i < result2.split("%%%").length - 1 ; i++){
                if(result2.split("%%%")[i]){
                    if(i == 0){
                        insert_html1 += "<tr class = 'selected'>"
                        insert_html2 += "<tr class = 'selected'>"
                    }
                    else{
                        insert_html1 += "<tr>"
                        insert_html2 += "<tr>"
                    }
                    
                    for(j=0 ; j < result2.split("%%%")[i].split("***").length ; j++){
                        if(result2.split("%%%")[i].split("***")[j]){
                            if(j < 12){
                                insert_html1 += "<td>"
                                insert_html1 += result2.split("%%%")[i].split("***")[j]
                                insert_html1 += "</td>"
                            }
                            else{
                                insert_html2 += "<td>"
                                insert_html2 += result2.split("%%%")[i].split("***")[j]
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