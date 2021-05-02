<template>
    <div>
        <div class="conteiner">
            <div class="row mt-5"></div>
            <div class="row">
                <div class="col-md-4"></div>
            </div>
        </div>
        <div class="container mt-5">
            <div class="row">
                <div class="col-md-2"></div>
                <div class="col-md-3">
                    <input class="w-100 border border-primary" type="email" placeholder="Email address">
                </div>
                <div class="col-md-2"></div>
                <div class="col-md-3">
                    <input class="w-100 border border-primary" type="text" placeholder="Username">
                </div>
                
            </div>
            <div class="row mt-4">
                <div class="col-md-2"></div>
                <div class="col-md-3">
                    <input class="w-100 border border-primary" type="password" placeholder="Password">
                </div>
                <div class="col-md-2"></div>
                <div class="col-md-3">
                    <label class="w-23 text-secondary" for="birthday">Birthday</label>
                    <input class="w-75 border border-primary" type="date" id="birthday" placeholder="asda">
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md-2"></div>
                <div class="col-md-3">
                    <input class="w-100 border border-primary" type="password" placeholder="Password">
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
                            type="button" value="Sign up">
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
        </div>
    </div>
</template>

<script>
export default {
    
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

