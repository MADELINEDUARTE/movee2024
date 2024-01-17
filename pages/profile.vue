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
                                <li><a href="profile.html" class="active"><i class="far fa-user"></i> Mi perfil</a>
                                </li>
                                <li><a href="billing.html"><i class="far fa-draw-circle"></i> Facturación</a></li>
                                <li><a href="setting.html"><i class="far fa-cog"></i> Ajustes</a></li>
                                <li><a href="#"><i class="far fa-sign-out"></i> Cerrar sesión</a></li>
                            </ul>
                </div>
            </div>
                    <div class="col-lg-9">
                        <div class="user-profile-wrapper">
                            <div class="user-profile-card">
                                <h4 class="user-profile-card-title">Información de perfil</h4>
                                    <div class="col-lg-6">
                                        <div class="profile-info-list">
                                        <ul>
                                            <li>Nombre completo <span>Antoni Jonson</span></li>
                                            <li>Email <span>jonson@example.com</span></li>
                                            <li>Teléfono <span>+2 134 562 458</span></li>
                                            <li>Dirección <span>New York, USA</span></li>
                                            <li>Fecha de ingreso <span>17 March, 2023</span></li>
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