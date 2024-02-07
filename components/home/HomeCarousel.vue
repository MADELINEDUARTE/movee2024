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
                                        Alquiler de <br>
                                        <span>Coches de lujo
                                        </span> ¡Visítanos!
                                    </h1>
                                    <p class="wow animate__animated animate__fadeInUp" data-wow-duration="1s"
                                        data-wow-delay=".75s">
                                        Podrás conducir los coches que siempre <br>has soñado
                                    </p>
                                    <div>
                                        <a href="ofertas.html" class="theme-btn">Ver más &nbsp;<i class="far fa-arrow-right"></i></a>
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
                                        Una experiencia <br>
                                        <span> de lujo
                                        </span> a tu alcance
                                    </h1>
                                    <p class="wow animate__animated animate__fadeInUp" data-wow-duration="1s"
                                        data-wow-delay=".75s">
                                        Somos una empresa líder en alquiler de vehículos <br> de alta gama.
                                    </p>
                                    <div>
                                        <a href="ofertas.html" class="theme-btn">Ver más &nbsp;<i class="far fa-arrow-right"></i></a>
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
                                        Alquila la <br>
                                        <span> Moto Perfecta
                                        </span> Estés donde estés
                                    </h1>
                                    <p class="wow animate__animated animate__fadeInUp" data-wow-duration="1s"
                                        data-wow-delay=".75s">
                                        Queremos que vivas una experiencia de conducción óptima.
                                    </p>
                                    <div>
                                        <a href="ofertas.html" class="theme-btn">Ver más &nbsp;<i class="far fa-arrow-right"></i></a>
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
