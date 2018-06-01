$(document).ready(function() {
    
    $content = $(".content");
    let objectCode = []
    if(JSON.parse(localStorage.getItem("objectCode") != null)){
        objectCode =  JSON.parse(localStorage.getItem("objectCode"))
        console.log(objectCode)
    }
   
    $('.setData').on('click',function(){
        let code = $('.textField').val()
        let name = $('.nameSnippet').val();
       
        if(name!="" && code!= ""){
            let newCodeObj = {};
                newCodeObj["name"]= name;
                newCodeObj["code"]= code;
                objectCode.unshift(newCodeObj)
              
                localStorage.setItem("objectCode", JSON.stringify(objectCode))
                $('.textField').val("")
                $('.nameSnippet').val("")

                load(JSON.parse(localStorage.getItem("objectCode")));
        }else{
            alert("Can't empty")
        }
    });

    $('.getData').on('click',function(){
        load(JSON.parse(localStorage.getItem("objectCode")));
    });

    let load = function(obj){

        $content.html("")
        // iterate the array
        obj.forEach(element => {
            //create our html and add it to the dom 
            $class = `<div class="item">
            <div class="name"> ${element.name} </div>
           <div class="code">  ${element.code} </div> 
            <div class="del" name="${element.name}">
                Delete
            </div>
        </div>`;
        $content.append($class);
        });
   
    }
    
    load(JSON.parse(localStorage.getItem("objectCode")));

    // var del = document.getElementsByClassName("del")
    
    $('.del').on('click',function(){
        let delo = $(this).attr('name')
        alert(delo)
    })

    $('.seachField').on('keyup',function(){
            let searchValue = $(this).val()
            let obj = JSON.parse(localStorage.getItem("objectCode")).filter(function(element){
                return element.name === searchValue.trim("")
            });
            if(obj.length==0){
                obj = JSON.parse(localStorage.getItem("objectCode"))
            }
        
            $content.html("")
            // iterate the array
            obj.forEach(element => {
                //create our html and add it to the dom 
                $class = `<div class="item">
                <div class="name"> ${element.name} </div>
                <div class="code"> ${element.code} </div>
                <div class="del" name="${element.name}">
                    Delete
                </div>
            </div>`;
            $content.append($class);
        });
    })
    
});


