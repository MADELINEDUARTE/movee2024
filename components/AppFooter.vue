<template>
    <!-- footer area -->
<footer class="footer-area">
    <div class="footer-widget">
        <div class="container">
            <div class="row footer-widget-wrapper pt-100 pb-70">
                <div class="col-md-6 col-lg-3">
                    <div class="footer-widget-box about-us">
                        <a href="#" class="footer-logo1">
                            <img class="log1blanco" src="/assets/img/logo/logo-light1.png" alt="">
                        </a>
                        <a href="#" class="footer-logo2">
                            <img class="log2oscuro" src="/assets/img/logo/logoh.png" alt="">
                        </a>

                       <!-- <p class="mb-3">
                            Con diferentes tarifas que pueden ayudarte en cada desafío, adaptándose a tus necesidades, reduciendo los costes y
                            maximizando los resultados sin afectar la calidad.
                        </p>
                        <ul class="footer-contact">
                            <li><a href="tel:+21236547898"><i class="far fa-phone"></i>812330 | 650310707</a></li>
                            <li><i class="far fa-map-marker-alt"></i>Av Pais Valenciano 33 Bj D, Betera, 46117</li>
                            <li><a href="mailto:info@example.com"><i
                                        class="far fa-envelope"></i>info@123renting.es</a></li>
                        </ul>-->
                    </div>
                    
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="footer-widget-box list">
                        <h4 class="footer-widget-title">Conócenos</h4>
                        <ul class="footer-list">
                            <li><a href="#nosotros123"><i class="fas fa-caret-right"></i>Sobre Nosotros</a></li>
                           <!-- <li><a href="#"><i class="fas fa-caret-right"></i> Update News</a>-->
                            <li><nuxt-link to="privacy"><i class="fas fa-caret-right"></i> Política de Privacidad</nuxt-link></li>
                            <li><nuxt-link to="politicadecookies"><i class="fas fa-caret-right"></i>Política de Cookies</nuxt-link></li>
                            <!--<li><a href="#"><i class="fas fa-caret-right"></i> Our Team</a>-->
                            
                        </ul>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="footer-widget-box list">
                        <h4 class="footer-widget-title">Días Laborables</h4>
                        <ul class="footer-list">
                            <li><a href="#"><i class="fas fa-caret-right"></i> Lunes a Domingo</a></li>
                            <li><a href="#"><i class="fas fa-caret-right"></i> De 9:00 a 19:00</a></li>
                            <!--<li><a href="#"><i class="fas fa-caret-right"></i> Booking Tips</a></li>
                            <li><a href="#"><i class="fas fa-caret-right"></i> Live Chat</a></li>
                            <li><a href="#"><i class="fas fa-caret-right"></i> Contact Us</a></li>-->
                        </ul>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="footer-widget-box list">
                        <h4 class="footer-widget-title">Métodos de Pago</h4>
                        <div class="footer-newsletter">
                            <p></p>
                        <ul class="pago">
                            <!--<img src="/assets/img/footer/01.png" alt="">
                            <a href="">
                            <img src="/assets/img/footer/02.png" alt="">
                            </a>-->
                            <a href=""><img src="/assets/img/footer/03.png" alt="">
                            </a>
                            <a href=""><img src="/assets/img/footer/04.png" alt=""></a>
                           
                        </ul>
                            <!--<div class="subscribe-form">
                                <form action="#">
                                    <input type="email" class="form-control" placeholder="Correo electrónico">
                                    <button class="theme-btn" type="submit"><strong>Suscríbete ahora</strong>
                                        <i class="far fa-paper-plane"></i>
                                    </button>
                                </form>
                            </div>-->
                        </div>
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
                        &copy; Copyright <span id="date"></span> <a href="#"> <strong>123 RENTING</strong></a> Todos los derechos reservados 2023.
                    </p>
                </div>
                <div class="col-md-6 align-self-center">
                    <ul class="footer-social">
                        <div class="header-top-social">
                            <a href="https://www.facebook.com/profile.php?id=100063699933991&ref=bookmarks"><i
                                    class="fab fa-facebook-f"></i></a>
                            <a href="https://www.instagram.com/123renting.es/?hl=es"><i class="fab fa-instagram"></i></a>
                            <a href="https://twitter.com/1Renting"><i class="fab fa-twitter"></i></a>
                            <a href="https://www.youtube.com/channel/UCDktymZ1Gi_bvVykstBc57Q"><i class="fa-brands fa-youtube"></i></a>
                            <a
                                href="https://www.google.com/maps/place/123Renting/@39.5904605,-0.464268,17z/data=!3m1!4b1!4m6!3m5!1s0xd605da73e2c14c5:0x46e6275152a4f1f5!8m2!3d39.5904605!4d-0.464268!16s%2Fg%2F11h_2c1zdp?entry=ttu">
                                <i class="fa-brands fa-google"></i></a>
                        </div>
                        </ul>
                </div>
            </div>
        </div>
    </div>
</footer>
<!-- footer area end -->
</template>