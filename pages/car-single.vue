<template>
<LayoutWeb>
<main class="main">
    <div class="car-item-single py-120">
        <div class="container">
            <div class="car-single-wrapper">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="car-single-slider-box">
                        <div class="car-single-slider owl-carousel owl-theme">
                        <div>
                        <img src="/assets/img/car/01.jpg" alt="">
                        <div class="car-footer">
                            <a href="#" class="theme-btn1"><strong>{{$t('basico')}}</strong></a>
                            <a href="#" class="theme-btn2"><strong>{{$t('medio')}}</strong></a>
                            <a href="#" class="theme-btn3"><strong>{{$t('primiun')}}</strong></a>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
       
                    <div class="col-lg-4">
                        <div class="car-top">
                            <h4><a class="letrac" href="#">{{$t('nombre_coche1')}}<br><span class="modelo">{{$t('nombre_coche2')}}</span></a></h4>
                        </div>

                        <div class="car-single-details">
                        <h5 class="mb-2">{{$t('detalle_furgo')}}</h5>
                        <ul class="car-list">
                            <li><img src="/assets/img/car/euro.png" class="far fa-car">{{$t('precio_d')}}&nbsp;&nbsp;</li>
                            <li><img src="/assets/img/car/pasajeros.png" class="far fa-user-tie">{{$t('personas')}}&nbsp;</li>
                            <li><img src="/assets/img/car/puerta.png" class="far fa-gas-pump">&nbsp;&nbsp;&nbsp;{{$t('puertas')}}&nbsp;&nbsp;</li>
                        </ul>
                    </div>

                    <div class="car-single-terms mb-3">
                        <h5 class="mb-2">{{$t('ofi_recogida')}}</h5>
                        <ul class="car-single-terms-list">
                            <li>{{$t('ofi_recogida')}}: <span>{{$t('direccion2')}}</span></li>
                            <li>{{$t('fecha_recogida')}}: <span>{{$t('mm_dd_aa')}}</span></li>
                            <li>{{$t('h_recogida')}}: <span>{{$t('cero')}}</span></li>
                        </ul>
                    </div>

                    <div class="car-single-terms mb-3">
                        <h5 class="mb-2">{{$t('ofi_devolucion')}}</h5>
                        <ul class="car-single-terms-list">
                            <li>{{$t('ofi_devolucion')}} <span>{{$t('direccion2')}}</span></li>
                            <li>{{$t('fecha_devolucion')}} <span>{{$t('mm_dd_aa')}}</span></li>
                            <li>{{$t('h_devolucion')}}: <span>{{$t('cero')}}</span></li>
                        </ul>
                    </div>

                    <div class="car-single-share">
                        <h5 class="mb-3">{{$t('total_pagar')}}</h5>
                        <div class="car-single-price">
                            <span class="car-price"><strong>600€</strong><sub>/ 7 días</sub></span>
                            <a href="car-single2.html" class="theme-btn">{{$t('aceptar_con')}}</a>
                        </div>
                    </div>
                    </div>  
                </div>
            </div>
        </div>
    </div>
</main>
</LayoutWeb>
</template>