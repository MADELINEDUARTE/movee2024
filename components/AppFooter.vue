<template>
<footer class="footer-area">
    <div class="footer-widget">
        <div class="container">
            <div class="row footer-widget-wrapper pt-100 pb-70">
                <div class="col-md-6 col-lg-3">
                    <div class="footer-widget-box about-us">
                        <a href="#" class="footer-logo1">
                            <!--<img class="log1blanco" src="assets/img/logo/logo-light1.png" alt="">-->
                        </a>
                        <a href="#" class="footer-logo2">
                            <img class="log2oscuro" src="/assets/img/logo/logo-full-light2.png" alt="">
                        </a>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="footer-widget-box list">
                        <h4 class="footer-widget-title">{{$t('conocenos')}}</h4>
                        <ul class="footer-list">
                            <li><a href="about">{{$t('sobre_m')}}</a></li>
                            <li><a href="privacy">{{$t('politica')}}</a></li>
                            <li><a href="aviso-legal">{{$t('aviso')}}</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="footer-widget-box list">
                        <h4 class="footer-widget-title">{{$t('laborales')}}</h4>
                        <ul class="footer-list">
                            <li><a href="#">{{$t('lun_dom')}}</a></li>
                            <li><a href="#">{{$t('hora')}}</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="footer-widget-box list">
                        <h4 class="footer-widget-title">{{$t('pago')}}</h4>
                        <!--<div class="footer-newsletter">
                            <ul class="pago">
                                <li><a href="#"><img src="/assets/img/" alt=""></a></li>
                                <li><a href="#"><img src="/assets/img/footer/04.png" alt=""></a></li>
                            </ul>
                        </div>-->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="copyright">
        <div class="container">
            <div class="row">
                <div class="col-md-6 align-self-center">
                    <p class="copyright-text">
                        &copy; <span id="date"></span> <a href="#"><strong>{{$t('move')}}</strong></a> {{$t('derechos')}}
                    </p>
                </div>
                <div class="col-md-6 align-self-center">
                    <ul class="footer-social">
                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-google"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>

</template>