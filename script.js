var GetDrugs = function () {
    var getDrugInfo = function(fileName){
        $.ajax({url: "drug_soup/" + fileName + ".html", success: function(result){
            $("#messages").prepend(result);
            
        }});
        
    };    
    
    var getDrugNames = function(searchWord){
        $.ajax({url: "drug_names/" + searchWord + ".html", success: function(result){
            
            $("#tester").empty();
            $("#tester").append("<span class='btn btn-danger'>Clear All</span>");
            $("#tester").append("<span class='btn btn-warning'>Clear Med Names</span>");
            $("#tester").append(result);
        }});
    };
        
    return {
        getDrugInfo : getDrugInfo,
        getDrugNames : getDrugNames
        
    };
}();




var Events = function(getDrugs){
    var clickLetter = function(){
        $(".btn").click(function(){
            fileName = this.innerHTML;
            getDrugs.getDrugNames(fileName);
        });
    };
    
    var clickClearAll = function(){
        $(document.body).on("click", ".btn-danger", function(){
            $("#tester").empty();
            $("#messages").empty();
        });
        
    };
    
    var clickClearNames = function(){
        $(document.body).on("click", ".btn-warning", function(){
            $("#tester").empty();
        });
    };
    
    var clickDrugName = function(){
        $(document.body).on("click", "span", function(){
            fileName = this.innerHTML;
            $(this).css("background-color", "#95d095");
            getDrugs.getDrugInfo(fileName);
        });
        
    };
    
    var searchFormKeyEvent = function(){
        
        $("#search-form").keyup(function(){
            var searchWord = $(this).val();
            if(searchWord.length == 1){
                getDrugs.getDrugNames(searchWord);
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
    };
    
    var init = function(){
        clickLetter();
        clickClearAll();
        clickClearNames();
        clickDrugName();
        searchFormKeyEvent();
    };
    
    return {
        init : init
    };
    
}(GetDrugs);

Events.init();






