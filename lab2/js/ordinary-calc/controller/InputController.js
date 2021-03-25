import Calculate from '../model/Calculate.js';

export default class InputController {
    constructor (item, calculate) {
        this.item = item;
        this.calculate = calculate;
    }

    getItem () { return this.item; }

    getCalculator () { return this.calculate; }

    validInput (key, lastValue, expression) {
        let sign = lastValue;
        if (key === '+' | key === '-' | key === '/'  | key === '*' | key === '%') {
            sign = key;
            this.calculate.calculate(expression.value, key);
            expression.value = '';
        }
        if (key === 'Enter') {
            this.calculate.calculate(expression.value, lastValue);
            expression.value = '';
        }
        return sign;
    }
}