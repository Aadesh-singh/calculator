
    document.getElementById('display').innerHTML = "0";
function forclear(){
    document.getElementById('display').innerHTML = "0";
    
}
function removeZero(){
    var value = document.getElementById('display').innerHTML;
    if( value == "0"){
        value = " ";
        document.getElementById('display').innerHTML = value;
    }
}

function mod(){
    var value = document.getElementById('display').innerHTML;
    value /= 100;
    document.getElementById('display').innerHTML = value;
}

function forDisplay(value){
    removeZero();
    document.getElementById('display').innerHTML += value;
}

function solve(){
    removeZero();
    var equation = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = eval(equation);
}

function sq (){
    removeZero();
    var value = document.getElementById('display').innerHTML;
    var res = Math.sqrt(value);
    document.getElementById('display').innerHTML = res;
}
function invert() {
    var val = document.getElementById('display').innerHTML;
    val *= -1;
    document.getElementById('display').innerHTML = val;
}