export default class Calculate {
    constructor () {
        this.result = 0;
    }

    getResult() { return this.result; }

    calculate (expression, operation) {
        if (expression.match(/[0-9]/)) {
            switch (operation){
                case '+':
                    this.result += parseFloat(expression.replace('+', ''));
                    break;
                case '-':
                    this.result -= parseFloat(expression.replace('-', ''));
                    break;
                case '*':
                    this.result *= parseFloat(expression.replace('*', ''));
                    break;
                case '/':
                    this.result /= parseFloat(expression.replace('/', ''));
                    break;
                case '%':
                    this.result *= parseFloat(expression.replace('%', '')) / 100;
                    break;
            }
        }
        return this.result;
    }
}