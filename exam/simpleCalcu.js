let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let answer = document.getElementById('answer');
const addBtn = document.getElementById('addBtn');
const subtractBtn = document.getElementById('subBtn');
const multiplyBtn = document.getElementById('multiplyBtn');
const divideBtn = document.getElementById('divideBtn');
const clearBtn = document.getElementById('clearBtn');

function add(){
    return parseFloat(num1.value) + parseFloat(num2.value);
}

function subtract(){
    return parseFloat(num1.value) - parseFloat(num2.value);
}

function multiply(){
    return parseFloat(num1.value) * parseFloat(num2.value);
}

function divide(){
    return parseFloat(num1.value) / parseFloat(num2.value);
}

addBtn.addEventListener('click', function(){
    answer.textContent = `The sum is ${add()}`;
});

subtractBtn.addEventListener('click', function(){
    answer.textContent = `The difference is ${subtract()}`;
});

multiplyBtn.addEventListener('click', function(){
    answer.textContent = `The product is ${multiply()}`;
});

divideBtn.addEventListener('click', function(){
    answer.textContent = `The quotient is ${divide()}`;
});

clearBtn.addEventListener('click', function(){
    num1.value = '';
    num2.value = '';
});