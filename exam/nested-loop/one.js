const tableElement = document.getElementById('table');
let num = 10;

for (let i = 1; i <= 10; i++) {
    document.write(`Multiple of ${i} ${'<br>'}`);
    for(let j = 1; j <= 10; j++){
        document.write(`${j} x ${i} = ${j * i} ${'<br>'}`);
    }
}




