
$("#search-form").keyup(function(){
    var searchWord = $(this).val();
    console.log(searchWord);
    if(searchWord.length == 1){
        $.ajax({url: "drug_names/" + searchWord + ".html", success: function(result){
            
            $("#tester").empty();
            $("#tester").append("<span class='btn btn-danger'>Clear All</span>");
            $("#tester").append("<span class='btn btn-warning'>Clear Med Names</span>");
            $("#tester").append(result);
         }});
    }
    
    if(searchWord.length > 1){
        $("#tester .btn-success").each(function(){
            $(this).hide();
          if(this.innerHTML.search(searchWord.toUpperCase()) == 0){
              $(this).show();
          }
        });
    }  
    
    if(searchWord.length == 0){
        $("#tester").empty();
    }

});



$(".btn").click(function(){
    fileName = this.innerHTML;
    $.ajax({url: "drug_names/" + fileName + ".html", success: function(result){
        $("#tester").empty();
        $("#tester").append("<span class='btn btn-danger'>Clear List</span>");
        $("#tester").append("<span class='btn btn-warning'>Clear Med Names</span>");
        $("#tester").append(result);
    }});
});

$(document.body).on("click", ".btn-danger", function(){
    $("#tester").empty();
    $("#messages").empty();
});

$(document.body).on("click", ".btn-warning", function(){
    $("#tester").empty();
});

$(document.body).on("click", "span", function(){
    fileName = this.innerHTML;
    $(this).css("background-color", "#95d095");
    $.ajax({url: "drug_soup/" + fileName + ".html", success: function(result){
        $("#messages").prepend(result);
        
    }});
});




