var $ = function(value){
    return document.querySelectorAll(value);
}

var check = function(value){
    return (isNaN(value) || parseFloat(value) < 0 || value.trim() == "") ? false : true;
}

function input_change(value){
    var sum = 0;
    var arr_input = Array.from($("[data_id='"+value+"']"));
    for(let i = 0; i < arr_input.length; i++){
            sum += parseFloat(arr_input[i].value);
            $("[number_result='"+value+"']")[0].value = sum;
        
    }
    
}

document.querySelectorAll("[type='tel']").forEach(item => {
    item.addEventListener('change', event => {
        input_change(item.getAttribute("data_id"))
  });
});

