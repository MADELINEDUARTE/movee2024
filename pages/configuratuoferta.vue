<template>
<LayoutWeb>
    <main class="main">
        <div class="hero-section">
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <div class="car-item">
                            <div class="car-img">
                                <img src="/assets/img/car/01.png" alt="">
                            </div>
                            <div class="car-content">
                                <div class="car-top">
                                    <div>
                                    <h4 class="textflex">Eléctrico</h4>
                                    </div>
                                </div>
                                <div class="car-top">
                        <h4><a href="#">{{$t('modelo_coche')}} <br> {{$t('modelo_coche2')}}</a></h4>
                        <span><i class="fas fa-star"></i> {{$t('valoracion')}}</span>
                    </div>
                    <div class="car-footer">
                        <span class="car-price"><sub>{{$t('desde')}} </sub> <strong>{{$t('precio')}} </strong>  <sub>{{$t('al_mes')}}</sub></span>
                    </div>
                            </div>
                         </div>
                         <div class="car-footer">
                            <p>Una estética orientada al rendimiento y un carácter atrevido y deportivo. Así es el BMW Serie 2 Gran Coupé, un vehículo
                            que destaca entre la multitud con tecnologías innovadoras perfectamente ajustadas para entregar una experiencia de
                            conducción como pocas.
                            <br>
                            El BMW Serie 2 Gran Coupé cuenta con tracción a las cuatro ruedas, suspensión adaptativa, dirección M Sport con
                            Servotronic y diferentes sistemas de ayuda a la conducción. Toda una experiencia BMW.
                            <br>
                            En el catálogo de MOVEE te encontrarás con todo tipo de ofertas de renting para particulares, autónomos o empresa, sin
                            entrada y con gastos y mantenimiento incluidos en talleres autorizados. MOVEE es la nueva solución en movilidad que
                            emplea la suscripción para facilitar el acceso a un vehículo de forma 100% online, rápida y flexible.</p>
                        </div>
                            <br>
                            <br>
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                    aria-expanded="false" aria-controls="collapseTwo">
                                    <span> Equipamiento</span>
                                    </button>
                                    </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <ul>
                                        <li><strong>Audio y comunicación</strong></li>
                                        <li><i class="fa-regular fa-check"></i> Navegador</li>
                                        <li><i class="fa-regular fa-check"></i> Tamaño de la pantalla 10,30 pulgadas</li>
                                        <li><i class="fa-regular fa-check"></i> Integración móvil</li>
                                        <li><i class="fa-regular fa-check"></i> Apps integradas</li>
                                        <li><i class="fa-regular fa-check"></i> Control de Apps</li>
                                        <li><i class="fa-regular fa-check"></i> Asistencia telemática</li>
                                        <li><i class="fa-regular fa-check"></i> Equipo de audio con pantalla táctil</li>
                                        <li><i class="fa-regular fa-check"></i> Radio AM/FM</li>
                                        <li><i class="fa-regular fa-check"></i> Número de altavoces 6</li>
                                        <li><i class="fa-regular fa-check"></i> Conexión USB delantera</li>
                                        <li><i class="fa-regular fa-check"></i> Bluetooth con música en streaming</li>
                                    </ul>
                                    <ul>
                                        <br>
                                        <li><strong>Audio y comunicación</strong></li>
                                        <br>
                                        <li><i class="fa-regular fa-check"></i> Acabado del tablero aluminio símil</li>
                                        <li><i class="fa-regular fa-check"></i> Acabado del pomo palanca de cambios aluminio y cuero</li>
                                        <li><i class="fa-regular fa-check"></i> Acabado de las puertas aluminio símil</li>
                                        <li><i class="fa-regular fa-check"></i> Acabado de la consola central aluminio símil</li>
                                        <li><i class="fa-regular fa-check"></i> Tapicería de cuero</li>
                                        <li><i class="fa-regular fa-check"></i> Configuración de los asientos 2+3</li>
                                    </ul>
                                    <ul>
                                        <br>
                                        <li><strong>Equipamiento</strong></li>
                                        <br>
                                        <li><i class="fa-regular fa-check"></i> Aire acondicionado</li>
                                        <li><i class="fa-regular fa-check"></i> Aire acondicionado automático</li>
                                        <li><i class="fa-regular fa-check"></i> Número de zonas de climatización 2</li>
                                        <li><i class="fa-regular fa-check"></i> Elevalunas eléctricos delanteros / traseros</li>
                                        <li><i class="fa-regular fa-check"></i> Retrovisores exteriores ajustables eléctricamente / desempañables</li>
                                    </ul>
                                    <ul>
                                        <br>
                                        <li><strong>Seguridad</strong></li>
                                        <br>
                                        <li><i class="fa-regular fa-check"></i> ABS</li>
                                        <li><i class="fa-regular fa-check"></i> Control electrónico de tracción</li>
                                        <li><i class="fa-regular fa-check"></i> Sistema de frenada de emergencia</li>
                                        <li><i class="fa-regular fa-check"></i> Distribución electrónica de frenada</li>
                                        <li><i class="fa-regular fa-check"></i> Control de frenada en curva</li>
                                        <li><i class="fa-regular fa-check"></i> Control de estabilidad</li>
                                        <li><i class="fa-regular fa-check"></i> Asistente de arranque en pendiente</li>
                                        <li><i class="fa-regular fa-check"></i> Frenos de disco ventilados</li>
                                        <li><i class="fa-regular fa-check"></i> Luces de día LED</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
</div>
<br>
<br>

<div class= "col-6 scrollable-column" id="scrollable-column">
    <div class="find-car mt-0">
        <div class="container">
            <div class="find-car-form">
                <div class="find-car-title-wrapper">
                    <h4 class="find-car-title">Configura tu Oferta</h4>
                </div>
            <div>
                <h5>Nosotros hacemos el resto</h5>
            </div>
                <form action="#">
                    <div class="row g-3">
                        <div class="col-lg-12">
                            <div class="form-group">
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="form-group">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="form-group">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
            

    </main>
</LayoutWeb>
</template>