<template>
    <div>
        <!-- <div class="pos-f-t">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="col-md-2">
                    <img src="../icon/logo.png" width="250" height="50" alt="">
                </div>
                <div class="col-md-11">
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <div class="col-md-10"></div>
                        <form class="form-inline col-mg-6 my-lg-0">
                            <form>
                                <button class="btn btn-outline-primary my-2 my-sm-0"
                                    formaction="../html/about.html" id="about" type="submit">
                                    About</button>
                            </form>
                        </form>
                    </div>
                </div>
            </nav>
        </div> -->
        <div class="row">
            <div class="col-md-2">
                <div class="sidenav w-100">
                    <!-- <a href="../html/user-profile.html">
                        <img src="../icon/default-user-photo.png" class="mt-5" width="170" height="170">
                    </a>
                    <a class="text-dark dropdown-toggle" href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">
                        <i class="fas fa-calculator text-dark"></i>
                        Calculator
                    </a> -->
                    <!-- <ul class="collapse list-unstyled" id="pageSubmenu">
                        <p>
                            <li>
                                <a href="../html/ordinary-calc.html">
                                    <div class="text-dark">
                                    Ordinary
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="../html/programming-calc.html">
                                    <div class="text-dark">
                                        Programming
                                    </div>
                                </a>
                            </li>
                        </p>
                    </ul> -->
                    <!-- <div class="position-absolute bottom-0 start-0">
                        <a href="../html/about.html">
                            <div class="text-dark">
                                <i class="fas fa-info-circle"></i>
                                About
                            </div>
                        </a>
                        <a href="../html/log-in.html">
                            <i class="fas fa-sign-out-alt"></i>
                            Log out
                        </a>
                    </div> -->
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
                                    <select class="w-100 text-secondary display-6 border border-light border-invis-focus">
                                        <option class="h4">BIN</option>
                                        <option class="h4">OCT</option>
                                        <option class="h4" selected>DEC</option>
                                        <option class="h4">HEX</option>
                                    </select>
                                </div>
                                <div class="col-md-7">
                                    <input type="text" class="w-100 border border-light text-end display-6 border-invis-focus"
                                        placeholder="input">
                                </div>
                            </div>
                            <div class="row mt-2 mb-4">
                                <div class="col-md-3 text-secondary display-6">Result</div>
                                <div class="col-md-2 text-secondary display-6">
                                    <select class="w-100 text-secondary display-6 border border-light border-invis-focus">
                                        <option class="h4">BIN</option>
                                        <option class="h4">OCT</option>
                                        <option class="h4" selected>DEC</option>
                                        <option class="h4">HEX</option>
                                    </select>
                                </div>
                                <div class="col-md-7">
                                    <div class="float-end display-6">
                                        <!-- <strong> -->
                                        3
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-1 mb-1">
                                <div class="col-md-4"></div>
                                <div class="col-md-1">
                                    <button class="btn btn-secondary w-100" type="button">
                                        x!</button>
                                </div>
                                <div class="col-md-1">
                                    <button class="btn btn-secondary w-100" type="button">
                                        sin</button>
                                </div>
                                <div class="col-md-1">
                                    <button class="btn btn-secondary w-100" type="button">
                                        cos</button>
                                </div>
                                <div class="col-md-1">
                                    <button class="btn btn-secondary w-100" type="button">
                                        %</button>
                                </div>
                                <div class="col-md-1">
                                    <button class="btn btn-secondary w-100" type="button">
                                        AC</button>
                                </div>
                            </div>
                            <div class="row mt-1 mb-1">
                                <div class="col-md-4"></div>
                                <div class="col-md-1">
                                    <button class="btn btn-secondary w-100" type="button">
                                        ln</button>
                                </div>
                                <div class="col-md-1">
                                    <button class="btn btn-light w-100" type="button">
                                        7</button>
                                </div>
                                <div class="col-md-1">
                                    <button class="btn btn-light w-100" type="button">
                                        8</button>
                                </div>
                                <div class="col-md-1">
                                    <button class="btn btn-light w-100" type="button">
                                        9</button>
                                </div>
                                <div class="col-md-1">
                                    <button class="btn btn-secondary w-100" type="button">
                                        /</button>
                                </div>
                            </div>
                            <div class="row mt-1 mb-1">
                                <div class="col-md-4"></div>
                                <div class="col-md-1">
                                    <button class="btn btn-secondary w-100" type="button">
                                        log</button>
                                </div>
                                <div class="col-md-1">
                                    <button class="btn btn-light w-100" type="button">
                                        4</button>
                                </div>
                                <div class="col-md-1">
                                    <button class="btn btn-light w-100" type="button">
                                        5</button>
                                </div>
                                <div class="col-md-1">
                                    <button class="btn btn-light w-100" type="button">
                                        6</button>
                                </div>
                                <div class="col-md-1">
                                    <button class="btn btn-secondary w-100" type="button">
                                        *</button>
                                </div>
                            </div>
                            <div class="row mt-1 mb-1">
                                <div class="col-md-4"></div>
                                <div class="col-md-1">
                                    <button class="btn btn-secondary w-100" type="button">
                                        &#x221A;</button>
                                </div>
                                <div class="col-md-1">
                                    <button class="btn btn-light w-100" type="button">
                                        1</button>
                                </div>
                                <div class="col-md-1">
                                    <button class="btn btn-light w-100" type="button">
                                        2</button>
                                </div>
                                <div class="col-md-1">
                                    <button class="btn btn-light w-100" type="button">
                                        3</button>
                                </div>
                                <div class="col-md-1">
                                    <button class="btn btn-secondary w-100" type="button">
                                        -</button>
                                </div>
                            </div>
                            <div class="row mt-1 mb-5">
                                <div class="col-md-4"></div>
                                <div class="col-md-1">
                                    <button class="btn btn-secondary w-100" type="button">
                                        X&#x207F;</button>
                                </div>
                                <div class="col-md-1">
                                    <button class="btn btn-light w-100" type="button">
                                        0</button>
                                </div>
                                <div class="col-md-1">
                                    <button class="btn btn-light w-100" type="button">
                                        .</button>
                                </div>
                                <div class="col-md-1">
                                    <button class="btn btn-primary w-100" type="button">
                                        =</button>
                                </div>
                                <div class="col-md-1">
                                    <button class="btn btn-secondary w-100" type="button">
                                        +</button>
                                </div>
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
    
}
</script>

<style></style>