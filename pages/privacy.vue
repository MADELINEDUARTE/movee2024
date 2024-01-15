<template>
    <!-- preloader -->
    <div class="preloader">
        <div class="loader-ripple">
            <div></div>
            <div></div>
        </div>
    </div>
    <!-- preloader -->
    <div class="preloader">
        <div class="loader-ripple">
            <div></div>
            <div></div>
        </div>
    </div>
    <!-- preloader end --> 

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
                                    <a href="mailto:info@example.com">info@123renting.es</a>
                                </div>
                            </li>
                            <li>
                                <div class="header-top-contact-icon">
                                    <img src="/assets/img/icon/clock.svg" alt="">
                                </div>
                                <div class="header-top-contact-info">
                                    <a href="#">Lunes a Domingo: 9:00 a 19:00</a>
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
                        <a href="https://www.facebook.com/profile.php?id=100063699933991&ref=bookmarks"><i class="fab fa-facebook-f"></i></a>
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
                <a class="navbar-brand" href="index.html">
                    <img src="/assets/img/logo/logoh.png" alt="logo">
                </a>
                <div class="mobile-menu-right">
                    <div class="header-account header-mobile-account">
                        <div class="dropdown">
                            <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
                             <i class="far fa-user-circle"></i>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end">
                              <li><a class="dropdown-item" href="profile.html"><i class="far fa-user"></i> My Profile</a></li>
                              <li><a class="dropdown-item" href="billing.html"><i class="far fa-clipboard-list"></i> Billing Info</a></li>
                              <li><a class="dropdown-item" href="setting.html"><i class="far fa-cog"></i> Settings</a></li>
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
                        <li class="nav-item dropdown">
                            <a class="nav-link active" href="#" data-bs-toggle="dropdown">Inicio</a>
                        <!--<ul class="dropdown-menu fade-down">
                               <li><a class="dropdown-item" href="index.html">Home Page 01</a></li>
                                <li><a class="dropdown-item" href="index-2.html">Home Page 02</a></li>
                                <li><a class="dropdown-item" href="index-3.html">Home Page 03</a></li>
                            </ul>-->
                        </li>
                        <li class="nav-item"><a class="nav-link" href="#visitanos">Oficinas</a></li>
                            <!--<ul class="dropdown-menu fade-down">
                                <li><a class="dropdown-item" href="car.html">Car One</a></li>
                                <li><a class="dropdown-item" href="car-2.html">Car Two</a></li>
                                <li><a class="dropdown-item" href="car-single.html">Car Single</a></li>
                                <li><a class="dropdown-item" href="car-booking.html">Car Booking</a></li>
                                <li><a class="dropdown-item" href="car-checkout.html">Car Checkout</a></li>
                                <li><a class="dropdown-item" href="car-booking-confirm.html">Car Booking Confirm</a></li>
                            </ul>-->
                        
                        <li class="nav-item"><a class="nav-link" href="#flota">Flota</a></li>
                            <!--<ul class="dropdown-menu fade-down">
                                <li><a class="dropdown-item" href="about.html">About Us</a></li>
                                <li><a class="dropdown-item" href="team.html">Our Team</a></li>
                                <li><a class="dropdown-item" href="pricing.html">Pricing Plan</a></li>
                                <li><a class="dropdown-item" href="gallery.html">Gallery</a></li>
                                <li><a class="dropdown-item" href="faq.html">Faq</a></li>
                                <li><a class="dropdown-item" href="testimonial.html">Testimonials</a></li>
                                <li class="dropdown-submenu">
                                    <a class="dropdown-item dropdown-toggle" href="#">Account</a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="login.html">Login</a></li>
                                        <li><a class="dropdown-item" href="register.html">Register</a></li>
                                        <li><a class="dropdown-item" href="forgot-password.html">Forgot Password</a>
                                        </li>
                                    </ul>
                                </li>
                                <li><a class="dropdown-item" href="404.html">404 Error</a></li>
                                <li><a class="dropdown-item" href="coming-soon.html">Coming Soon</a></li>
                                <li><a class="dropdown-item" href="terms.html">Terms Of Service</a></li>
                                <li><a class="dropdown-item" href="privacy.html">Privacy Policy</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Services</a>
                            <ul class="dropdown-menu fade-down">
                                <li><a class="dropdown-item" href="service.html">Services</a></li>
                                <li><a class="dropdown-item" href="service-single.html">Service Single</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Blog</a>
                            <ul class="dropdown-menu fade-down">
                                <li><a class="dropdown-item" href="blog.html">Blog</a></li>
                                <li><a class="dropdown-item" href="blog-single.html">Blog Single</a></li>
                            </ul>
                        </li>-->
                        <!--<li class="nav-item"><a class="nav-link" href="contact.html">Contacto</a></li>-->
                    </ul>
                    <div class="header-nav-right">
                        <div class="header-phone">
                            <div class="header-phone-icon">
                                <img src="/assets/img/icon/phone.svg" alt="">
                            </div>
                            <div class="header-phone-content">
                                <span>Necesitas una Furgo?</span>
                                <h5 class="header-phone-number"><a href="tel:+2123654789">812330 | 650310707</a></h5>
                            </div>
                        </div>
                        <div class="header-btn mt-2">
                            <a href="#iniciatureserva" class="theme-btn"><strong>Reserva</strong></a>
                        </div>
                        <div class="header-account">
                            <div class="dropdown">
                                <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                 <i class="far fa-user-circle"></i>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                  <li><a class="dropdown-item" href="profile.html"><i class="far fa-user"></i> Mi perfil</a></li>
                                  <li><a class="dropdown-item" href="billing.html"><i class="far fa-clipboard-list"></i>Facturación</a></li>
                                  <li><a class="dropdown-item" href="setting.html"><i class="far fa-cog"></i> Ajustes</a></li>
                                  <li><a class="dropdown-item" href="#"><i class="far fa-sign-out"></i>Cerrar sesión</a></li>
                                </ul>
                              </div>
                        </div>
                        <div class="header-account">
                            <div class="dropdown">
                                <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fa-regular fa-language"></i>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><a class="dropdown-item" href="#"><i class="fas fa-caret-right"></i> Español</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="fas fa-caret-right"></i>Inglés</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="fas fa-caret-right"></i> Catalán</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="fas fa-caret-right"></i>Alemán</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</header>
<!-- header area end -->


<main class="main">
    <div class="pt-120 pb-120">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="terms-content">
                                        <h3>CONDICIONES DE CONTRATACIÓN</h3>
                                        <ul>
                                            <li class="text"><span class="punto"><strong>1. </strong></span>Nuestros alquileres se computan en periodos de 24 horas contado desde la hora de entrega prevista en la reserva. Vehículos de carga disponibles para alquileres de media jornada.</li>
                                            <li class="text"><span class="punto"><strong>2. </strong></span>Para periodos de alquiler superiores a 28 días, consultar condiciones especiales a <a href="mailto:info@123renting.es">info@123renting.es</a></li>
                                            <li class="text"><span class="punto"><strong>3. </strong></span>En caso de retraso en la devolución del vehículo o abandono del mismo, se cobrará el importe correspondiente al periodo extendido según la tarifa específica publicada en <a href="https://www.123renting.es/terminos_condiciones">www.123renting.es/terminos_condiciones</a>, más un recargo de 40€ por jornada hasta la recuperación del vehículo por parte de la empresa, así como el importe correspondiente a los posibles daños causados y los gastos ocasionados por la recuperación.</li>
                                            <li class="text"><span class="punto"><strong>4. </strong></span>La devolución anticipada del vehículo no generará reembolso alguno. Por motivos operacionales de revisión del Vehículo el Arrendador se reserva el derecho a sustituir el vehículo en cualquier momento por otro de similares características informando previamente al Arrendatario.</li>
                                            <li class="text"><span class="punto"><strong>5. </strong></span>123renting se reserva el derecho a cancelar la reserva del vehículo en caso de incidentes con esta u otra compañía de alquiler o ante la existencia de dudas fundadas sobre la capacidad financiera del cliente por antecedentes de impagos o incidencias relativas a los medios de pago aportados.</li>
                                            <li class="text"><span class="punto"><strong>6. </strong></span>No está permitido alquilar, ni ser conductor adicional, con edad inferior a los 21 años ni con una antigüedad de menos de 2 años en el permiso de conducir. *Para el alquiler de motocicletas solo se exige 18 años y permiso de conducir en vigor.</li>
                                            <li class="text"><span class="punto"><strong>7. </strong></span>No está permitido abandonar el territorio nacional en ningún caso ni tampoco el transporte marítimo del vehículo, sin autorización expresa por parte de la compañía.</li>
                                            <li class="text"><span class="punto"><strong>8. </strong></span>Es obligatoria la presentación de una tarjeta de crédito nominativa, cuyo titular ha de figurar como conductor principal o adicional en el contrato. La caducidad de la tarjeta deberá ser superior a la duración del contrato.</li>
                                            <li class="text"><span class="punto"><strong>9. </strong></span>El precio del pago del alquiler y de los artículos extras contratados se efectuará mediante tarjeta de crédito. El uso de tarjeta de débito precisa de la contratación de la cobertura Premiun obligatoriamente. No se aceptan pagos con tarjetas Amex, Diners, Maestro ni tarjetas no nominativas.</li>
                                            <li class="text"><span class="punto"><strong>10. </strong></span>Se ha de presentar un permiso de conducir y documento de identidad vigentes para la recogida del vehículo. El arrendatario que posea un permiso de conducción en caracteres no latinos, deberá presentar un carnet de conducir internacional vigente. Todos los precios son expresados en euros e incluyen IVA.</li>
                                            <li class="text"><span class="punto"><strong>11. </strong></span>Los modelos indicados en las reservas son siempre orientativos. Se entregará un modelo de características similares o superiores. Los artículos extras vinculados a la reserva se corresponderán con el grupo entregado en caso de que este difiera del grupo inicialmente reservado.</li>
                                        </ul>

                                        <li class="text"><span class="punto"><strong>12. </strong></span>Las categorías de vehículos ofertadas por 123renting se organizan según la siguiente agrupación:</li>
                                        <li class="text">Grupo A4 (Nissan NV250, Renault Kangoo o similar)</li>
                                        <li class="text">Grupo B4 (Nissan NV300, Renault Trafic o similar)</li>
                                        <li class="text">Grupo C4 (Mercedes Benz Sprinter o similar de 8 a 10m3)</li>
                                        <li class="text">Grupo D4 (Ford Transit L2H2 o similar de 10 a 13m3)</li>
                                        <li class="text">Grupo I4 (Carrozados hasta 20m3) Grupo F4 (Carrozados con plataforma hasta 20m3)</li>

                                        <li class="text"><span class="punto"><strong>13. </strong></span>Es de obligado cumplimiento que el arrendatario lleve consigo siempre su ejemplar del contrato de alquiler vigente durante la duración del mismo. El documento Check In debe llevarse en todo momento visible en el vehículo. Si incumple dicha obligación, el arrendatario deberá asumir la sanción y abonar los gastos de gestión.</li>
                                        <li class="text"><span class="punto"><strong>14. </strong></span>Las traducciones de estas condiciones generales son meramente informativas y no tienen carácter jurídico vinculante en todo el detalle de su redacción, teniendo validez únicamente su versión en español.</li>
                    </div>

                    <div class="terms-content">
                                    <h3>CONDICIONES DE CONTRATACIÓN</h3>
                                    <ul>
                                        <li class="text"><span class="punto"><strong>1. </strong></span>Nuestros alquileres se computan en periodos de 24 horas contado desde la hora de entrega prevista en la reserva.
                                            Vehículos de carga disponibles para alquileres de media jornada.</li>
                                        <li class="text"><span class="punto"><strong>2. </strong></span>Para periodos de alquiler superiores a 28 días, consultar condiciones especiales a info@123renting.es</li>
                                        <!-- Otros elementos de la lista -->
                                    </ul>

                                    <li class="text"><span class="punto"><strong>12. </strong></span>Las categorías de vehículos ofertadas por 123renting se organizan según la siguiente agrupación:</li>
                                    <li class="text">Grupo A4 (Nissan NV250, Renault Kangoo o similar)</li>
                                    <!-- Otros elementos de la lista -->

                                    <li class="text"><span class="punto"><strong>13. </strong></span>Es de obligado cumplimiento que el arrendatario lleve consigo siempre su ejemplar del contrato de alquiler vigente
                                        durante la duración del mismo. El documento Check In debe llevarse en todo momento visible en el vehículo. Si incumple
                                        dicha obligación el arrendatario deberá asumir la sanción y abonar los gastos de gestión.</li>
                                    <li class="text"><span class="punto"><strong>14. </strong></span>Las traducciones de estas condiciones generales son meramente informativas y no tienen carácter jurídico vinculante en
                                        todo el detalle de su redacción, teniendo validez únicamente su versión en español.</li>
                    </div>

                    <div class="terms-content">
                                    <h3>SUPLEMENTOS Y ARTÍCULOS EXTRAS</h3>
                                    <ul>
                                        <li class="text"><span class="punto"><strong>1. </strong></span>Silla infantil Grupo 0+ (0-13 kg; 0-15 meses), sujeto a disponibilidad. 7,95€/día.</li>
                                        <li class="text"><span class="punto"><strong>2. </strong></span>Silla infantil Grupo 1 (9-18 kg; 9 meses-4 años), sujeto a disponibilidad. 7,95€/día.</li>
                                        <li class="text"><span class="punto"><strong>3. </strong></span>Silla infantil Grupo 2 (15-25 kg; 4-6 años), sujeto a disponibilidad. 7,95€/día.</li>
                                        <li class="text"><span class="punto"><strong>4. </strong></span>Silla infantil Grupo 3 (22-36 kg; 6-12 años), sujeto a disponibilidad. 5,95€/día.</li>
                                        <li class="text"><span class="punto"><strong>5. </strong></span>Conductor adicional, contratables hasta 3 conductores adicionales por contrato además del principal. 6,95€/día.</li>
                                        <li class="text"><span class="punto"><strong>6. </strong></span>Conductor novel (25 años de edad y/o 4 años de carné). 7,95€/día.</li>
                                        <li class="text"><span class="punto"><strong>7. </strong></span>Conductor Senior (>75 años de edad) 7,95€/día.</li>
                                        <li class="text"><span class="punto"><strong>8. </strong></span>GPS, sujeto a disponibilidad: 5,95€/día.</li>
                                        <li class="text"><span class="punto"><strong>9. </strong></span>Suplemento por vehículo diésel: 2,50 €/día.</li>
                                        <li class="text"><span class="punto"><strong>10. </strong></span>Recogida y devolución en aeropuerto, solo disponible ‘on request’ y para reservas totalmente prepagadas 45€.</li>
                                        <li class="text"><span class="punto"><strong>11. </strong></span>Ticket de parking por recogida en aeropuerto: hasta 5€ (independiente del precio del servicio de entrega/devolución en aeropuerto).</li>
                                        <li class="text"><span class="punto"><strong>12. </strong></span>Traslados (entrega/devolución en hotel o dirección solicitada), consultar disponibilidad. 30€ / 45€ por trayecto según distancia.</li>
                                        <li class="text"><span class="punto"><strong>13. </strong></span>Servicio Express. 40€</li>
                                        <li class="text"><span class="punto"><strong>15. </strong></span>Servicio ‘one way’ de devolución en oficina distinta a la de recogida: consultar disponibilidad.</li>
                                        <li class="text"><span class="punto"><strong>16. </strong></span>Paquete de kilometraje ampliado. 80€</li>
                                        <li class="text"><span class="punto"><strong>17. </strong></span>Baca: 7,95€/día.</li>
                                        <li class="text"><span class="punto"><strong>18. </strong></span>Cadenas para nieve: 7,95€/día.</li>
                                        <li class="text"><span class="punto"><strong>19. </strong></span>Recargo horario: todas las recogidas y devoluciones están libres de cargo entre las 08:00h y las 20:00h durante todo el año. Fuera de este horario se aplican los recargos previstos en <a href="#"> <strong>www.123renting.es/terminos_condiciones</strong></a></li>
                                    </ul>
                    </div>

                    <div class="terms-content">
                                    <h3>POLÍTICA DE COMBUSTIBLE</h3>
                                    <ul>
                                        <li class="text"><span class="punto"><strong>1. </strong></span>Modalidad Lleno-Lleno: Los vehículos son entregados con el tanque completamente lleno sin cargo alguno y deben ser devueltos en las mismas condiciones. En caso de combustible faltante a la devolución, el importe de éste le será cargado al cliente, junto a una tasa de gestión y repostaje: 31€</li>
                                        <li class="text"><span class="punto"><strong>2. </strong></span>Modalidad Devolución Rápida: Los vehículos son entregados con el tanque completamente lleno y el importe del mismo se le cobra al cliente en el momento de formalizar el contrato de alquiler, junto a la tasa de gestión y repostaje. A la devolución del vehículo y una vez comprobado el nivel del combustible conforme al marcador en ocho octavos, se procederá al reembolso del importe correspondiente al combustible no utilizado. La tasa de gestión y repostaje no es reembolsable.</li>
                                        <li class="text"><span class="punto"><strong>3. </strong></span>Cualquier incidencia en el estado del tanque del vehículo a la entrega del mismo debe ser comunicada por parte del cliente antes de abandonar las instalaciones. No se admitirá ninguna reclamación con posterioridad.</li>
                                        <li class="text"><span class="punto"><strong>4. </strong></span>Los precios de combustible de 123renting para cada categoría se encuentran publicados y actualizados en www.123renting.es/terminos_condiciones. No incluyen el precio de la tasa de repostaje. (Precio medio litro/anual*capacidad vehículo)</li>
                                    </ul>
                                    <ul class="terms-list ms-4">
                                        <li class="text"><span class="punto"><strong>A. </strong></span>Grupo A4 90,00€</li>
                                        <li class="text"><span class="punto"><strong>B. </strong></span>Grupo B4 120,00€</li>
                                        <li class="text"><span class="punto"><strong>C. </strong></span>Grupo C4 130,00€</li>
                                        <li class="text"><span class="punto"><strong>D. </strong></span>Grupo D4 130,00€</li>
                                        <li class="text"><span class="punto"><strong>E. </strong></span>Grupo I4 150,00€</li>
                                        <li class="text"><span class="punto"><strong>F. </strong></span>Grupo F4 150,00€</li>
                                    </ul>
                    </div>

                    <div class="terms-content">
                                    <h3>HORARIOS</h3>
                                    <ul>
                                        <li class="text"><span class="punto"><strong>1. </strong></span>Todas nuestras oficinas funcionan en su horario comercial de 08.00h a 20.00h.</li>
                                        <li class="text"><span class="punto"><strong>2. </strong></span>Para cualquier petición de reserva y/o consulta sobre la entrega o devolución del vehículo debe hacerse a través del teléfono <a href="tel:+376 812330"><strong>+376 812330</strong></a> o accediendo a <a href="#"><strong>www.123renting.es</strong></a></li>
                                    </ul>
                    </div>

                    <div class="terms-content">
                                    <h3>ENTREGA Y DEVOLUCIÓN</h3>
                                    <ul>
                                        <li class="text"><span class="punto"><strong>1. </strong></span>Andorra, Avinguda Pont de la Tosca 9 Local 7, Escaldes Engordany, Andorra <a href="tel:+376 812330"><strong>+376 812330</strong></a></li>
                                    </ul>
                    </div>

                    <div class="terms-content">
                                    <h3>CANCELACIONES, NO SHOW Y PROLONGACIONES</h3>
                                    <ul>
                                        <li class="text"><span class="punto"><strong>1. </strong></span>Las cancelaciones dirigidas por email a <a href="mailto:info@123renting.es"><strong>info@123renting.es</strong></a>
                                            al menos 24 horas antes de la hora de entrega prevista en la
                                            reserva no generarán ningún cargo por parte de 123Renting.</li>
                                        <li class="text"><span class="punto"><strong>2. </strong></span>Las cancelaciones con un preaviso inferior a 24 horas supondrán el pago del 50% del valor total de la reserva por parte
                                            del cliente, salvo causa justificada documentalmente.</li>
                                        <li class="text"><span class="punto"><strong>3. </strong></span>Transcurridas 3 horas desde la hora de entrega prevista en la reserva sin que el cliente haya retirado su vehículo,
                                            123renting declarará la reserva como no-show y liberará el vehículo reservado. Las cancelaciones recibidas con un plazo
                                            inferior a 2 horas, se considerarán también como no-show.</li>
                                        <li class="text"><span class="punto"><strong>4. </strong></span>Tanto los no-show como las cancelaciones con menos de 2 horas de antelación deberán abonar el 100% del valor de la
                                            reserva para cubrir los costes operativos y el lucro cesante.</li>
                                        <li class="text"><span class="punto"><strong>5. </strong></span>Cualquier prolongación de una reserva vigente está sujeta a confirmación por escrito de disponibilidad y precio por
                                            parte de 123renting. Todas las prolongaciones se realizarán con la Tarifa General Vigente de 123renting en el momento en
                                            que se solicite. Además, requiere de la firma y pago del nuevo contrato en las instalaciones de la compañía.</li>
                                        <li class="text"><span class="punto"><strong>6. </strong></span>Las multas y gastos judiciales motivados por infracciones de tráfico o infracción de las leyes, reglamentos u
                                            ordenanzas, por parte del Arrendatario. El arrendatario satisfará y será responsable como si fuera propietario del
                                            Vehículo frente a las multas o sanciones que los órganos administrativos impongan por uso y estado del Vehículo en los
                                            casos en que le sea imputable. El Arrendatario deberá restituir al Arrendador los importes, recargos o intereses de
                                            cualquier tipo que esté obligado a abonar por razón de las multas o sanciones impuestas como propietario del Vehículo,
                                            además de un cargo administrativo por gestión de cualquier multa o sanción que reciba el propietario.</li>
                                    </ul>
                    </div>

                    <div class="terms-content">
                                    <h3>ACTUALIZACIÓN DE LA POLÍTICA DE PRIVACIDAD</h3>
                                    <ul>
                                        <li class="text">
                                            <span class="punto"><strong>1. </strong></span>Es posible que esta Política de Privacidad deba ser actualizada. Por este motivo, es necesario que el Usuario revise
                                            esta política periódicamente y, si es posible, cada vez que acceda a la Página Web con el objetivo de estar
                                            adecuadamente informado sobre el tipo de información recopilada y su tratamiento.
                                        </li>
                                        <li class="text">
                                            <span class="punto"><strong>2. </strong></span>No obstante, lo anterior, el Usuario será informado de cualquier modificación de la presente política de privacidad que
                                            afecte al tratamiento de sus datos personales.
                                        </li>
                                    </ul>
                    </div>

                    <div class="terms-content">
                        <h3>USO DE COOKIES</h3>
                        <ul>
                            <li class="text"><span class="punto"><strong>1. </strong></span>La página web de <a href="https://www.123renting.es"><strong>www.123renting.es</strong></a> utiliza cookies para diferenciar entre los distintos usuarios de la Página Web. Esto hace que el Usuario pueda tener una mejor experiencia cuando visita nuestra Página Web, ayudando así a mejorarla.</li>
                            <li class="text"><span class="punto"><strong>2. </strong></span>El Usuario podrá obtener más información sobre el uso de cookies en el enlace a nuestra <a href="#">Política de cookies</a>.</li>
                        </ul>
                    </div>

                    <div class="terms-content">
                            <h3>ATENCIÓN AL USUARIO</h3>
                            <ul>
                            <li class="text"><span class="punto"><strong>1. </strong></span>Para cualquier solicitud de información o modificación de los datos de su reserva futura o en curso, puede solicitarlo a <a href="mailto:info@123renting.ad"><strong>info@123renting.es</strong></a></li>
                            <li class="text"><span class="punto"><strong>2. </strong></span>Si desea realizar alguna sugerencia sobre la mejora de nuestros servicios o reclamación, puede dirigirla a <a href="mailto:info@123renting.ad"><strong>info@123renting.es</strong></a></li>
                            </ul>
                    </div>

                    <div class="terms-content">
                            <h3>POLÍTICA DE PRIVACIDAD</h3>
                            <ul>
                            <li class="text"><span class="punto"><strong>1. </strong></span><strong>Responsable: </strong>123RENTING, S.L.U. L715426C</li>
                            <li class="text"><span class="punto"><strong>2. </strong></span><strong>Datos de Registro: </strong>Registro Mercantil de Andorra</li>
                            <li class="text"><span class="punto"><strong>3. </strong></span><strong>Finalidad: </strong>Poder gestionar el servicio solicitado, contestar a su solicitud y/o tramitar su petición.</li>
                            <li class="text"><span class="punto"><strong>4. </strong></span><strong>Legitimación: </strong>Correcta prestación del servicio solicitado. Sus datos se mantendrán durante los plazos legales previstos y necesarios para el fin.</li>
                            <li class="text"><span class="punto"><strong>5. </strong></span><strong>Destinatarios: </strong>Se le informa que sus datos también pueden ser comunicados, en su caso, a cualquier poder Público que acredite su legitimación, así como a cualquier otro necesario que deba tener acceso para la consecución de la finalidad y sus consecuencias.</li>
                            <li class="text"><span class="punto"><strong>6. </strong></span><strong>Derechos: </strong>El titular de los datos podrá ejercer los derechos de acceso, rectificación, cancelación, oposición, supresión, limitación y portabilidad de sus datos a <a href="mailto:info@123renting.ad"><strong>info@123renting.es</strong></a></li>
                            </ul>
                    </div>

                    <div class="terms-content">
                            <h3>PROTECCIÓN DE DATOS DE CARÁCTER PERSONAL</h3>
                            <ul>
                            <li>
                            <p>En cumplimiento al Reglamento Europeo UE 2016/679, y de acuerdo a su normativa estatal complementaria, relativa a la Protección de Datos de Carácter Personal, 123RENTING, S.L.U., comunica a los usuarios del Sitio Web <a href="#">www.123renting.es</a> que los datos facilitados a través de nuestra página web mediante los correspondientes formularios y los e-mails recibidos y que tienen la consideración de datos de carácter personal, serán incorporados a ficheros cuya responsabilidad corresponde a 123RENTING, S.L.U., con la finalidad de poder gestionar el servicio solicitado, contestar a su solicitud y/o tramitar su petición.</p>
                            </li>
                            <li>
                            <p>Dichos ficheros se encuentran inscritos en la Agencia Española de Protección de Datos conforme a la legislación vigente y normativa de desarrollo. Los usuarios garantizan y responden, en cualquier caso, de la veracidad, exactitud, vigencia, autenticidad, pertinencia y no excesividad de los Datos Personales proporcionados, y se comprometen a mantenerlos debidamente actualizados.</p>
                            </li>
                            <li>
                            <p>Cuando se requiera que los usuarios completen un formulario y hagan clic en el botón de enviar para hacer una solicitud, el cumplimiento de ese procedimiento implicará necesariamente que estén informados y hayan dado su consentimiento expreso al contenido de la cláusula adjunta a este formulario o hayan aceptado la política de privacidad.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div> 
   </div>
<!-- privacy policy end --> 
</main>

<!-- footer area -->
<footer class="footer-area">
    <div class="footer-widget">
        <div class="container">
            <div class="row footer-widget-wrapper pt-100 pb-70">
                <div class="col-md-6 col-lg-3">
                    <div class="footer-widget-box about-us">
                        <a href="#" class="footer-logo1">
                            <img class="log1blanco" src="/assets/img/logo/logo-light1.png" alt="">
                        </a>
                        <a href="#" class="footer-logo2">
                            <img class="log2oscuro" src="/assets/img/logo/logoh.png" alt="">
                        </a>

                       <!-- <p class="mb-3">
                            Con diferentes tarifas que pueden ayudarte en cada desafío, adaptándose a tus necesidades, reduciendo los costes y
                            maximizando los resultados sin afectar la calidad.
                        </p>
                        <ul class="footer-contact">
                            <li><a href="tel:+21236547898"><i class="far fa-phone"></i>812330 | 650310707</a></li>
                            <li><i class="far fa-map-marker-alt"></i>Av Pais Valenciano 33 Bj D, Betera, 46117</li>
                            <li><a href="mailto:info@example.com"><i
                                        class="far fa-envelope"></i>info@123renting.es</a></li>
                        </ul>-->
                    </div>
                    
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="footer-widget-box list">
                        <h4 class="footer-widget-title">Conócenos</h4>
                        <ul class="footer-list">
                            <li><a href="#nosotros123"><i class="fas fa-caret-right"></i>Sobre Nosotros</a></li>
                           <!-- <li><a href="#"><i class="fas fa-caret-right"></i> Update News</a>-->
                            <li><nuxt-link to="privacy"><i class="fas fa-caret-right"></i> Política de Privacidad</nuxt-link></li>
                            <li><nuxt-link to="politicadecookies">Política de Cookies</nuxt-link></li>
                            <!--<li><a href="#"><i class="fas fa-caret-right"></i> Our Team</a>-->
                            
                        </ul>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="footer-widget-box list">
                        <h4 class="footer-widget-title">Días Laborables</h4>
                        <ul class="footer-list">
                            <li><a href="#"><i class="fas fa-caret-right"></i> Lunes a Domingo</a></li>
                            <li><a href="#"><i class="fas fa-caret-right"></i> De 9:00 a 19:00</a></li>
                            <!--<li><a href="#"><i class="fas fa-caret-right"></i> Booking Tips</a></li>
                            <li><a href="#"><i class="fas fa-caret-right"></i> Live Chat</a></li>
                            <li><a href="#"><i class="fas fa-caret-right"></i> Contact Us</a></li>-->
                        </ul>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="footer-widget-box list">
                        <h4 class="footer-widget-title">Métodos de Pago</h4>
                        <div class="footer-newsletter">
                            <p></p>
                        <ul class="pago">
                            <!--<img src="/assets/img/footer/01.png" alt="">
                            <a href="">
                            <img src="/assets/img/footer/02.png" alt="">
                            </a>-->
                            <a href=""><img src="/assets/img/footer/03.png" alt="">
                            </a>
                            <a href=""><img src="/assets/img/footer/04.png" alt=""></a>
                           
                        </ul>
                            <!--<div class="subscribe-form">
                                <form action="#">
                                    <input type="email" class="form-control" placeholder="Correo electrónico">
                                    <button class="theme-btn" type="submit"><strong>Suscríbete ahora</strong>
                                        <i class="far fa-paper-plane"></i>
                                    </button>
                                </form>
                            </div>-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="copyright">
        <div class="container">
            <div class="row">
                <div class="col-md-6 align-self-center">
                    <p class="copyright-text">
                        &copy; Copyright <span id="date"></span> <a href="#"> <strong>123 RENTING</strong></a> Todos los derechos reservados 2023.
                    </p>
                </div>
                <div class="col-md-6 align-self-center">
                    <ul class="footer-social">
                        <div class="header-top-social">
                            <a href="https://www.facebook.com/profile.php?id=100063699933991&ref=bookmarks"><i
                                    class="fab fa-facebook-f"></i></a>
                            <a href="https://www.instagram.com/123renting.es/?hl=es"><i class="fab fa-instagram"></i></a>
                            <a href="https://twitter.com/1Renting"><i class="fab fa-twitter"></i></a>
                            <a href="https://www.youtube.com/channel/UCDktymZ1Gi_bvVykstBc57Q"><i class="fa-brands fa-youtube"></i></a>
                            <a
                                href="https://www.google.com/maps/place/123Renting/@39.5904605,-0.464268,17z/data=!3m1!4b1!4m6!3m5!1s0xd605da73e2c14c5:0x46e6275152a4f1f5!8m2!3d39.5904605!4d-0.464268!16s%2Fg%2F11h_2c1zdp?entry=ttu">
                                <i class="fa-brands fa-google"></i></a>
                        </div>
                        </ul>
                </div>
            </div>
        </div>
    </div>
</footer>
<!-- footer area end -->

<!-- scroll-top -->
    <a href="#" id="scroll-top"><i class="far fa-arrow-up"></i></a>
    <!-- scroll-top end -->
</template>