var numeros = [1, 1];
for(i=2; i<=1000; i++){
    numeros[i] = numeros[i-1]+numeros[i-2];
}

i = 2;

var num_anterior1 = document.getElementById('num_anterior1');
var num_anterior2 = document.getElementById('num_anterior2');

num_anterior1.innerHTML = numeros[0];
num_anterior2.innerHTML = numeros[1];

function palpite(){

    var palpite = document.getElementById('palpite').value;
     
    while(palpite == numeros[i]){
        num_anterior1.innerHTML = numeros[i-1];
        num_anterior2.innerHTML = numeros[i];
        i = i + 1;
    }
    alert("Você perdeu!");
}