import InputController from './controller/InputController.js';
import Calculate from './model/Calculate.js';
import ResultView from './view/ResultView.js';

let inputController = new InputController(document.getElementById("expression"), new Calculate());
let calculateExpression = inputController.getCalculator();
let viewInput = new ResultView(document.getElementById("result"));
let expression = document.getElementById('expression');
viewInput.setValue(inputController.getItem().value);

document.getElementById('equal').addEventListener('click', 
    function() {
        viewInput.setValue(calculateExpression.calculate(inputController.getItem().value,
            document.getElementById('operation').value));
    });

expression.addEventListener('keypress', 
    function(event) {
        let opereation = document.getElementById('operation');
        opereation.value = inputController.validInput(event.key, 
            opereation.value, expression);
        viewInput.setValue(calculateExpression.getResult());
    })
