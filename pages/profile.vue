<template>
    <!-- preloader -->
<div class="preloader">
    <div class="loader-ripple">
        <div></div>
        <div></div>
    </div>
</div>
<LayoutWeb>
<main class="main">
<div class="user-profile py-120">
    <div class="container">
        <div class="row">
            <div class="col-lg-3">
                <div class="user-profile-sidebar">
                    <div class="user-profile-sidebar-top">
                        <div class="user-profile-img">
                            <img src="/assets/img/user/01.jpg" alt="">
                            <button type="button" class="profile-img-btn"><i class="far fa-camera"></i></button>
                            <input type="file" class="profile-img-file">
                        </div>
                            <h4>Antoni Jonson</h4>
                            <p>jonson@gmail.com</p>
                    </div>
                            <ul class="user-profile-sidebar-list">
                                <li><nuxt-link to="profile" class="active"><i class="far fa-user"></i>{{$t('perfil')}}</nuxt-link>
                                </li>
                                <li><nuxt-link to="billing"><i class="far fa-draw-circle"></i> {{$t('facturacion')}}</nuxt-link></li>
                                <li><nuxt-link to="setting"><i class="far fa-cog"></i>{{$t('ajustes')}}</nuxt-link></li>
                                <li><a href="#"><i class="far fa-sign-out"></i> {{$t('cerrar_sesion')}}</a></li>
                            </ul>
                </div>
            </div>
                    <div class="col-lg-9">
                        <div class="user-profile-wrapper">
                            <div class="user-profile-card">
                                <h4 class="user-profile-card-title">{{$t('info_perfil')}}</h4>
                                    <div class="col-lg-6">
                                        <div class="profile-info-list">
                                        <ul>
                                            <li>{{$t('nombre_completo')}} <span>{{$t('nombre_apellido')}}</span></li>
                                            <li>{{$t('c_correo')}} <span>{{$t('correo_usuario')}}</span></li>
                                            <li>{{$t('telefono_usuario')}} <span>{{$t('telefono_usuario_nro')}}</span></li>
                                            <li>{{$t('direccion_usuario1')}} <span>{{$t('direccion_usuario3')}}</span></li>
                                            <li>{{$t('fecha_de_ingreso')}} <span>{{$t('fecha_de_ingresonro')}}</span></li>
                                        </ul>
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