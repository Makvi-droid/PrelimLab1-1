let kgBtn = document.getElementById('kgToLbsBtn');
let lbsBtn = document.getElementById('lbsToKgBtn');
let input = document.getElementById('convert');
let answer = document.querySelector('.answer');
const kg = 0.453592;
const lbs = 2.20462;

function kgTolbs(){

    let weightKg = input.value;
    return weightKg * lbs;

}

function lbsToKg(){

    let weightLbs = input.value;
    return weightLbs / lbs; 

}

kgBtn.addEventListener('click', function(){
    
    answer.textContent = `Your weight in kg to lbs is ${kgTolbs()}`;

});

lbsBtn.addEventListener('click', function(){
    answer.textContent = `Your weight in lbs to Kg is ${lbsToKg()}`
});

