<template>
    <div class="background">
        <div class="row">
            <div class="col-md-2">
                <div class="sidenav w-100">
                </div>
            </div>
            <div class="col-md-10">
                <div class="card rounded-3 mt-5 mb-5 mx-5">
                    <div class="card-body mb-4">
                        <p class="card-text text-primary text-center display-4 mt-4">Programming</p>
                        <div class="conteiner">
                            <div class="row mt-4">
                                <div class="col-md-3 text-secondary display-6">Expression</div>
                                <div class="col-md-2 text-secondary display-6">
                                    <select class="w-100 text-secondary display-6 border border-light border-invis-focus"
                                        v-on:click="hendlerSelectExpression" v-model="saveSelectExpression">
                                        <option class="h4">BIN</option>
                                        <option class="h4">OCT</option>
                                        <option class="h4" selected>DEC</option>
                                        <option class="h4">HEX</option>
                                    </select>
                                </div>
                                <div class="col-md-7">
                                    <input type="text" class="w-100 border border-light text-end display-6 border-invis-focus"
                                        placeholder="input" v-model="expression" v-on:input="inputExpression">
                                </div>
                            </div>
                            <div class="row mt-2 mb-4">
                                <div class="col-md-3 text-secondary display-6">Result</div>
                                <div class="col-md-2 text-secondary display-6">
                                    <select class="w-100 text-secondary display-6 border border-light border-invis-focus"
                                        v-on:click="hendlerSelectResult" v-model="saveSelectResult">
                                        <option class="h4">BIN</option>
                                        <option class="h4">OCT</option>
                                        <option class="h4" selected>DEC</option>
                                        <option class="h4">HEX</option>
                                    </select>
                                </div>
                                <div class="col-md-7">
                                    <div class="float-end display-6">
                                        {{result}}
                                    </div>
                                </div>
                            </div>
                            <CalculatorKeyboard v-bind:result.sync="result" 
                                v-bind:notationResult.sync="notationResult" 
                                v-bind:expression.sync="expression"
                                v-bind:notationExpression.sync="notationExpression"
                                ref="calcKey"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CalculatorKeyboard from '@/components/CalculatorKeyboard'
export default {
    beforeRouteEnter(to, from, next) {
        if (from.meta.auth === true){
            next();
        }
        else {
            next('/log-in');
        }
        to.meta.auth = from.meta.auth;
    },
    components: {
        CalculatorKeyboard
    },
    data() {
        return {
            expression : '',
            result : '0',
            notationExpression : 10,
            notationResult : 10,
            saveSelectResult: "DEC",
            saveSelectExpression: "DEC",
        }
    },
    methods: {
        inputExpression (event) {
            switch (event.data) {
                case '+':
                    this.$refs.calcKey.handlerPlus();
                    break;
                case '-':
                    this.$refs.calcKey.handlerMinus();
                    break;
                case '*':
                    this.$refs.calcKey.handlerMultiply();
                    break;
                case '/':
                    this.$refs.calcKey.handlerDivision();
                    break;
            }
        },
        hendlerSelectResult () {
            switch (this.saveSelectResult) {
                case 'BIN':
                    this.notationResult = 2;
                    break;
                case 'OCT':
                    this.notationResult = 8;
                    break;
                case 'DEC':
                    this.notationResult = 10;
                    break;
                case 'HEX':
                    this.notationResult = 16;
                    break;
            }
            this.$refs.calcKey.handlerCalculate();
        },
        hendlerSelectExpression () {
            switch (this.saveSelectExpression) {
                case 'BIN':
                    this.notationExpression = 2;
                    break;
                case 'OCT':
                    this.notationExpression = 8;
                    break;
                case 'DEC':
                    this.notationExpression = 10;
                    break;
                case 'HEX':
                    this.notationExpression = 16;
                    break;
            }
            this.$refs.calcKey.handlerCalculate();
        },
    },
}
</script>

<style>
.background {
    background: linear-gradient(white 8%, #0055D3);
    height: 100vh;
}
</style>