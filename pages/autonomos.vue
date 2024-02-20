<template>
<LayoutWeb>
    <!-- breadcrumb -->
        <div class="site-breadcrumb" style="background: url(assets/img/autonomos/01.png)">
            <div class="container">
                <h2 class="breadcrumb-title">{{$t('ofertas_ren')}} <br> <span>{{$t('p_autonomos')}}</span> </h2>
                    <br>
                    <br>
                    <div>
                        <a href="ofertas" class="theme-btn">{{$t('ver_coches')}} &nbsp;<i class="far fa-arrow-right"></i></a>
                    </div>
            </div>
        </div>

        <div class="about-area">
            <div class="container">
                <div class="col-lg-">
            <div class="about-right">
                <div class="site-heading mb-3">
                   
                    <h2 class="site-title">
                        {{$t('ofertas_destacadas')}}  <span>{{$t('p_autonomos')}} </span>
                    </h2>
                </div>
                <p>{{$t('incluidoa')}}</p>
            </div>
        </div>
            </div>
        </div>

    <div class="car-area bg py-120">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 mx-auto">
                </div>
                <div class="row">
        <div class="col-lg-6 col-xl-4">
            <div class="car-item">   
                <div class="car-img">
                    <img src="/assets/img/car/01.png" alt="">
                </div>
                 <div class="car-content">
                    <div class="car-top">
                        <h4><a href="#">{{$t('modelo_coche')}} <br> {{$t('modelo_coche2')}}</a></h4>
                        <span><i class="fas fa-star"></i> {{$t('valoracion')}}</span>
                    </div>
                    <div class="car-footer">
                        <span class="car-price"><sub>{{$t('desde')}} </sub> <strong>{{$t('precio')}} </strong>  <sub>{{$t('al_mes')}}</sub></span>
                        <a href="configuratuoferta" class="theme-btn">{{$t('ver_ahora')}}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
            </div>
            <div class="text-center mt-4">
            <a href="ofertas" class="theme-btn">{{$t('ver_destacados')}} </a>
        </div>
        </div>
    </div>
    
    <div class="about-area">
            <div class="container">
                <div class="col-lg-">
            <div class="about-right">
                <div class="site-heading mb-3">
                   
                    <h2 class="site-title">
                        {{$t('en_movve')}} <span>{{$t('coches_s')}} </span>
                    </h2>
                </div>
                <p>{{$t('nueva_solucion')}} <br> {{$t('nueva_solucion2')}}</p>
            </div>
        </div>
            </div>
        </div>

    <div class="car-area bg py-120">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 mx-auto">
                </div>
                <div class="row">
        <div class="col-lg-6 col-xl-4">
            <div class="car-item">   
                <div class="car-img">
                    <img src="/assets/img/car/01.png" alt="">
                </div>
                <div class="car-content">
                    <div class="car-top">
                        <div>
                            <h4 class="textflex">{{$t('renting_autonomos')}}</h4>
                        </div>
                    </div>
                     <div class="car-top">
                        <h4><a href="#">{{$t('modelo_coche')}} <br> {{$t('modelo_coche2')}}</a></h4>
                        <span><i class="fas fa-star"></i> {{$t('valoracion')}}</span>
                    </div>
                    <div class="car-footer">
                        <span class="car-price"><sub>{{$t('desde')}} </sub> <strong>{{$t('precio')}} </strong>  <sub>{{$t('al_mes')}}</sub></span>
                        <a href="configuratuoferta" class="theme-btn">{{$t('ver_ahora')}}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
            </div>
            <div class="text-center mt-4">
            <a href="ofertas" class="theme-btn">{{$t('ver_coches')}} </a>
        </div>
        </div>
    </div>
</LayoutWeb>
</template>