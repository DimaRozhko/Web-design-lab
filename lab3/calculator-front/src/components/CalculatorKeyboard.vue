<template>
  <div>
    <div class="row mt-1 mb-1">
      <div class="col-md-4"></div>
      <div class="col-md-1">
        <button class="btn btn-secondary w-100" type="button" 
          v-on:click="handlerFactorial">x!</button>
      </div>
      <div class="col-md-1">
        <button class="btn btn-secondary w-100" type="button"
          v-on:click="handlerSin">sin</button>
      </div>
      <div class="col-md-1">
        <button class="btn btn-secondary w-100" type="button"
          v-on:click="handlerCos">cos</button>
      </div>
      <div class="col-md-1">
        <button class="btn btn-secondary w-100" type="button"
          v-on:click="handlerPercent">%</button>
      </div>
      <div class="col-md-1">
        <button class="btn btn-secondary w-100" type="button"
          v-on:click="handlerAC">AC</button>
      </div>
    </div>
    <div class="row mt-1 mb-1">
      <div class="col-md-4"></div>
      <div class="col-md-1">
        <button class="btn btn-secondary w-100" type="button"
          v-on:click="handlerLn">ln</button>
      </div>
      <div class="col-md-1">
        <button class="btn btn-light w-100" type="button"
          v-on:click="handlerSeven">7</button>
      </div>
      <div class="col-md-1">
        <button class="btn btn-light w-100" type="button"
          v-on:click="handlerEight">8</button>
      </div>
      <div class="col-md-1">
        <button class="btn btn-light w-100" type="button"
          v-on:click="handlerNine">9</button>
      </div>
      <div class="col-md-1">
        <button class="btn btn-secondary w-100" type="button"
          v-on:click="handlerDivision">/</button>
      </div>
    </div>
    <div class="row mt-1 mb-1">
      <div class="col-md-4"></div>
      <div class="col-md-1">
        <button class="btn btn-secondary w-100" type="button"
          v-on:click="handlerLog">log</button>
      </div>
      <div class="col-md-1">
        <button class="btn btn-light w-100" type="button"
          v-on:click="handlerFour">4</button>
      </div>
      <div class="col-md-1">
        <button class="btn btn-light w-100" type="button"
          v-on:click="handlerFive">5</button>
      </div>
      <div class="col-md-1">
        <button class="btn btn-light w-100" type="button"
          v-on:click="handlerSix">6</button>
      </div>
      <div class="col-md-1">
        <button class="btn btn-secondary w-100" type="button"
          v-on:click="handlerMultiply">*</button>
      </div>
    </div>
    <div class="row mt-1 mb-1">
      <div class="col-md-4"></div>
      <div class="col-md-1">
        <button class="btn btn-secondary w-100" type="button"
         v-on:click="handlerSqrt">&#x221A;</button>
      </div>
      <div class="col-md-1">
        <button class="btn btn-light w-100" type="button" 
          v-on:click="handlerOne">1</button>
      </div>
      <div class="col-md-1">
        <button class="btn btn-light w-100" type="button"
          v-on:click="handlerTwo">2</button>
      </div>
      <div class="col-md-1">
        <button class="btn btn-light w-100" type="button"
          v-on:click="handlerThree">3</button>
      </div>
      <div class="col-md-1">
        <button class="btn btn-secondary w-100" type="button"
          v-on:click="handlerMinus">-</button>
      </div>
    </div>
    <div class="row mt-1 mb-5">
      <div class="col-md-4"></div>
      <div class="col-md-1">
        <button class="btn btn-secondary w-100" type="button"
         v-on:click="handlerResultInPower">X&#x207F;</button>
      </div>
      <div class="col-md-1">
        <button class="btn btn-light w-100" type="button"
          v-on:click="handlerZero">0</button>
      </div>
      <div class="col-md-1">
        <button class="btn btn-light w-100" type="button"
          v-on:click="handlerPoint">.</button>
      </div>
      <div class="col-md-1">
        <button class="btn btn-primary w-100" type="button"
          v-on:click="handlerCalculate">=</button>
      </div>
      <div class="col-md-1">
        <button class="btn btn-secondary w-100" type="button"
          v-on:click="handlerPlus">+</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['result', 'expression', 'notationResult', 'notationExpression'],
  data() {
    return {
      lastOperation : -1
    }
  },
  methods: {
    handlerOne () {
      this.$emit('update:expression', this.expression.toString().concat('1'));
    },
    handlerTwo () {
      this.$emit('update:expression', this.expression.toString().concat('2'));
    },
    handlerThree () {
      this.$emit('update:expression', this.expression.toString().concat('3'));
    },
    handlerFour () {
      this.$emit('update:expression', this.expression.toString().concat('4'));
    },
    handlerFive () {
      this.$emit('update:expression', this.expression.toString().concat('5'));
    },
    handlerSix () {
      this.$emit('update:expression', this.expression.toString().concat('6'));
    },
    handlerSeven () {
      this.$emit('update:expression', this.expression.toString().concat('7'));
    },
    handlerEight () {
      this.$emit('update:expression', this.expression.toString().concat('8'));
    },
    handlerNine () {
      this.$emit('update:expression', this.expression.toString().concat('9'));
    },    
    handlerZero () {
      this.$emit('update:expression', this.expression.toString().concat('0'));
    },
    handlerPoint () {
      this.$emit('update:expression', this.expression.toString().concat('.'));
    },
    handlerFactorial () {
      let numExpression = parseInt(this.expression.replace(/[/*-+]+/g, ''), this.notationExpression);
      let calcResult = 1;
      if (numExpression >= 0) {
        while (0 < numExpression) {
          calcResult *= numExpression--;
        }
      }
      else {
        calcResult = "Invalid result";
      }
      this.$emit('update:result', (typeof calcResult == String) ? 
        calcResult : calcResult.toString(this.notationResult));
      this.handlerCalculate();
    },
    handlerSin () {
      const calcResult = Math.sin(parseInt(this.expression.replace(/[/*]+/g, ''), 
          this.notationExpression)).toString(this.notationResult);
      this.$emit('update:result', calcResult);
      this.handlerCalculate();
    },
    handlerCos () {
      const calcResult = Math.cos(parseInt(this.expression.replace(/[/*]+/g, ''), 
          this.notationExpression)).toString(this.notationResult);
      this.$emit('update:result', calcResult);
      this.handlerCalculate();
    },
    handlerPercent () {
      this.$emit('update:result', 
        (parseInt(this.expression.replace(/[/*+-]+/g, ''), this.notationExpression) 
          / parseInt(this.result, this.notationResult) * 100).toString(this.notationResult));
      this.$emit('update:expression', "");
    },
    handlerAC () {
      this.$emit('update:result', "0");
      this.$emit('update:expression', "");
    },
    handlerLn () {
      const calcResult = Math.log(parseInt(this.expression.replace(/[/*]+/g, ''), 
          this.notationExpression)).toString(this.notationResult);
      this.$emit('update:result', calcResult);
      this.handlerCalculate();
    },
    
    handlerLog () {
      const calcResult = Math.log10(parseInt(this.expression.replace(/[/*]+/g, ''), 
          this.notationExpression)).toString(this.notationResult);
      this.$emit('update:result', calcResult);
      this.handlerCalculate();
    },
    handlerPlus () {
      this.lastOperation = 0;
      let setExpression = this.expression.replace(/[/*]+/g, '');
      setExpression = (setExpression == "") ? 0 : parseInt(setExpression);
      this.$emit('update:result', 
        (parseInt(parseInt(this.result, this.notationResult)
          + setExpression, this.notationExpression)).toString(this.notationResult));
      this.$emit('update:expression', "");
    },
    handlerMinus () {
      this.lastOperation = 1;
      let setExpression = this.expression.replace(/[/*]+/g, '');
      setExpression = (setExpression == "") ? 0 : parseInt(setExpression);
      this.$emit('update:result', 
        (parseInt(parseInt(this.result, this.notationResult)
          - setExpression, this.notationExpression)).toString(this.notationResult));
      this.$emit('update:expression', "");
    },
    handlerMultiply () {
      this.lastOperation = 2;
      let setResult = parseInt(this.result, this.notationResult);
      setResult = (setResult == 0) ? 1 : setResult;
      let setExpression = this.expression.replace(/[/*]+/g, '');
      setExpression = (setExpression == "") ? 1 : parseInt(setExpression);
      this.$emit('update:result', 
        (parseInt(parseInt(setExpression * setResult), this.notationExpression))
          .toString(this.notationResult));
      this.$emit('update:expression', "");
    },
    handlerDivision () {
      this.lastOperation = 3;
      let setResult = parseInt(this.result, this.notationResult);
      setResult = (setResult == 0) ? 1 : setResult;
      let setExpression = this.expression.replace(/[/*]+/g, '');
      setExpression = (setExpression == "") ? 1 : parseInt(setExpression);
      this.$emit('update:result', 
        (parseInt(parseInt(setExpression / setResult), this.notationExpression))
          .toString(this.notationResult));
      this.$emit('update:expression', "");
    },
    handlerSqrt () {
      this.$emit('update:result', 
        Math.sqrt(parseInt(this.expression.replace(/[/*+-]+/g, ''), 
          this.notationExpression)).toString(this.notationResult));
      this.handlerCalculate();
    },
    handlerResultInPower () {
      this.$emit('update:result', 
        Math.pow(parseInt(this.expression.replace(/[/*+-]+/g, ''), this.notationExpression),
          parseInt(this.result, this.notationResult)).toString(this.notationResult));
      this.handlerCalculate();
    },
    handlerCalculate () {
      switch (this.lastOperation) {
        case 0:
          this.handlerPlus();
          break;
        case 1:
          this.handlerMinus();
          break;
        case 2:
          this.handlerMultiply();
          break;
        case 3:
          this.handlerDivision();
          break;
        default:
          this.$emit('update:result', 
            parseInt(this.result, this.notationResult));
          this.$emit('update:expression',
            parseInt(this.expression, this.notationExpression));
          break;
      }
    },
  },
}
</script>