import InputController from './controller/InputController.js';
import Calculate from './model/Calculate.js';
import ResultView from './view/ResultView.js';

let inputController = new InputController(document.getElementById("expression"), new Calculate());
let calculateExpression = inputController.getCalculator();
let viewInput = new ResultView(document.getElementById("result"));

let expression = document.getElementById('expression');
let selectResult = document.getElementById('selectResult');
let selectExpression = document.getElementById('selectExpression');
let opereation = document.getElementById('operation');
viewInput.setValue(inputController.getItem().value);

function handlerKeydownExpression(key, expression){
    opereation.value = inputController.validInput(key, 
        opereation.value, expression);
    viewInput.setValue(calculateExpression.getResult());
    document.getElementById("error").textContent = calculateExpression.getErrorMessage();
}

function handlerOperation(operand) {
    let lastExpression = expression.value;
    expression.value = '';
    opereation.value = operand;
    viewInput.setValue(calculateExpression.calculate(lastExpression, operand));
}

selectExpression.addEventListener('click', 
    function() {
        switch (selectExpression.value) {
            case 'bin':
                expression.value = parseInt(expression.value, calculateExpression
                    .getExpression()).toString(2);
                calculateExpression.setExpression(2);
                break;
            case 'oct':
                expression.value = parseInt(expression.value, calculateExpression
                    .getExpression()).toString(8);
                calculateExpression.setExpression(8);
                break;
            case 'dec':
                expression.value = parseInt(expression.value, calculateExpression
                    .getExpression()).toString(10);
                calculateExpression.setExpression(10);
                break;
            case 'hex':
                expression.value = parseInt(expression.value, calculateExpression
                    .getExpression()).toString(16);
                calculateExpression.setExpression(16);
                break;
        }
    });

selectResult.addEventListener('click', 
    function() {
        switch (selectResult.value) {
            case 'bin':
                viewInput.setValue(calculateExpression.convertResult(2));
                break;
            case 'oct':
                viewInput.setValue(calculateExpression.convertResult(8));
                break;
            case 'dec':
                viewInput.setValue(calculateExpression.convertResult(10));
                break;
            case 'hex':
                viewInput.setValue(calculateExpression.convertResult(16));
                break;
        }
    });

document.getElementById('equal').addEventListener('click', 
    function() {
        viewInput.setValue(calculateExpression.calculate(inputController.getItem().value,
            document.getElementById('operation').value));
        expression.value = '';
    });


expression.addEventListener('keydown', 
    function(event) {
        handlerKeydownExpression(event.key, expression);
    });

expression.addEventListener('keyup', 
    function(event) {
        inputController.validInputKeyup(event.key, expression);
    })

document.getElementById('erase').addEventListener('click', 
    function() {
        let erasExpression = expression.value;
        expression.value = erasExpression.substr(0, erasExpression.length - 1);
    });

document.getElementById("factorial").addEventListener('click',
    function() {
        viewInput.setValue(calculateExpression
            .calculate(calculateExpression.factorial(expression.value), opereation.value));
        expression.value = '';
    });

document.getElementById("sin").addEventListener('click',
    function() {
        expression.value = 'sin('.concat(expression.value);
        handlerKeydownExpression(')', expression);
    });

document.getElementById("cos").addEventListener('click',
    function() {
        expression.value = 'cos('.concat(expression.value);
        handlerKeydownExpression(')', expression);
    });

document.getElementById("log").addEventListener('click',
    function() {
        expression.value = 'log('.concat(expression.value);
        handlerKeydownExpression(')', expression);
    });

document.getElementById("ln").addEventListener('click',
    function() {
        expression.value = 'ln('.concat(expression.value);
        handlerKeydownExpression(')', expression);
    });

document.getElementById("sqrt").addEventListener('click',
    function() {
        expression.value = 'sqrt('.concat(expression.value);
        handlerKeydownExpression(')', expression);
    });

document.getElementById("pow").addEventListener('click',
    function() {
        expression.value = 'pow('.concat(expression.value).concat('^2');
        handlerKeydownExpression(')', expression);
    });

document.getElementById('plus').addEventListener('click',
    function(){ handlerOperation('+') });

document.getElementById('minus').addEventListener('click',
    function(){ handlerOperation('-') });

document.getElementById('multiply').addEventListener('click',
    function(){ handlerOperation('*') });

document.getElementById('division').addEventListener('click',
    function(){ handlerOperation('/') });

document.getElementById('percent').addEventListener('click',
    function(){ handlerOperation('%') });

document.getElementById('zero').addEventListener('click', 
    function() {expression.value += 0;});
document.getElementById('one').addEventListener('click', 
    function() {expression.value += 1;});
document.getElementById('two').addEventListener('click', 
    function() {expression.value += 2;});
document.getElementById('three').addEventListener('click', 
    function() {expression.value += 3;});
document.getElementById('four').addEventListener('click', 
    function() {expression.value += 4;});
document.getElementById('five').addEventListener('click', 
    function() {expression.value += 5;});
document.getElementById('six').addEventListener('click', 
    function() {expression.value += 6;});
document.getElementById('seven').addEventListener('click', 
    function() {expression.value += 7;});
document.getElementById('eighth').addEventListener('click', 
    function() {expression.value += 8;});
document.getElementById('nine').addEventListener('click', 
    function() {expression.value += 9;});
document.getElementById('point').addEventListener('click', 
    function() {expression.value += '.';});