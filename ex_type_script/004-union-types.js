function somar(num1, num2) {
    if (typeof num1 === 'number')
        return num1 + num2;
    else
        return "".concat(num1).concat(num2);
}
console.log('Exibe número na saída: ' + somar(1, 2));
console.log("Exibe string na sa\u00EDda ".concat(somar('1', 2)));
