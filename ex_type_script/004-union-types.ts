function somar1(num1 : number | string, num2: number){
    if(typeof num1 === 'number')
        return num1 + num2;
    else
        return `${num1}${num2}`;
}

console.log('Exibe número na saída: ' + somar1(1, 2));
console.log(`Exibe string na saída ${somar1('1', 2)}`);

