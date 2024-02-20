<template>
    <div class="hero-section">
        <div class="hero-slider owl-carousel owl-theme">
            <div class="hero-single" style="background: url(/assets/img/slider/slider-1.png)">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-9 col-lg-7">
                            <div class="hero-content">
                                <h1 class="hero-title wow animate__animated animate__fadeInUp"
                                        data-wow-duration="1s" data-wow-delay=".50s">
                                        {{$t('alquiler')}} <br>
                                        <span>{{$t('coches_de')}}
                                        </span> {{$t('visitanos')}}
                                    </h1>
                                    <p class="wow animate__animated animate__fadeInUp" data-wow-duration="1s"
                                        data-wow-delay=".75s">
                                        {{$t('podras')}} <br>{{$t('sonado')}}
                                    </p>
                                    <div>
                                        <a href="ofertas" class="theme-btn">{{$t('ver_mas')}} &nbsp;<i class="far fa-arrow-right"></i></a>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hero-slider owl-carousel owl-theme">
            <div class="hero-single" style="background: url(/assets/img/slider/slider-2.png)">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-9 col-lg-7">
                            <div class="hero-content">
                                <h1 class="hero-title wow animate__animated animate__fadeInUp"
                                        data-wow-duration="1s" data-wow-delay=".50s">
                                        {{$t('una_experiencia')}} <br>
                                        <span> {{$t('de_lujo')}}
                                        </span> {{$t('alcance')}}
                                    </h1>
                                    <p class="wow animate__animated animate__fadeInUp" data-wow-duration="1s"
                                        data-wow-delay=".75s">
                                        {{$t('somos')}} <br> {{$t('alta_gama')}}
                                    </p>
                                    <div>
                                        <a href="ofertas" class="theme-btn">{{$t('ver_mas')}} &nbsp;<i class="far fa-arrow-right"></i></a>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="hero-slider owl-carousel owl-theme">
            <div class="hero-single" style="background: url(/assets/img/slider/slider-3.png)">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-9 col-lg-7">
                            <div class="hero-content">
                                <h1 class="hero-title wow animate__animated animate__fadeInUp"
                                        data-wow-duration="1s" data-wow-delay=".50s">
                                        {{$t('alquila')}} <br>
                                        <span> {{$t(' moto')}}
                                        </span> {{$t('estes')}}
                                    </h1>
                                    <p class="wow animate__animated animate__fadeInUp" data-wow-duration="1s"
                                        data-wow-delay=".75s">
                                        {{$t('queremos')}}
                                    </p>
                                    <div>
                                        <a href="ofertas" class="theme-btn">{{$t('ver_mas')}} &nbsp;<i class="far fa-arrow-right"></i></a>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
     // Otras configuraciones de Nuxt.js...
   
     plugins: [
       { src: '~/plugins/owl-carousel.js', ssr: false }
     ],
   
     // Otras configuraciones de Nuxt.js...
   }
</script>
