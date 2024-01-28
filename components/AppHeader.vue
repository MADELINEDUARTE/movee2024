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
                                    <a href="mailto:info@example.com">{{$t('correo')}}</a>
                                </div>
                            </li>
                            <li>
                                <div class="header-top-contact-icon">
                                    <img src="/assets/img/icon/clock.svg" alt="">
                                </div>
                                <div class="header-top-contact-info">
                                    <a href="#">{{$t('horarios')}}</a>
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
                        <a href="https://www.facebook.com/profile.php?id=100063699933991ref=bookmarks"><i class="fab fa-facebook-f"></i></a>
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
                              <li><a class="dropdown-item" nuxt-link to="profile"><i class="far fa-user"></i>{{$t('perfil')}}</a></li>
                              <li><a class="dropdown-item" href="billing"><i class="far fa-clipboard-list"></i> {{$t('facturacion')}}</a></li>
                              <li><a class="dropdown-item" href="setting"><i class="far fa-cog"></i>{{$t('ajustes')}}</a></li>
                              <li><a class="dropdown-item" href="#"><i class="far fa-sign-out"></i>{{$t('cerrar_sesion')}}</a></li>
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
                            <a class="nav-link active" href="#" data-bs-toggle="dropdown">{{$t('inicio')}}</a>
                        </li>
                        <li class="nav-item"><a class="nav-link" href="#visitanos">
                            {{$t('oficinas')}}</a></li>
                        <li class="nav-item"><a class="nav-link" href="#flota">{{$t('flota')}}</a></li>
                    </ul>
                    <div class="header-nav-right">
                        <div class="header-phone">
                            <div class="header-phone-icon">
                                <img src="/assets/img/icon/phone.svg" alt="">
                            </div>
                            <div class="header-phone-content">
                                <span>{{$t('necesitas_furgo')}}</span>
                                <h5 class="header-phone-number"><a href="tel:+2123654789">{{$t('telefono')}}</a></h5>
                            </div>
                        </div>
                        <div class="header-btn mt-2">
                            <a href="#iniciatureserva" class="theme-btn"><strong>{{$t('reserva')}}</strong></a>
                        </div>
                        <div class="header-account">
                            <div class="dropdown">
                                <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                 <i class="far fa-user-circle"></i>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                  <li><a class="dropdown-item" href="profile"><i class="far fa-user"></i> {{$t('perfil')}}</a></li>
                                  <li><a class="dropdown-item" href="billing"><i class="far fa-clipboard-list"></i>{{$t('facturacion')}}</a></li>
                                  <li><a class="dropdown-item" href="setting"><i class="far fa-cog"></i> {{$t('ajustes')}}</a></li>
                                  <li><a class="dropdown-item" href="#"><i class="far fa-sign-out"></i>{{$t('cerrar_sesion')}}</a></li>
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