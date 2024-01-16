<template>
    <!-- preloader -->
<div class="preloader">
    <div class="loader-ripple">
        <div></div>
        <div></div>
    </div>
</div>
<!-- preloader end -->
<!-- header area -->
<header class="header">
    <!-- top header -->
    <div class="header-top">
        <div class="container">
            <div class="header-top-wrapper">
                <div class="header-top-left">
                    <div class="header-top-contact">
                        <ul>
                            <li>
                                <div class="header-top-contact-icon">
                                    <img src="/assets/img/icon/mail.svg" alt="">
                                </div>
                                <div class="header-top-contact-info">
                                    <a href="mailto:info@example.com">info@123renting.es</a>
                                </div>
                            </li>
                            <li>
                                <div class="header-top-contact-icon">
                                    <img src="/assets/img/icon/clock.svg" alt="">
                                </div>
                                <div class="header-top-contact-info">
                                    <a href="#">Lunes a Domingo: 9:00 a 19:00</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                
                <div class="header-top-right">
                </div>
                    <div class="header-top-social">
                        <a href="#" button id="bdark" class="fa-regular fa-eclipse"></a>
                        <a href="https://www.facebook.com/profile.php?id=100063699933991&ref=bookmarks"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/123renting.es/?hl=es"><i class="fab fa-instagram"></i></a>
                        <a href="https://twitter.com/1Renting"><i class="fab fa-twitter"></i></a>
                        <a href="https://www.youtube.com/channel/UCDktymZ1Gi_bvVykstBc57Q"><i class="fa-brands fa-youtube"></i></a>
                        <a href="https://www.google.com/maps/place/123Renting/@39.5904605,-0.464268,17z/data=!3m1!4b1!4m6!3m5!1s0xd605da73e2c14c5:0x46e6275152a4f1f5!8m2!3d39.5904605!4d-0.464268!16s%2Fg%2F11h_2c1zdp?entry=ttu"><i class="fa-brands fa-google"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="main-navigation">
        <nav class="navbar navbar-expand-lg">
            <div class="container custom-nav">
                <a class="navbar-brand" href="index.html">
                    <img src="/assets/img/logo/logoh.png" alt="logo">
                </a>
                <div class="mobile-menu-right">
                    <div class="header-account header-mobile-account">
                        <div class="dropdown">
                            <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
                             <i class="far fa-user-circle"></i>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end">
                              <li><a class="dropdown-item" href="profile.html"><i class="far fa-user"></i> My Profile</a></li>
                              <li><a class="dropdown-item" href="billing.html"><i class="far fa-clipboard-list"></i> Billing Info</a></li>
                              <li><a class="dropdown-item" href="setting.html"><i class="far fa-cog"></i> Settings</a></li>
                              <li><a class="dropdown-item" href="#"><i class="far fa-sign-out"></i> Log Out</a></li>
                            </ul>
                          </div>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-mobile-icon"><i class="far fa-bars"></i></span>
                    </button>
                </div>
                <div class="collapse navbar-collapse" id="main_nav">
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                            <a class="nav-link active" href="#" data-bs-toggle="dropdown">Inicio</a>
                        <!--<ul class="dropdown-menu fade-down">
                               <li><a class="dropdown-item" href="index.html">Home Page 01</a></li>
                                <li><a class="dropdown-item" href="index-2.html">Home Page 02</a></li>
                                <li><a class="dropdown-item" href="index-3.html">Home Page 03</a></li>
                            </ul>-->
                        </li>
                        <li class="nav-item"><a class="nav-link" href="#visitanos">Oficinas</a></li>
                            <!--<ul class="dropdown-menu fade-down">
                                <li><a class="dropdown-item" href="car.html">Car One</a></li>
                                <li><a class="dropdown-item" href="car-2.html">Car Two</a></li>
                                <li><a class="dropdown-item" href="car-single.html">Car Single</a></li>
                                <li><a class="dropdown-item" href="car-booking.html">Car Booking</a></li>
                                <li><a class="dropdown-item" href="car-checkout.html">Car Checkout</a></li>
                                <li><a class="dropdown-item" href="car-booking-confirm.html">Car Booking Confirm</a></li>
                            </ul>-->
                        
                        <li class="nav-item"><a class="nav-link" href="#flota">Flota</a></li>
                            <!--<ul class="dropdown-menu fade-down">
                                <li><a class="dropdown-item" href="about.html">About Us</a></li>
                                <li><a class="dropdown-item" href="team.html">Our Team</a></li>
                                <li><a class="dropdown-item" href="pricing.html">Pricing Plan</a></li>
                                <li><a class="dropdown-item" href="gallery.html">Gallery</a></li>
                                <li><a class="dropdown-item" href="faq.html">Faq</a></li>
                                <li><a class="dropdown-item" href="testimonial.html">Testimonials</a></li>
                                <li class="dropdown-submenu">
                                    <a class="dropdown-item dropdown-toggle" href="#">Account</a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="login.html">Login</a></li>
                                        <li><a class="dropdown-item" href="register.html">Register</a></li>
                                        <li><a class="dropdown-item" href="forgot-password.html">Forgot Password</a>
                                        </li>
                                    </ul>
                                </li>
                                <li><a class="dropdown-item" href="404.html">404 Error</a></li>
                                <li><a class="dropdown-item" href="coming-soon.html">Coming Soon</a></li>
                                <li><a class="dropdown-item" href="terms.html">Terms Of Service</a></li>
                                <li><a class="dropdown-item" href="privacy.html">Privacy Policy</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Services</a>
                            <ul class="dropdown-menu fade-down">
                                <li><a class="dropdown-item" href="service.html">Services</a></li>
                                <li><a class="dropdown-item" href="service-single.html">Service Single</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Blog</a>
                            <ul class="dropdown-menu fade-down">
                                <li><a class="dropdown-item" href="blog.html">Blog</a></li>
                                <li><a class="dropdown-item" href="blog-single.html">Blog Single</a></li>
                            </ul>
                        </li>-->
                        <!--<li class="nav-item"><a class="nav-link" href="contact.html">Contacto</a></li>-->
                    </ul>
                    <div class="header-nav-right">
                        <div class="header-phone">
                            <div class="header-phone-icon">
                                <img src="/assets/img/icon/phone.svg" alt="">
                            </div>
                            <div class="header-phone-content">
                                <span>Necesitas una Furgo?</span>
                                <h5 class="header-phone-number"><a href="tel:+2123654789">812330 | 650310707</a></h5>
                            </div>
                        </div>
                        <div class="header-btn mt-2">
                            <a href="#iniciatureserva" class="theme-btn"><strong>Reserva</strong></a>
                        </div>
                        <div class="header-account">
                            <div class="dropdown">
                                <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                 <i class="far fa-user-circle"></i>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                  <li><a class="dropdown-item" href="profile.html"><i class="far fa-user"></i> Mi perfil</a></li>
                                  <li><a class="dropdown-item" href="billing.html"><i class="far fa-clipboard-list"></i>Facturación</a></li>
                                  <li><a class="dropdown-item" href="setting.html"><i class="far fa-cog"></i> Ajustes</a></li>
                                  <li><a class="dropdown-item" href="#"><i class="far fa-sign-out"></i>Cerrar sesión</a></li>
                                </ul>
                              </div>
                        </div>
                        <div class="header-account">
                            <div class="dropdown">
                                <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fa-regular fa-language"></i>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><a class="dropdown-item" href="#"><i class="fas fa-caret-right"></i> Español</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="fas fa-caret-right"></i>Inglés</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="fas fa-caret-right"></i> Catalán</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="fas fa-caret-right"></i>Alemán</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</header>
<!-- header area end -->
<!-- main -->
<main class="main">
<div class="user-profile py-120">
    <div class="container">
        <div class="row">
            <div class="col-lg-3">
                <div class="user-profile-sidebar">
                    <div class="user-profile-sidebar-top">
                        <div class="user-profile-img">
                            <img src="/assets/img/user/01.jpg" alt="">
                            <button type="button" class="profile-img-btn"><i class="far fa-camera"></i></button>
                            <input type="file" class="profile-img-file">
                        </div>
                            <h4>Antoni Jonson</h4>
                            <p>jonson@gmail.com</p>
                    </div>
                            <ul class="user-profile-sidebar-list">
                                <li><a href="profile.html" class="active"><i class="far fa-user"></i> Mi perfil</a>
                                </li>
                                <li><a href="billing.html"><i class="far fa-draw-circle"></i> Facturación</a></li>
                                <li><a href="setting.html"><i class="far fa-cog"></i> Ajustes</a></li>
                                <li><a href="#"><i class="far fa-sign-out"></i> Cerrar sesión</a></li>
                            </ul>
                </div>
            </div>
            <div class="col-lg-9">
                <div class="user-profile-wrapper">
                    <div class="user-profile-card">
                        <h4 class="user-profile-card-title">Facturación</h4>
                        <div class="col-lg-12">
                            <div class="user-profile-form">
                                <form action="#">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Nombre</label>
                                                <input type="text" class="form-control"
                                                 placeholder="First Name">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Apellido</label>
                                                <input type="text" class="form-control"
                                                placeholder="Last Name">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Email</label>
                                                <input type="text" class="form-control"
                                                placeholder="Email">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Teléfono</label>
                                                <input type="text" class="form-control"
                                                placeholder="Phone">
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label>Dirección</label>
                                                <input type="text" class="form-control"
                                                placeholder="Address">
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label>Dirección 2</label>
                                                <input type="text" class="form-control"
                                                placeholder="Address 2">
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Ciudad</label>
                                                <input type="text" class="form-control"
                                                placeholder="City">
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Estado</label>
                                                <input type="text" class="form-control"
                                                placeholder="State">
                                            </div>
                                        </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                <label>Zip</label>
                                                <input type="text" class="form-control"
                                                 placeholder="Zip">
                                            </div>
                                        </div>
                                        <button type="button" class="theme-btn mt-4">Guardar<i class="far fa-save"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</main>
<!-- main -->
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
<!-- scroll-top -->
<a href="#" id="scroll-top"><i class="far fa-arrow-up"></i></a>
<!-- scroll-top end -->
</template>