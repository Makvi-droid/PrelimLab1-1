let kgBtn = document.getElementById('kgToLbsBtn');
let lbsBtn = document.getElementById('lbsToKgBtn');
let input = document.getElementById('convert');
let answer = document.querySelector('.answer');

function kgTolbs(){

    const kg = input.value;
    return kg * 2.20462;

}

function lbsToKg(){

    const lbs = input.value;
    return lbs * 0.45359237;

}

kgBtn.addEventListener('click', function(){
    
    answer.textContent = `Your weight in kg is ${kgTolbs()}`;

});

lbsBtn.addEventListener('click', function(){
    answer.textContent = `Your weight in lbs is ${lbsToKg()}`
});

