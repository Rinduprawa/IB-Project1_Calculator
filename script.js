var i = document.getElementById('output');
var op = document.getElementById('operator');

function inputAngka(y){
    if(i.value=="0"){
        i.value =y;
        addOperator(y);
    }else{
        i.value += y;
        addOperator(y);
    }   
}
function c(){
    i.value="";
    r();
}
function del(){
    i.value = i.value.substr(0,i.value.length - 1);
}
function r(){
    if(i.value == ""){
        i.value = "0";
    }
}
function plusmin(){
    if (i.value.charAt(0) === "-") {
      i.value = i.value.slice(1);
    } else {
        i.value = "-" + i.value;
    }
}
function persen() {
    i.value = i.value / 100;
}

function opDouble(op){
    if(op += 1 ){
        op.splice(0,1);
    }
}
function hasil(){
    i.value = eval(i.value);
}
