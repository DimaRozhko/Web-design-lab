
export default class Calculate {
    constructor () {
        this.result = 0;
        this.errorMessage = '';
        this.expressionCondition = 10;
        this.resultCondition = 10;
    }

    getResult() { return this.result; }

    getErrorMessage() { return this.errorMessage; }

    factorial(expression) {
        expression = parseFloat(expression.replace('+', '').replace('-', '')
            .replace('*', '').replace('/', '').replace('%', ''));
        let res = 1;
        for (let i = 2; i <= expression; i++) {
            res *= i;
        }
        return res.toString();
    }

    setExpression(num) { this.expressionCondition = num;}

    getExpression(num) { return this.expressionCondition;}

    convertResult(num) {
        this.result = parseInt(this.result, this.resultCondition).toString(num);
        this.resultCondition = num;
        return this.result;
    }

    calculate (expression, operation) {
        if (expression.match(/[0-9]/) | 
            (this.expressionCondition === 16 & expression.match(/[a-f0-9]/i))) {
            switch (operation){
                case '+':
                    this.errorMessage = parseInt(expression.replace('+', ''), this.expressionCondition);
                    this.result =  parseInt(this.result, this.resultCondition);
                    this.result += this.errorMessage;
                    break;
                case '-':
                    this.errorMessage = parseInt(expression.replace('-', ''), this.expressionCondition);
                    this.result =  parseInt(this.result, this.resultCondition);
                    this.result -= this.errorMessage;
                    break;
                case '*':
                    this.errorMessage = parseInt(expression.replace('*', ''), this.expressionCondition);
                    this.result =  parseInt(this.result, this.resultCondition);
                    this.result *= this.errorMessage;
                    break;
                case '/':
                    this.errorMessage = parseInt(expression.replace('/', ''), this.expressionCondition);
                    this.result =  parseInt(this.result, this.resultCondition);
                    this.result /= this.errorMessage;
                    break;
                case '%':
                    this.errorMessage = parseInt(expression.replace('%', ''), this.expressionCondition);
                    this.result =  parseInt(this.result, this.resultCondition);
                    this.result *= this.errorMessage / 100;
                    break;
                default:
                    this.errorMessage = parseInt(expression.replace('', ''), this.expressionCondition);
                    this.result =  parseInt(this.result, this.resultCondition);
                    this.result = this.errorMessage;
                    break;
            }
            this.result = parseFloat(this.result.toString(this.resultCondition));
            this.errorMessage = '';
        } else if (expression.length != 0) {
            console.log(expression);
            this.errorMessage = 'Incorrect input expression';
        }
        return this.result;
    }

    parseFunc(expression) {
        let res = 1;
        expression = expression.replace(' ', '');
        if (expression.search(/log/i) != -1) {
            res = Math.log10(parseFloat(expression.replace('log(', '')));
        } else if (expression.search(/ln/i) != -1) {
            res = Math.log(parseFloat(expression.replace('ln(', '')));
        } else if (expression.search(/cos/i) != -1) {
            res = Math.cos(parseFloat(expression.replace('cos(', '')));
        } else if (expression.search(/sin/i) != -1) {
            res = Math.sin(parseFloat(expression.replace('sin(', '')));
        } else if (expression.search(/^/i) != -1) {
            res = expression.substring(0, expression.indexOf('^'));
            res = Math.pow(res, expression.substring(expression.indexOf('^') + 2, expression.length));
        }
        if (expression.search(/sqrt/i) != -1) {
            res = Math.sqrt(parseFloat(expression.replace('sqrt(', '')));
        }
        return res.toString();
    }
}