<template>
    <LayoutWeb>
         <div class="site-breadcrumb" style="background: url(/assets/img/comerciales/01.png)">
            <div class="container">
                <h2 class="breadcrumb-title">{{$t('renting_co')}} <br> <span>{{$t('comerciales')}}</span> </h2>
                    <br>
                    <br>
                    <div>
                        <a href="ofertas" class="theme-btn">{{$t('ver_mas')}} &nbsp;<i class="far fa-arrow-right"></i></a>
                    </div>
            </div>
        </div>


        <div class="about-area">
            <div class="container">
                <div class="col-lg-">
            <div class="about-right">
                <div class="site-heading mb-3">
                   
                    <h2 class="site-title">
                        {{$t('c_comerciales')}} <span>{{$t('sin_entrada')}}</span> {{$t('ofer_adaptadas')}}
                    </h2>
                </div>
                <p> {{$t('t_comerciales')}}
                </p>
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
                            <h4 class="textflex">{{$t('r_flexible')}}</h4>
                        </div>
                    </div>
                     <div class="car-top">
                        <h4><a href="#">{{$t('modelo_coche')}} <br> {{$t('modelo_coche2')}}</a></h4>
                        <span><i class="fas fa-star"></i> {{$t('valoracion')}}</span>
                    </div>
                    <div>
                        <div class="car-top">
                        <span class="car-price"><sub>{{$t('desde')}} </sub> <strong> {{$t('precio')}} </strong> <sub>{{$t('al_mes')}}</sub></span>
                        </div>
                    </div>
                    <div class="car-footer">
                            
                            <a href="configuratuoferta" class="theme-btn1">{{$t('particulares')}}</a>
                            <a href="configuratuoferta" class="theme-btn1">{{$t('empresas')}}</a>
                            <a href="configuratuoferta" class="theme-btn1">{{$t('autonomos')}}</a>
                        </div>
                </div>
            </div>
        </div>
    </div>
            </div>
            <div class="text-center mt-4">
            <a href="ofertas" class="theme-btn">{{$t('ver_mas')}} </a>
        </div>
        </div>
    </div>
        </LayoutWeb>
</template>