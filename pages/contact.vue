<template>
<LayoutWeb>
    <!-- breadcrumb -->
        <div class="site-breadcrumb" style="background: url(assets/img/contact/02.png)">
            <div class="container">
                <h2 class="breadcrumb-title">Comunícate con <br> <span>Nosotros</span> </h2>
                    <br>
                    <br>
                    <div>
                        <a href="ofertas" class="theme-btn">Ver Coches &nbsp;<i class="far fa-arrow-right"></i></a>
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
                                    <h5>Niestras oficinas</h5>
                                    <p>Madrid</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="contact-info">
                                <div class="contact-info-icon">
                                    <i class="fal fa-phone"></i>
                                </div>
                                <div class="contact-info-content">
                                    <h5>Contáctanos</h5>
                                    <p>+34 </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="contact-info">
                                <div class="contact-info-icon">
                                    <i class="fal fa-envelope"></i>
                                </div>
                                <div class="contact-info-content">
                                    <h5>Email</h5>
                                    <p>@example.com</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="contact-info">
                                <div class="contact-info-icon">
                                    <i class="fal fa-clock"></i>
                                </div>
                                <div class="contact-info-content">
                                    <h5>Nuestros Horarios</h5>
                                    <p>Lun. a Dom.
                                        8:00 a 20:00 
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
                                    <h2>Contáctanos</h2>
                                    <p>Si tienes alguna duda comunícate con nosotros. </p>
                                </div>
                                <form method="post" action="/moveen/assets/php/contact.php" id="contact-form">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" name="name"
                                                    placeholder="Your Name" required>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <input type="email" class="form-control" name="email"
                                                    placeholder="Your Email" required>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" name="subject"
                                            placeholder="Your Subject" required>
                                    </div>
                                    <div class="form-group">
                                        <textarea name="message" cols="30" rows="5" class="form-control"
                                            placeholder="Write Your Message"></textarea>
                                    </div>
                                    <button type="submit" class="theme-btn">Envíar</button>
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