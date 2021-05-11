<template>
    <div class="background">
        <div class="row">
            <div class="col-md-2">
                <div class="sidenav w-100" />
            </div>
            <div class="col-md-10">
                <div class="conteiner">
                    <div class="row mt-5">
                        <div class="col-md-5" />
                        <div class="col-md-2">
                            <div class="text-uppercase text-center font-weight-bold text-black h1">
                                about calculator
                            </div>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-md-2" />
                        <div class="col-md-5">
                            <div class="font-weight-bold text-black h2">
                                Ordinary
                            </div>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-2" />
                        <div class="col-md-8">
                            <div class="font-weight-bold text-black h4">
                                <p>an electronic computing device for performing operations on numbers or algebraic formulas.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-md-2" />
                        <div class="col-md-5">
                            <div class="font-weight-bold text-black h2">
                                Programming
                            </div>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-2" />
                        <div class="col-md-8">
                            <div class="font-weight-bold text-black h4">
                                <p>Functionality calculators are at the level of complex engineering calculators, but additionally they make it possible to repeat calculations many times by creating and executing user programs. As a rule, they have a large number of memory registers (10 or more), they can have interfaces for connecting external devices, a personal computer, additional memory modules, hardware sensors, and actuators. In terms of functionality, the most advanced programmable calculators approach the simplest portable computers, formally differing from them exclusively in their narrow specialization. There are several ways to program calculators (see article), depending on the model, the calculator can support one or two of them.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
}
</script>

<style>
.background {
    background: linear-gradient(white 8%, #0055D3);
    height: 100vh;
}
</style>