<template>
    <div>
        <div class="conteiner">
            <div class="row mt-5"></div>
            <div class="row">
                <div class="col-md-4"></div>
                <img class="col-md-4" src="@/assets/logo.png">
            </div>
        </div>
        <div class="container mt-5">
            <div class="row">
                <div class="col-md-2"></div>
                <div class="col-md-3">
                    <input class="w-100 border border-primary" type="email" 
                        placeholder="Email address" v-model="email">
                </div>
                <div class="col-md-2"></div>
                <div class="col-md-3">
                    <input class="w-100 border border-primary" type="text" 
                        placeholder="Username">
                </div>
                
            </div>
            <div class="row mt-4">
                <div class="col-md-2"></div>
                <div class="col-md-3">
                    <input class="w-100 border border-primary" type="password"
                        placeholder="Password"  v-model="password">
                </div>
                <div class="col-md-2"></div>
                <div class="col-md-3">
                    <label class="w-23 text-secondary" for="birthday">Birthday</label>
                    <input class="w-75 border border-primary" type="date" 
                        id="birthday">
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md-2"></div>
                <div class="col-md-3">
                    <input class="w-100 border border-primary" type="password" 
                        placeholder="Password" v-model="confirmPassword">
                </div>
                <div class="col-md-2"></div>
                <div class="col-md-3">
                    <select class="w-100 border border-primary">
                        <option selected disabled hidden>Sex</option>
                        <option>Man</option>
                        <option>Woman</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="container mt-5">
            <div class="row mt-3">
                <div class="col-md-5"></div>
                <div class="col-md-2 text-center">
                    <input type="checkbox" id="remember">
                    <label for="remember">Remember me</label>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-4"></div>
                <div class="col-md-4">
                    <router-link to="/">
                        <input class="w-100 btn button-auth button-text-white" 
                            type="button" value="Sign up" v-on:click="signUp">
                    </router-link>
                </div>
            </div>
            <div class="row mt-2">
                <div class="col-md-4"></div>
                <router-link to="/log-in">
                    <input class="w-100 btn btn-link" 
                        type="button" value="Log in">
                </router-link>
            </div>
             <div class="row mt-3">
                <div class="col-md-4"/>
                <div class="col-md-4">
                    <div id="error" class="h4 text-center text-danger">
                        {{error}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import event from '../services/EventService.js'

export default {
    beforeRouteEnter(to, from, next) {
        from.meta.auth = false;
        to.meta.auth = from.meta.auth;
        next();
    },
    data() {
        return {
            count : 0,
            email : "",
            password : "",
            confirmPassword : "",
            error : "",
        }
    },
    methods: {
        checkPasswordByRegularExpression(regularExpresion, errorDetails) {
            if (this.password.match(regularExpresion) == null) {
                if (this.count > 0) {
                    this.error += " and "
                    this.count = 0;
                }
                this.error += "invalid password (" + errorDetails + ')';
                this.count++;
            }
            if (this.confirmPassword.match(regularExpresion) == null) {
                if (this.count > 0) {
                    this.error += " and "
                    this.count = 0;
                }
                this.error += "invalid confirm password (" + errorDetails + ')';
                this.count++;
            }
        },
        signUp () {
            let regularForEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            this.error = '';
            this.count = 0;
            if (regularForEmail.test(this.email) != true) {
                this.error += "invalid email";
                this.count++;
            }
            this.checkPasswordByRegularExpression(/[A-Z]/, "no uppercase");
            this.checkPasswordByRegularExpression(/[a-z]/, "no lowercase");
            this.checkPasswordByRegularExpression(/[0-9]/, "no num");
            if (this.password.length < 6) {
                if (this.count > 0) {
                    this.error += " and "
                    this.count = 0;
                }
                this.error += "invalid password (no secure)";
                this.count++;
            }
            if (this.password != this.confirmPassword) {
                if (this.count > 0) {
                    this.error += " and "
                    this.count = 0;
                }
                this.error += "different password & confirm password";
                this.count++;
            }
            if (this.count == 0) {
                event.getSaveUser(this.email, this.password, this.name, "man");
                this.$route.meta.auth = true;
            }
        },
    },
}
</script>

<style>
.w-23 {
    width: 23%;
}

body {
    background: linear-gradient(90deg, #0055D3, #3385ff, #66a3ff,#b3d1ff, 
        #FFFFFF,#FFFFFF,#FFFFFF, #FFFFFF, #FFFFFF, #FFFFFF, #FFFFFF, 
        #b3d1ff,  #66a3ff, #3385ff,#0055D3);
}

.button-auth {
    background-color: #0055D3;
}

.button-auth:hover, .button-auth:active, .button-auth:focus {
    color: #ffffff !important;
    background-color: white !important;
    border-color: #0055D3 !important;
}

.button-text-white {
    color: white;
}

.button-auth:hover, .button-auth:active, .button-auth:focus {
    color: #0055D3 !important;
}

input:focus {
    outline: none;
    background-color: transparent !important;
    border-color:  transparent !important;
}
</style>

