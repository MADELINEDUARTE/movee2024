<template>
    <!-- header area -->
<header class="header">
    <!-- top header -->
    
<header class="header">
<div class="header-top">
    <div class="container">
        <div class="header-top-wrapper">
        </div>
    </div>
</div>
<div class="main-navigation">
    <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="index">
            <img src="/assets/img/logo/logo-full-light.png" alt="logo">
        </a>
        <div class="mobile-menu-right">
            <div class="header-account header-mobile-account">
                <div class="dropdown">
                    <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="far fa-user-circle"></i>
                    </button>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><a class="dropdown-item" href="profile"><i class="far fa-user"></i> My Profile</a></li>
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
                    <li class="nav-item dropdown"></li>
                    <li class="nav-item dropdown">
                            <a class="nav-link active" href="#" data-bs-toggle="dropdown">{{$t('inicio')}}</a>
                        </li>
                        <li class="nav-item"><a class="nav-link" href="ofertas">{{$t('ofertas')}}</a></li>
                            <li class="nav-item"><a class="nav-link" href="renting-flexible">{{$t('renting_flexible')}}</a></li>   
                            <li class="nav-item"><a class="nav-link" href="particulares">{{$t('particulares')}}</a></li>
                            <li class="nav-item"><a class="nav-link" href="empresas">{{$t('empresas')}}</a></li>
                            <li class="nav-item"><a class="nav-link" href="autonomos">{{$t('autonomos')}}</a></li>
                            <li class="nav-item"><a class="nav-link" href="contact">{{$t('contacto')}}</a></li>
                </ul>
                <div class="header-nav-right">
                    <div class="header-phone">
                        <div class="header-phone-icon">
                        </div>
                    </div>
                    <div class="header-account">
                        <BottonLanguage />
                    </div>
                        <div class="header-top-social">
                            <a href="#"><i class="fa-regular fa-envelope"></i></a>
                            <a href="#"><i class="fa-sharp fa-solid fa-user"></i></a>
                        </div>
                </div>
            </div>
        </nav>   

</div>
                
</header>
    
</header>

<!-- header area end -->
</template>