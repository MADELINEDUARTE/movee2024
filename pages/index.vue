<template>
<LayoutWeb>
<main class="main">
<HomeCarousel/>

    <div class="calcula">
        <img class="img-calcula" src="/assets/img/calcula/1.png" alt="">
        <div class="calculat">
        <h1>{{$t('que_coche')}} <br> {{$t('mejor')}}<br>
        <span> {{$t('proxima')}}</span></h1>
        <a href="configuratuoferta" class="theme-btn">{{$t('calcula')}} &nbsp;<i class="far fa-arrow-right"></i></a>
        </div>
    </div>

    <div class="find-car">
    <div class="feature-content">
        <div class="col-lg-6 mx-auto">
            <div class="site-heading text-center">
                <h2 class="site-title">{{$t('bienvenido')}}  <span>{{$t('mundo')}}</span></h2>
                </div>
            </div>
            <div class="container">
                 <form action="#">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="form-group">
                                <label>{{$t('elige')}}</label>
                                <input type="text" class="form-control" :placeholder="$t('marca')"> 
                            </div>
                        </div>
                            
            <div class="col-lg-6">
                <div class="form-group">
                    <label>{{$t('elige2')}}</label>
                        <input type="text" class="form-control" :placeholder="$t('modelo')">
                 </div>
            </div>
            <div class="btncentro">
                <a href="ofertas" button class="theme-btn" type="submit">{{$t('buscar')}} <i class="far fa-arrow-right"></i></a>
            </div>
            </div>
            </form>
        </div>
    </div>
</div>
    
<div class="car-area bg py-120">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 mx-auto">
                <div class="site-heading text-center">
                    <h2 class="site-title">{{$t('mejores')}} <span>{{$t('lujos')}}</span></h2>
                </div>
            </div>
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
                        <a href="configura" class="theme-btn">{{$t('ver_ahora')}}</a>
                    </div>
                </div>
                </div>
            
            </div>
        </div>
    </div>
</div>

    <div class="feature-area pt-120">
        <div class="container">
            <div class="feature-wrapper">
                <div class="row">                  
                    <div class="site-heading text-center">
                        <h2 class="site-title">{{$t('cual_es')}} <span>{{$t('tipo')}}</span></h2>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="feature-item">
                            <div class="feature-icon">
                                <img src="/assets/img/icon/Recurso 1.svg" alt="">
                            </div>
                            <div class="feature-content">
                                <h4>{{$t('compactos')}}</h4>
                                <p>{{$t('caben_en')}}</p>
                                <br>
                            </div>
                            <a href="compactos" class="theme-btn">{{$t('ver_ahora')}}</a>
                        </div>
                        
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="feature-item">
                            <div class="feature-icon">
                                <img src="/assets/img/icon/Recurso 2.svg" alt="">
                            </div>
                            <div class="feature-content">
                                <h4>{{$t('berlinas')}}</h4>
                                <p>{{$t('equilibrio')}}</p>
                                <br>
                            </div>
                            <a href="berlinas" class="theme-btn">{{$t('ver_ahora')}}</a>
                        </div>
                        
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="feature-item">
                            <div class="feature-icon">
                                <img src="/assets/img/icon/Recurso 3.svg" alt="">
                            </div>
                            <div class="feature-content">
                                <h4>{{$t('comerciales')}}</h4>
                                <p>{{$t('vida')}}</p>
                                <br>
                            </div>
                            <a href="comerciales" class="theme-btn">{{$t('ver_ahora')}}</a>
                        </div>
                        
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="feature-item">
                            <div class="feature-icon">
                                <img src="/assets/img/icon/Recurso 4.svg" alt="">
                            </div>
                            <div class="feature-content">
                                <h4>{{$t('suvs')}}</h4>
                                <p>{{$t('los_reyes')}}</p>
                                <br>
                            </div>
                            <a href="suvs" class="theme-btn">{{$t('ver_ahora')}}</a>
                        </div>
                        
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="feature-item">
                            <div class="feature-icon">
                                <img src="/assets/img/icon/Recurso 5.svg" alt="">
                            </div>
                            <div class="feature-content">
                                <h4>{{$t('furgonetas')}}</h4>
                                <p>{{$t('con_espacio')}}</p>
                                <br>
                            </div>
                            <a href="furgonetas" class="theme-btn">{{$t('ver_ahora')}}</a>
                        </div>
                        
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="feature-item">
                            <div class="feature-icon">
                                <img src="/assets/img/icon/Recurso 6.svg" alt="">
                            </div>
                            <div class="feature-content">
                                <h4>{{$t('hibridos')}}</h4>
                                <p>{{$t('nueva_gen')}}</p>
                                <br>
                            </div>
                            <a href="furgonetas" class="theme-btn">{{$t('ver_ahora')}}</a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="site-heading text-center">
    <h2 class="site-title">{{$t('ventajas')}} <span>{{$t('movve')}}</span></h2>
</div>

    <div class="choose-area">
        <div class="container-fluid">
            <div class="row ">
                <div class="col-lg-6">
                    <div class="choose-content-wrapper">
                        <div class="choose-item">
                            <div class="choose-item-icon">
                                <img src="/assets/img/icon/car.svg" alt="">
                            </div>
                            <div class="choose-item-info">
                                <h3>{{$t('precio_sin')}}</h3>
                                <p>{{$t('suscribirte')}}</p>
                            </div>
                        </div>
                        <div class="choose-item">
                            <div class="choose-item-icon">
                                <img src="/assets/img/icon/car-key.svg" alt="">
                            </div>
                            <div class="choose-item-info">
                                <h3>{{$t('nuestros_precios')}}</h3> 
                                <p>{{$t('sin_costes')}}</p>
                            </div>
                        </div>
                        <div class="choose-item">
                                <div class="choose-item-icon">
                                    <img src="/assets/img/icon/seguro.svg" alt="">
                                </div>
                                <div class="choose-item-info">
                                    <h3>{{$t('seguro')}}</h3> 
                                    <p>{{$t('riesgo')}}</p>
                                </div>
                        </div>
                        <div class="choose-item">
                                <div class="choose-item-icon">
                                    <img src="/assets/img/icon/reparar.svg" alt="">
                                </div>
                                <div class="choose-item-info">
                                    <h3>{{$t('revision')}}</h3> 
                                    <p>{{$t('servicio')}}</p>
                                </div>
                        </div>
                        <div class="choose-item">
                                <div class="choose-item-icon">
                                    <img src="/assets/img/icon/cambiorueda.svg" alt="">
                                </div>
                                <div class="choose-item-info">
                                    <h3>{{$t('cambio_ruedas')}}</h3> 
                                    <p>{{$t('neumaticos')}}</p>
                                </div>
                        </div>
                        <div class="choose-item">
                                <div class="choose-item-icon">
                                    <img src="/assets/img/icon/asistencia.svg" alt="">
                                </div>
                                <div class="choose-item-info">
                                    <h3>{{$t('asistencia')}}</h3> 
                                    <p>{{$t('carretera')}}</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="about-area">
        <div class="container">
            <div class="col-lg-">
                <div class="about-right">
                    <div class="site-heading mb-3">
                        <span class="site-title-tagline">{{$t('porque')}}</span>
                        <h2 class="site-title">
                        {{$t('somos_la')}} <span>{{$t('nueva')}}</span> {{$t('movilidad')}}
                        </h2>
                    </div>
                    <p> {{$t('suscripcion')}}
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="process-area pt-120 pb-80">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 mx-auto">
                </div>

                <div class="row justify-content-between">
                    <div class="col-lg-3 col-md-6 text-center   mb-50">
                        <div class="process-single">
                            <div class="icon">
                                <img src="/assets/img/icon/destination.svg" alt="">
                            </div>
                            <h4>{{$t('todo_incluido')}}</h4>
                            <p>{{$t('impuestos')}}</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center   mb-50">
                        <div class="process-single">
                            <div class="icon">
                                <img src="/assets/img/icon/confirm-ride.svg" alt="">
                            </div>
                            <h4>{{$t('flexible')}}</h4>
                            <p>{{$t('personaliza')}}</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center   mb-50">
                        <div class="process-single">
                            <div class="icon">
                                <img src="/assets/img/icon/online-payment.svg" alt="">
                            </div>
                            <h4>{{$t('mejores_ofertas')}}</h4>
                            <p>{{$t('actualizamos')}}</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center   mb-50">
                        <div class="process-single">
                            <div class="icon">
                                <img src="/assets/img/icon/choose-car.svg" alt="">
                            </div>
                            <h4>{{$t('totalmente')}}</h4>
                            <p>{{$t('de_forma')}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="partner-area bg pt-50 pb-50">
    <div class="container">
        <div class="partner-wrapper partner-slider owl-carousel ">
            <img src="/assets/img/partner/01.png" alt="thumb">
            <img src="/assets/img/partner/02.png" alt="thumb">
            <img src="/assets/img/partner/03.png" alt="thumb">
            <img src="/assets/img/partner/04.png" alt="thumb">
            <img src="/assets/img/partner/05.png" alt="thumb">
            <img src="/assets/img/partner/06.png" alt="thumb">
            <img src="/assets/img/partner/07.png" alt="thumb">
        </div>
    </div>
</div>

  <div class="faq-area py-120">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="faq-right">
                    </div>
                </div>
                <div class="about-right">
                        <div class="site-heading mb-3">
                            <h2 class="site-title">
                                {{$t('tenemos')}} <span> {{$t('a_todas')}} </span> {{$t('dudas')}}
                            </h2>
                        </div>
                    <div class="col-lg-12">
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <span><i class="fa-thin fa-comments-question-check"></i></span> {{$t('pregunta1')}}
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show"
                                    aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        {{$t('respuesta1')}}
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <span><i class="fa-thin fa-comments-question-check"></i></span> {{$t('pregunta2')}}
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        {{$t('respuesta2')}}
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree">
                                        <span><i class="fa-thin fa-comments-question-check"></i></span> {{$t('pregunta3')}}
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse"
                                    aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        {{$t('respuesta3')}}
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFour">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour" aria-expanded="false"
                                        aria-controls="collapseFour">
                                        <span><i class="fa-thin fa-comments-question-check"></i></span> {{$t('pregunta4')}}
                                    </button>
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse"
                                    aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        {{$t('respuesta4')}}
                                    </div>
                                </div>
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

<script>
onNuxtReady(async () => {
    (function ($) {
        "use strict";

       
        // partner-slider
        $('.partner-slider').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: false,
            autoplay: true,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 6
                }
            }
        });


        // testimonial-slider
        $('.testimonial-slider').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 4
                }
            }
        });


        // car-single-slider
        $('.car-single-slider').owlCarousel({
            loop: true,
            margin: 20,
            nav: true,
            dots: false,
            navText: [
                "<i class='fal fa-long-arrow-left'></i>",
                "<i class='fal fa-long-arrow-right'></i>"
            ],
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });


        // // fun fact counter
        // $('.counter').countTo();
        // $('.counter-box').appear(function () {
        //     $('.counter').countTo();
        // }, {
        //     accY: -100
        // });


            /**
             * TODO donde se usa esto
             */
        // magnific popup init
        // $(".popup-gallery").magnificPopup({
        //     delegate: '.popup-img',
        //     type: 'image',
        //     gallery: {
        //         enabled: true
        //     },
        // });

        // $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
        //     type: "iframe",
        //     mainClass: "mfp-fade",
        //     removalDelay: 160,
        //     preloader: false,
        //     fixedContentPos: false
        // });

        // // countdown
        // if ($('#countdown').length) {
        //     $('#countdown').countdown('2030/01/30', function (event) {
        //         $(this).html(event.strftime('' + '<div class="row">' + '<div class="col countdown-single">' + '<h2 class="mb-0">%-D</h2>' + '<h5 class="mb-0">Day%!d</h5>' + '</div>' + '<div class="col countdown-single">' + '<h2 class="mb-0">%H</h2>' + '<h5 class="mb-0">Hours</h5>' + '</div>' + '<div class="col countdown-single">' + '<h2 class="mb-0">%M</h2>' + '<h5 class="mb-0">Minutes</h5>' + '</div>' + '<div class="col countdown-single">' + '<h2 class="mb-0">%S</h2>' + '<h5 class="mb-0">Seconds</h5>' + '</div>' + '</div>'));
        //     });
        // }

        /**
         * TODO este se usa?
         */
        // // copywrite date
        // let date = new Date().getFullYear();
        // $("#date").html(date);

        // find-car date picker 
        // if ($('.date-picker').length) {
        //     $(function () {
        //         $(".date-picker").datepicker();
        //     });
        // }

        // // find-car time picker 
        // if ($('.time-picker').length) {
        //     $(function () {
        //         $(".time-picker").timepicker();
        //     });
        // }

        // // profile image btn
        // $(".profile-img-btn").click(function () {
        //     $(".profile-img-file").click(); 
        // });


    })(jQuery);
    // do something with myAnalyticsLibrary
  })
// $(document).ready(function() {
 
//  $(".owl-carousel").owlCarousel();

// });
// document.addEventListener('DOMContentLoaded', function () {
//   const bdark = document.querySelector('#bdark');
//   const body = document.querySelector('body');

//   load();

//   bdark.addEventListener('click', function (e) {
//     body.classList.toggle('darkmode');
//     store(body.classList.contains('darkmode'));
//   });

//   function load() {
//     const darkmode = localStorage.getItem('darkmode');

//     if (!darkmode) {
//       store('false');
//     } else if (darkmode === 'true') {
//       body.classList.add('darkmode');
//     }
//   }

//   function store(value) {
//     localStorage.setItem('darkmode', value);
//   }
// });
</script>

  