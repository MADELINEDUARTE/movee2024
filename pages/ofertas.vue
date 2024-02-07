<template>
<LayoutWeb>
    <main class="main">
        <div class="col-lg-6 mx-auto">
            <div class="site-heading text-center">
                <h2 class="site-title">Tu nuevo renting, <span>más cerca</span></h2>
            </div>
        </div>

        <div class="car-area py-120">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3">
                        <div class="car-sidebar">
                            <div class="car-widget">
                                <div class="car-search-form">
                                    <h4 class="car-widget-title">Buscar</h4>
                                    <form action="#">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Search">
                                            <button type="search"><i class="far fa-search"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="car-widget">
                                <h4 class="car-widget-title">Selecciona más de una opción de filtro si lo deseas</h4>
                                <h6 class="car-widget-title">Tipo de clientes</h6>
                                <ul>
                                    <li>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="brand">
                                            <label class="form-check-label" for="brand"> Todos</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="brand1">
                                            <label class="form-check-label" for="brand1"> Particular</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="form-check">
                                            <input class="form-check-input" checked="" type="checkbox" id="brand2">
                                            <label class="form-check-label" for="brand2"> Empresa</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="brand3">
                                            <label class="form-check-label" for="brand3"> Autónomo</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                             <div class="car-widget">
                                        <h6 class="car-widget-title">Renting flexible</h6>
                                <ul>
                                    <li>
                                        <div class="form-check">
                                            <input class="form-check-input" checked="" type="checkbox" id="brand4">
                                            <label class="form-check-label" for="brand4"> Todos</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="brand5">
                                            <label class="form-check-label" for="brand5"> Flexible</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="brand6">
                                            <label class="form-check-label" for="brand6"> Fijos</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="car-widget">
                                <h6 class="car-widget-title">Tipo de vehículo</h6>
                                <ul>
                                    <li>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="tran1">
                                            <label class="form-check-label" for="tran1"> Berlina</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="tran1">
                                            <label class="form-check-label" for="tran1"> Familiar</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="tran1">
                                            <label class="form-check-label" for="tran1"> Monovolumen</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="tran1">
                                            <label class="form-check-label" for="tran1"> Pick Up</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="tran1">
                                            <label class="form-check-label" for="tran1"> Todo Terreno</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="tran1">
                                            <label class="form-check-label" for="tran1"> Compacto</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="tran1">
                                            <label class="form-check-label" for="tran1"> Furgoneta</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="tran1">
                                            <label class="form-check-label" for="tran1"> Moto</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="form-check">
                                            <input class="form-check-input" checked="" type="checkbox" id="tran2">
                                            <label class="form-check-label" for="tran2"> SUV</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                            <div class="car-widget">
                            <h6 class="car-widget-title">Elige una Marca</h6>
                            <form action="#">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <label for="exampleFormControlSelect1"></label>
                                            <select class="form-control" id="exampleFormControlSelect1">
                                            <option>Marca</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <br>
                            <br>
                            <h6 class="car-widget-title">Elige una Modelo</h6>
                                <form action="#">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <label for="exampleFormControlSelect1"></label>
                                                <select class="form-control" id="exampleFormControlSelect1">
                                                <option>Modelo</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="car-widget">
                                <h6 class="car-widget-title">Combustible</h6>
                                <li>
                <div class="form-check">
                    <input class="form-check-input" checked="" type="checkbox" id="brand4">
                    <label class="form-check-label" for="brand4"> Diesel</label>
                </div>
            </li>
            <li>
                <div class="form-check">
                    <input class="form-check-input" checked="" type="checkbox" id="brand4">
                    <label class="form-check-label" for="brand4"> Gasolina</label>
                </div>
            </li>
            <li>
                <div class="form-check">
                    <input class="form-check-input" checked="" type="checkbox" id="brand4">
                    <label class="form-check-label" for="brand4"> Híbrido Enchufable</label>
                </div>
            </li>
            <li>
                <div class="form-check">
                    <input class="form-check-input" checked="" type="checkbox" id="brand4">
                    <label class="form-check-label" for="brand4"> Eléctrico</label>
                </div>
            </li>
            <li>
                <div class="form-check">
                    <input class="form-check-input" checked="" type="checkbox" id="brand4">
                    <label class="form-check-label" for="brand4"> Híbrido</label>
                </div>
            </li>
            <br>
            <h6 class="car-widget-title">Transmisión</h6>
                <li>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="fuel4">
                        <label class="form-check-label" for="fuel4"> Manual</label>
                    </div>
                </li>
                <li>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="fuel4">
                        <label class="form-check-label" for="fuel4"> Automático</label>
                    </div>
                </li>

                <br>
           
            
               <form action="#">
                     <div class="row">
                         <div class="col-lg-12">
                            <div class="form-group">
                                <label for="exampleFormControlSelect1"></label>
                                <h6 class="car-widget-title">Precio</h6>
                                     <select class="form-control" id="exampleFormControlSelect1">
                                        <option>Selecciona</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                    <br>
                                    <h6 class="car-widget-title">Meses</h6>
                                    <select class="form-control" id="exampleFormControlSelect1">
                                        <option>Selecciona</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                    <br>
                                    <h6 class="car-widget-title">KM/Año</h6>
                                    <select class="form-control" id="exampleFormControlSelect1">
                                        <option>Selecciona</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                            </div>
                        </div>
                    </div>
                </form>
                <br>
                
                <h6 class="car-widget-title">Estilos</h6>
                <li>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="fuel4">
                        <label class="form-check-label" for="fuel4"> Aventurero</label>
                    </div>
                </li>

                <li>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="fuel4">
                        <label class="form-check-label" for="fuel4"> Cupé</label>
                    </div>
                </li>
                <li>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="fuel4">
                    <label class="form-check-label" for="fuel4"> Eléctrico</label>
                    </div>
                </li>
                <li>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="fuel4">
                        <label class="form-check-label" for="fuel4"> Híbrido</label>
                    </div>
                </li>
                <li>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="fuel4">
                        <label class="form-check-label" for="fuel4"> Trabajo</label>
                    </div>
                </li>
                <li>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="fuel4">
                        <label class="form-check-label" for="fuel4"> Crossover</label>
                    </div>
                </li>
                <li>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="fuel4">
                        <label class="form-check-label" for="fuel4"> Deportivo</label>
                    </div>
                </li>
                <li>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="fuel4">
                        <label class="form-check-label" for="fuel4"> Familiar</label>
                    </div>
                </li>
                <li>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="fuel4">
                        <label class="form-check-label" for="fuel4"> Todoterreno</label>
                    </div>
                </li>
                <li>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="fuel4">
                        <label class="form-check-label" for="fuel4"> Urbano</label>
                    </div>
                </li>
                            </div>      
                    </div>
                    <div class="col-lg-9">
                        <div class="col-md-12">
                            <div class="car-sort">
                                <h5>Hemos encontrado 0 coches para ti</h5>
                                <div class="car-sort-box">
                                    <select class="form-select">
                                        <option value="1">Ordenar por</option>
                                        <option value="5">Precio màs alto</option>
                                        <option value="2">Precio màs bajo</option>
                                        <option value="3">Marca A-Z</option>
                                        <option value="4">Marca Z-A</option>
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
                                                <h4 class="textflex">Eléctrico</h4>
                                            </div>
                                        </div>
                                        <div class="car-top">
                                            <h4><a href="#">BMW X1 <br> SDrive 18d</a></h4>
                                            <span><i class="fas fa-star"></i> 5.0</span>
                                        </div>
                                        <div>
                                            <div class="car-top">
                                                <span class="car-price"><sub>desde </sub> <strong> $390 </strong> <sub>Al mes</sub></span>
                                            </div>
                                        </div>
                                        <div class="car-footer">
                                
                                            <a href="configuratuoferta.html" class="theme-btn1">Particulares</a>
                                            <a href="configuratuoferta.html" class="theme-btn1">Empresas</a>
                                            <a href="configuratuoferta.html" class="theme-btn1">Autónomos</a>
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
                                                <h4 class="textflex">Eléctrico</h4>
                                            </div>
                                        </div>
                                        <div class="car-top">
                                            <h4><a href="#">BMW X1 <br> SDrive 18d</a></h4>
                                            <span><i class="fas fa-star"></i> 5.0</span>
                                        </div>
                                        <div>
                                            <div class="car-top">
                                                <span class="car-price"><sub>desde </sub> <strong> $390 </strong> <sub>Al mes</sub></span>
                                            </div>
                                        </div>
                                        <div class="car-footer">
                                
                                            <a href="configuratuoferta.html" class="theme-btn1">Particulares</a>
                                            <a href="configuratuoferta.html" class="theme-btn1">Empresas</a>
                                            <a href="configuratuoferta.html" class="theme-btn1">Autónomos</a>
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
                                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
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