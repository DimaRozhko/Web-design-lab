<template>
    <div>
        <div class="conteiner">
            <div class="row mt-5"/>
            <div class="row">
                <div class="col-md-4"/>
                <img class="col-md-4" src="@/assets/logo.png">
            </div>
        </div>
        <div class="container mt-5">
            <div class="row">
                <div class="col-md-4"/>
                <div class="col-md-4">
                    <input class="w-100 border border-primary" type="email"
                        placeholder="Email address" v-model="email">
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md-4"/>
                <div class="col-md-4">
                    <input class="w-100 border border-primary" 
                        type="password" placeholder="Password" v-model="password">
                </div>
            </div>
        </div>
        <div class="container mt-5">
            <div class="row">
                <div class="col-md-5"/>
                <div class="col-md-2 text-center">
                    <input type="checkbox" id="remember">
                    <label for="remember">Remember me</label>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-4"/>
                <div class="col-md-4">
                    <router-link to="/" :disabled="true">
                        <input class="w-100 btn button-auth button-text-white" 
                            type="button" value="Log in" v-on:click="logIn">
                    </router-link>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-4"/>
                <router-link to="/sign-up">
                    <div class="col-md-4" >
                        <input class="w-100 btn btn-link" 
                            type="button" value="Sign up">
                    </div>
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
        },
        logIn () {
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
            // "dima@gmail.com", "Dima12345"
            event.getUser(this.email,this.password).then(response => {
                    if (response.data == true & this.count == 0) {
                        this.$route.meta.auth = true;
                    }
                })
                .catch(function () {
                    return null;
                });
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

