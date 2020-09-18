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
