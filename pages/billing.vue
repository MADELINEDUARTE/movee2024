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
                        <h4 class="user-profile-card-title">Facturación</h4>
                        <div class="col-lg-12">
                            <div class="user-profile-form">
                                <form action="#">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Nombre</label>
                                                <input type="text" class="form-control"
                                                 placeholder="First Name">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Apellido</label>
                                                <input type="text" class="form-control"
                                                placeholder="Last Name">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Email</label>
                                                <input type="text" class="form-control"
                                                placeholder="Email">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Teléfono</label>
                                                <input type="text" class="form-control"
                                                placeholder="Phone">
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label>Dirección</label>
                                                <input type="text" class="form-control"
                                                placeholder="Address">
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label>Dirección 2</label>
                                                <input type="text" class="form-control"
                                                placeholder="Address 2">
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Ciudad</label>
                                                <input type="text" class="form-control"
                                                placeholder="City">
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Estado</label>
                                                <input type="text" class="form-control"
                                                placeholder="State">
                                            </div>
                                        </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                <label>Zip</label>
                                                <input type="text" class="form-control"
                                                 placeholder="Zip">
                                            </div>
                                        </div>
                                        <button type="button" class="theme-btn mt-4">Guardar<i class="far fa-save"></i></button>
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