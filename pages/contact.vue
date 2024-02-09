<template>
<LayoutWeb>
    <!-- breadcrumb -->
        <div class="site-breadcrumb" style="background: url(assets/img/contact/02.png)">
            <div class="container">
                <h2 class="breadcrumb-title">{{$t('comunicate')}} <br> <span>{{$t('nosotros')}}</span> </h2>
                    <br>
                    <br>
                    <div>
                        <a href="ofertas" class="theme-btn">{{$t('ver_coches')}} &nbsp;<i class="far fa-arrow-right"></i></a>
                    </div>
            </div>
        </div>

        <div class="contact-area py-120">
            <div class="container">
                <div class="contact-content">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="contact-info">
                                <div class="contact-info-icon">
                                    <i class="fal fa-map-marker-alt"></i>
                                </div>
                                <div class="contact-info-content">
                                    <h5>{{$t('nuestras_ofi')}}</h5>
                                    <p>{{$t('madrid')}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="contact-info">
                                <div class="contact-info-icon">
                                    <i class="fal fa-phone"></i>
                                </div>
                                <div class="contact-info-content">
                                    <h5>{{$t('contactanos')}}</h5>
                                    <p>{{$t('telefono')}} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="contact-info">
                                <div class="contact-info-icon">
                                    <i class="fal fa-envelope"></i>
                                </div>
                                <div class="contact-info-content">
                                    <h5>{{$t('correo')}}</h5>
                                    <p>{{$t('correo2')}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="contact-info">
                                <div class="contact-info-icon">
                                    <i class="fal fa-clock"></i>
                                </div>
                                <div class="contact-info-content">
                                    <h5>{{$t('horario')}}</h5>
                                    <p>{{$t('semana')}} 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="contact-wrapper">
                    <div class="row">
                        <div class="col-lg-6 align-self-center">
                            <div class="contact-img">
                                <img src="/assets/img/contact/01.png" alt="">
                            </div>
                        </div>
                        <div class="col-lg-6 align-self-center">
                            <div class="contact-form">
                                <div class="contact-form-header">
                                    <h2>{{$t('contactanos')}}</h2>
                                    <p>{{$t('texto1')}} </p>
                                </div>
                                <form method="post" action="/moveen/assets/php/contact.php" id="contact-form">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" name="name"
                                                    :placeholder="$t('nombre')" required>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <input type="email" class="form-control" name="email"
                                                    :placeholder="$t('email')" required>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" name="subject"
                                            :placeholder="$t('consulta')" required>
                                    </div>
                                    <div class="form-group">
                                        <textarea name="message" cols="30" rows="5" class="form-control"
                                            :placeholder="$t('mensaje')"></textarea>
                                    </div>
                                    <button type="submit" class="theme-btn">{{$t('b_enviar')}}</button>
                                    <div class="col-md-12 mt-3">
                                        <div class="form-messege text-success"></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
        </div>

        <div class="contact-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96708.34194156103!2d-74.03927096447748!3d40.759040329405195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4a01c8df6fb3cb8!2sSolomon%20R.%20Guggenheim%20Museum!5e0!3m2!1sen!2sbd!4v1619410634508!5m2!1sen!2s"
                style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
</LayoutWeb>
</template>