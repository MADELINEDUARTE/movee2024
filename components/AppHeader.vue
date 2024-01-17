<template>
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
                <a class="navbar-brand" href="#">
                    <img src="/assets/img/logo/logoh.png" alt="logo">
                </a>
                <div class="mobile-menu-right">
                    <div class="header-account header-mobile-account">
                        <div class="dropdown">
                            <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
                             <i class="far fa-user-circle"></i>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end">
                              <li><a class="dropdown-item" nuxt-link to="profile"><i class="far fa-user"></i> My Profile</a></li>
                              <li><a class="dropdown-item" href="billing"><i class="far fa-clipboard-list"></i> Billing Info</a></li>
                              <li><a class="dropdown-item" href="setting"><i class="far fa-cog"></i> Settings</a></li>
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
                                  <li><a class="dropdown-item" href="profile"><i class="far fa-user"></i> Mi perfil</a></li>
                                  <li><a class="dropdown-item" href="billing"><i class="far fa-clipboard-list"></i>Facturación</a></li>
                                  <li><a class="dropdown-item" href="setting"><i class="far fa-cog"></i> Ajustes</a></li>
                                  <li><a class="dropdown-item" href="#"><i class="far fa-sign-out"></i>Cerrar sesión</a></li>
                                </ul>
                              </div>
                        </div>
                        <div class="header-account">
                            <BottonLanguage />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</header>
<!-- header area end -->
</template>