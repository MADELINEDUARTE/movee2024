<template>
<LayoutWeb>
    <main class="main">
        <div class="col-lg-6 mx-auto">
            <div class="site-heading text-center">
                <h2 class="site-title">{{$t('r_nuevo')}} <span>{{$t('m_cerca')}}</span></h2>
            </div>
        </div>

        <div class="car-area py-120">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3">
                        <div class="car-sidebar">
                            <div class="car-widget">
                                <div class="car-search-form">
                                    <h4 class="car-widget-title">{{$t('buscar')}}</h4>
                                    <form action="#">
                                        <div class="form-group">
                                            <input type="text" class="form-control" :placeholder="$t('buscar')">
                                            <button type="search"><i class="far fa-search"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="car-widget">
                                <h4 class="car-widget-title">{{$t('filtro')}}</h4>
                                <h6 class="car-widget-title">{{$t('tipo_clientes')}}</h6>
                                <ul>
                                    <li>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="brand">
                                            <label class="form-check-label" for="brand"> {{$t('todos')}}</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="brand1">
                                            <label class="form-check-label" for="brand1"> {{$t('particulares')}}</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="form-check">
                                            <input class="form-check-input" checked="" type="checkbox" id="brand2">
                                            <label class="form-check-label" for="brand2"> {{$t('empresas')}}</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="brand3">
                                            <label class="form-check-label" for="brand3"> {{$t('autonomos')}}</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                             <div class="car-widget">
                                        <h6 class="car-widget-title">{{$t('renting_flexible')}}</h6>
                                <ul>
                                    <li>
                                        <div class="form-check">
                                            <input class="form-check-input" checked="" type="checkbox" id="brand4">
                                            <label class="form-check-label" for="brand4"> {{$t('todos')}}</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="brand5">
                                            <label class="form-check-label" for="brand5"> {{$t('c_flexible')}}</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="brand6">
                                            <label class="form-check-label" for="brand6"> {{$t('fijos')}}</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="car-widget">
                                <h6 class="car-widget-title">{{$t('tipo_v')}}</h6>
                                <ul>
                                    <li>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="tran1">
                                            <label class="form-check-label" for="tran1"> {{$t('berlina')}}</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="tran1">
                                            <label class="form-check-label" for="tran1"> {{$t('familiar')}}</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="tran1">
                                            <label class="form-check-label" for="tran1"> {{$t('monovolumen')}}</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="tran1">
                                            <label class="form-check-label" for="tran1"> {{$t('pick')}}</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="tran1">
                                            <label class="form-check-label" for="tran1"> {{$t('terreno')}}</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="tran1">
                                            <label class="form-check-label" for="tran1"> {{$t('compacto')}}</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="tran1">
                                            <label class="form-check-label" for="tran1"> {{$t('furgo')}}</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="tran1">
                                            <label class="form-check-label" for="tran1"> {{$t('moto1')}}</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="form-check">
                                            <input class="form-check-input" checked="" type="checkbox" id="tran2">
                                            <label class="form-check-label" for="tran2"> {{$t('suv')}}</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                            <div class="car-widget">
                            <h6 class="car-widget-title">{{$t('elige')}}</h6>
                            <form action="#">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <label for="exampleFormControlSelect1"></label>
                                            <select class="form-control" id="exampleFormControlSelect1">
                                            <option>{{$t('marca')}}</option>
                                            <option>{{$t('uno')}}</option>
                                            <option>{{$t('dos')}}</option>
                                            <option>{{$t('tres')}}</option>
                                            <option>{{$t('cuatro')}}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <br>
                            <br>
                            <h6 class="car-widget-title">{{$t('elige2')}}</h6>
                                <form action="#">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <label for="exampleFormControlSelect1"></label>
                                                <select class="form-control" id="exampleFormControlSelect1">
                                                <option>{{$t('modelo')}}</option>
                                                <option>{{$t('uno')}}</option>
                                                <option>{{$t('dos')}}</option>
                                                <option>{{$t('tres')}}</option>
                                                <option>{{$t('cuatro')}}</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="car-widget">
                                <h6 class="car-widget-title">{{$t('combustible')}}</h6>
                                <li>
                <div class="form-check">
                    <input class="form-check-input" checked="" type="checkbox" id="brand4">
                    <label class="form-check-label" for="brand4"> {{$t('diesel')}}</label>
                </div>
            </li>
            <li>
                <div class="form-check">
                    <input class="form-check-input" checked="" type="checkbox" id="brand4">
                    <label class="form-check-label" for="brand4"> {{$t('gasolina')}}</label>
                </div>
            </li>
            <li>
                <div class="form-check">
                    <input class="form-check-input" checked="" type="checkbox" id="brand4">
                    <label class="form-check-label" for="brand4"> {{$t('enchufable')}}</label>
                </div>
            </li>
            <li>
                <div class="form-check">
                    <input class="form-check-input" checked="" type="checkbox" id="brand4">
                    <label class="form-check-label" for="brand4"> {{$t('electrico')}}</label>
                </div>
            </li>
            <li>
                <div class="form-check">
                    <input class="form-check-input" checked="" type="checkbox" id="brand4">
                    <label class="form-check-label" for="brand4"> {{$t('hibrido_m')}}</label>
                </div>
            </li>
            <br>
            <h6 class="car-widget-title">{{$t('transmision')}}</h6>
                <li>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="fuel4">
                        <label class="form-check-label" for="fuel4"> {{$t('manual')}}</label>
                    </div>
                </li>
                <li>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="fuel4">
                        <label class="form-check-label" for="fuel4"> {{$t('auto')}}</label>
                    </div>
                </li>

                <br>
           
            
               <form action="#">
                     <div class="row">
                         <div class="col-lg-12">
                            <div class="form-group">
                                <label for="exampleFormControlSelect1"></label>
                                <h6 class="car-widget-title">{{$t('m_precio')}}</h6>
                                     <select class="form-control" id="exampleFormControlSelect1">
                                        <option>{{$t('selecciona')}}</option>
                                        <option>{{$t('uno')}}</option>
                                        <option>{{$t('dos')}}</option>
                                        <option>{{$t('tres')}}</option>
                                        <option>{{$t('cuatro')}}</option>
                                        <option>{{$t('cinco')}}</option>
                                    </select>
                                    <br>
                                    <h6 class="car-widget-title">{{$t('meses')}}</h6>
                                    <select class="form-control" id="exampleFormControlSelect1">
                                        <option>{{$t('selecciona')}}</option>
                                        <option>{{$t('uno')}}</option>
                                        <option>{{$t('dos')}}</option>
                                        <option>{{$t('tres')}}</option>
                                        <option>{{$t('cuatro')}}</option>
                                    </select>
                                    <br>
                                    <h6 class="car-widget-title">{{$t('kilometros')}}</h6>
                                    <select class="form-control" id="exampleFormControlSelect1">
                                        <option>{{$t('selecciona')}}</option>
                                        <option>{{$t('uno')}}</option>
                                        <option>{{$t('dos')}}</option>
                                        <option>{{$t('tres')}}</option>
                                        <option>{{$t('cuatro')}}</option>
                                    </select>
                            </div>
                        </div>
                    </div>
                </form>
                <br>
                
                <h6 class="car-widget-title">{{$t('estilos')}}</h6>
                <li>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="fuel4">
                        <label class="form-check-label" for="fuel4"> {{$t('aventurero')}}</label>
                    </div>
                </li>

                <li>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="fuel4">
                        <label class="form-check-label" for="fuel4"> {{$t('cupe')}}</label>
                    </div>
                </li>
                <li>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="fuel4">
                    <label class="form-check-label" for="fuel4"> {{$t('electrico')}}</label>
                    </div>
                </li>
                <li>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="fuel4">
                        <label class="form-check-label" for="fuel4"> {{$t('hibrido_m')}}</label>
                    </div>
                </li>
                <li>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="fuel4">
                        <label class="form-check-label" for="fuel4"> {{$t('trabajo')}}</label>
                    </div>
                </li>
                <li>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="fuel4">
                        <label class="form-check-label" for="fuel4"> {{$t('crossover')}}</label>
                    </div>
                </li>
                <li>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="fuel4">
                        <label class="form-check-label" for="fuel4"> {{$t('deportivo')}}</label>
                    </div>
                </li>
                <li>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="fuel4">
                        <label class="form-check-label" for="fuel4"> {{$t('familiar')}}</label>
                    </div>
                </li>
                <li>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="fuel4">
                        <label class="form-check-label" for="fuel4"> {{$t('terreno')}}</label>
                    </div>
                </li>
                <li>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="fuel4">
                        <label class="form-check-label" for="fuel4"> {{$t('urbano')}}</label>
                    </div>
                </li>
                            </div>      
                    </div>
                    <div class="col-lg-9">
                        <div class="col-md-12">
                            <div class="car-sort">
                                <h5>{{$t('cero_coches')}}</h5>
                                <div class="car-sort-box">
                                    <select class="form-select">
                                        <option value="1">{{$t('ordenar')}}</option>
                                        <option value="5">{{$t('precio_alto')}}</option>
                                        <option value="2">{{$t('precio_bajo')}}</option>
                                        <option value="3">{{$t('a_z')}}</option>
                                        <option value="4">{{$t('z_a')}}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 col-xl-6">
                                <div class="car-item">
                                    <div class="car-img">
                                        <img src="/assets/img/car/01.png" alt="">
                                    </div>
                                    <div class="car-content">
                                        <div class="car-top">
                                            <div>
                                                <h4 class="textflex">{{$t('electrico')}}</h4>
                                            </div>
                                        </div>
                                        <div class="car-top">
                        <h4><a href="#">{{$t('modelo_coche')}} <br> {{$t('modelo_coche2')}}</a></h4>
                        <span><i class="fas fa-star"></i> {{$t('valoracion')}}</span>
                                        </div>
                                        <div>
                                            <div class="car-top">
                                                <span class="car-price"><sub>{{$t('desde')}} </sub> <strong> {{$t('precio')}} </strong> <sub>{{$t('al_mes')}}</sub></span>
                                            </div>
                                        </div>
                                        <div class="car-footer">
                                
                                            <a href="configuratuoferta.html" class="theme-btn1">{{$t('particulares')}}</a>
                                            <a href="configuratuoferta.html" class="theme-btn1">{{$t('empresas')}}</a>
                                            <a href="configuratuoferta.html" class="theme-btn1">{{$t('autonomos')}}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-xl-6">
                                <div class="car-item">
                                    <div class="car-img">
                                        <img src="/assets/img/car/01.png" alt="">
                                    </div>
                                    <div class="car-content">
                                        <div class="car-top">
                                            <div>
                                                <h4 class="textflex">{{$t('electrico')}}</h4>
                                            </div>
                                        </div>
                                        <div class="car-top">
                        <h4><a href="#">{{$t('modelo_coche')}} <br> {{$t('modelo_coche2')}}</a></h4>
                        <span><i class="fas fa-star"></i> {{$t('valoracion')}}</span>
                                        </div>
                                        <div>
                                            <div class="car-top">
                                                <span class="car-price"><sub>{{$t('desde')}} </sub> <strong> {{$t('precio')}} </strong> <sub>{{$t('al_mes')}}</sub></span>
                                            </div>
                                        </div>
                                        <div class="car-footer">
                                
                                            <a href="configuratuoferta.html" class="theme-btn1">{{$t(' particulares')}}</a>
                                            <a href="configuratuoferta.html" class="theme-btn1">{{$t('empresas')}}</a>
                                            <a href="configuratuoferta.html" class="theme-btn1">{{$t('autonomos')}}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="pagination-area">
                            <div aria-label="Page navigation example">
                                <ul class="pagination">
                                    <li class="page-item">
                                        <a class="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true"><i class="far fa-arrow-left"></i></span>
                                        </a>
                                    </li>
                                    <li class="page-item active"><a class="page-link" href="#">{{$t('uno')}}</a></li>
                                    <li class="page-item"><a class="page-link" href="#">{{$t('dos')}}</a></li>
                                    <li class="page-item"><a class="page-link" href="#">{{$t('tres')}}</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true"><i class="far fa-arrow-right"></i></span>
                                        </a>
                                    </li>
                                </ul>
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