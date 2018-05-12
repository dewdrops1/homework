; (function (win) {
    var el;
    win.valid = function (option) {
        el = document.getElementById(option.el);
        for(var item in option.rules){
            value=el[item].value;
            (function(){
                document.getElementById(arguments[0][0].messagetag).innerHTML="";
                document.getElementById(arguments[0][1].messagetag).innerHTML="";
                if(arguments[0][0].reg.test(value)){
                    document.getElementById(arguments[0][0].messagetag).innerHTML=arguments[0][0].message;
                    return ; 
                }else{
                    if(arguments[0][1].reg.test(value)==false){
                        document.getElementById(arguments[0][1].messagetag).innerHTML=arguments[0][1].message;
                        return ; 
                    }
                }
            })(option.rules[item])
        }
    }

})(window);


