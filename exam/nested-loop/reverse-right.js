for(let z = 1; z <= 5; z++){
    let line = '';
    for(let x = 1; x <= 6 - z; x++){
        line += '*';
    }
    document.write(`${line} ${'<br>'}`);
}