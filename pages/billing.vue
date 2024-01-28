<template>
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
                            <h4>{{$t('nombre_perfil')}}</h4>
                            <p>{{$t('correo_usuario')}}</p>
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
                        <h4 class="user-profile-card-title">{{$t('facturacion')}}</h4>
                        <div class="col-lg-12">
                            <div class="user-profile-form">
                                <form action="#">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Nombre</label>
                                                <input type="text" class="form-control"
                                                 :placeholder="$t('primer_nombre')">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Apellido</label>
                                                <input type="text" class="form-control"
                                                :placeholder="$t('apellido')">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Email</label>
                                                <input type="text" class="form-control"
                                                :placeholder="$t('c_correo')">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Teléfono</label>
                                                <input type="text" class="form-control"
                                                :placeholder="$t('telefono_usuario')">
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label>Dirección</label>
                                                <input type="text" class="form-control"
                                                :placeholder="$t('direccion_usuario1')">
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label>Dirección 2</label>
                                                <input type="text" class="form-control"
                                                :placeholder="$t('direccion_usuario2')">
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Ciudad</label>
                                                <input type="text" class="form-control"
                                                :placeholder="$t('ciudad')">
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Estado</label>
                                                <input type="text" class="form-control"
                                                :placeholder="$t('estado')">
                                            </div>
                                        </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                <label>Zip</label>
                                                <input type="text" class="form-control"
                                                 :placeholder="$t('codigo_postal')">
                                            </div>
                                        </div>
                                        <button type="button" class="theme-btn mt-4">{{$t('b_guardar')}}<i class="far fa-save"></i></button>
                                    </div>
                                </form>
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