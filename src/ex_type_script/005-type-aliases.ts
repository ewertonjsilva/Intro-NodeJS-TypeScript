type NumberOrString = number | string;

function somar2(num1 : NumberOrString, num2: number){
    if(typeof num1 === 'number')
        return num1 + num2;
    else
        return `${num1}${num2}`;
}

console.log('Exibe número na saída: ' + somar2(1, 2));
console.log(`Exibe string na saída ${somar2('1', 2)}`);

