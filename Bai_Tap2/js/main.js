var $ = function(value){
    return document.querySelectorAll(value);
}

var value_btn = "conteiner1";

var check = function(value){
    return (isNaN(value) || parseFloat(value) < 0 || value.trim() == "") ? false : true;
}



// document.querySelectorAll("[type='tel']").forEach(item => {
//     item.addEventListener('change', event => {
//     //   $("[data_id='"+item.getAttribute("data_id")+"']")[1].value = item.value;
//     //   value_btn = item.getAttribute("class");
//     // console.log(value_btn);
//     console.log("a")
//   });
// });

// $("[conteiner1_data_btn='"+value_btn+"_btn']")[0].onclick = function(){
//     var sum = 0;
//     var arr_input = Array.from($(".auto_math"));
//     for(let i = 0; i < arr_input.length; i++){
//         sum += parseFloat(arr_input[i].value);
        
//     }
//     $("#result")[0].value = sum;
// }

