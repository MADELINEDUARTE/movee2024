<template>
<LayoutWeb>
<main class="main">
    <br>
    <br>
    <div class="site-heading text-center">
        <span class="site-title-tagline">{{$t('revisa')}}</span>
        <h2 class="site-title">Tu <span>{{$t('reserva')}}</span></h2>
        <div class="heading-divider">
        </div>
    </div>

    <div class="car-item-single py-120">
        <div class="container">
            <div class="car-single-wrapper">
                <div class="row">
                    <div class="tabla1a">
                        <table class="table caption-top">
                            <thead>
                                <th class="color1a" scope="col">{{$t('basico')}}</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>{{$t('tarifa_plan')}}</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><strong>{{$t('tarifa_plan_precio')}}</strong>
                                    </td>   
                                </tr>
                                <tr>
                                    <th>{{$t('sub_total')}}</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><strong>{{$t('sub_total_precio')}}</strong>
                                        </td>
                                </tr>
                                <tr>
                                    <th>{{$t('total_pagar')}}</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><strong>{{$t('precio_total')}}</strong></td>
                                </tr>
                                                
                            </tbody>
                        </table>
                    </div>
                </div> 
            </div>
        </div>
    </div>

     <div class="site-heading text-center">                    
        <h2 class="site-title">{{$t('mejora_reserv')}} <span>{{$t('reserva')}}</span></h2>
            <div class="heading-divider">
            </div>
    </div>

    <div class="car-item-single py-120">
        <div class="container">
            <div class="car-single-wrapper">
                <div class="row">                  
                    <div class="tabla1">              
                        <table class="table caption-top">
                            <thead>
                                <tr>
                                    <th scope="col">{{$t('Description')}}</th>
                                    <th class="color1" scope="col">{{$t('basico')}}</th>
                                    <th class="color2" scope="col">{{$t('medio')}}</th>
                                    <th class="color3" scope="col">{{$t('primiun')}}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>{{$t('precio_dia')}}</th>
                                    <td class="color1"><strong>{{$t('cien')}}</strong></td>
                                    <td class="color2"><strong>{{$t('cien')}}</strong></td>
                                    <td class="color3"><strong>{{$t('cien')}}</strong></td>
                                </tr>
                                <tr>
                                    <th scope="row">{{$t('Fuel')}}</th>
                                    <td><strong><button class="btn-pagar">100€</button></strong></td>
                                    <td><strong><button class="btn-pagar2">100€</button></strong></td>
                                    <td><strong><button class="btn-pagar3">100€</button></strong></td>
                                </tr>
                                <tr>
                                    <th scope="row">{{$t('kilometraje')}}</th>
                                    <td class="coloru"><i class="fa-sharp fa-regular fa-circle-check"></i></td>
                                    <td class="coloru"><i class="fa-sharp fa-regular fa-circle-check"></i></td>
                                    <td class="coloru"><i class="fa-sharp fa-regular fa-circle-check"></i></td>
                                </tr>
                                <tr>
                                    <th scope="row">{{$t('tasa')}}</th>
                                    <td class="coloru"><i class="fa-sharp fa-regular fa-circle-check"></i></td>
                                    <td class="coloru"><i class="fa-sharp fa-regular fa-circle-check"></i></td>
                                    <td class="coloru"><i class="fa-sharp fa-regular fa-circle-check"></i></td>
                                </tr>
                                <tr>
                                    <th scope="row">{{$t('cobertura')}}</th>
                                    <td><strong><button class="btn-pagar">{{$t('b_cobertura_precio')}}</button></strong></td>
                                    <td class="coloru"><i class="fa-sharp fa-regular fa-circle-check"></i></td>
                                    <td class="coloru"><i class="fa-sharp fa-regular fa-circle-check"></i></td>
                                </tr>
                                <tr>
                                    <th scope="row">{{$t('asistencia')}}
                                    </th>
                                    <td class="coloru"><i class="fa-sharp fa-regular fa-circle-check"></i></td>
                                    <td class="coloru"><i class="fa-sharp fa-regular fa-circle-check"></i></td>
                                    <td class="coloru"><i class="fa-sharp fa-regular fa-circle-check"></i></td>
                                </tr>
                                <tr>
                                    <th scope="row">{{$t('conductor')}}</th>
                                    <td><strong><button class="btn-pagar">{{$t('b_conductor_precio')}}</button></strong></td>
                                    <td class="coloru"><i class="fa-sharp fa-regular fa-circle-check"></i></td>
                                    <td class="coloru"><i class="fa-sharp fa-regular fa-circle-check"></i></td>
                                </tr>
                                <tr>
                                    <th scope="row">{{$t('gps')}}</th>
                                    <td class="coloru"><i class="fa-sharp fa-regular fa-circle-check"></i></td>
                                    <td class="coloru"><i class="fa-sharp fa-regular fa-circle-check"></i></td>
                                    <td class="coloru"><i class="fa-sharp fa-regular fa-circle-check"></i></td>
                                </tr>
                                <tr>
                                    <th scope="row">{{$t('kilometraje_a')}}</th>
                                    <td class="coloru"><i class="fa-sharp fa-regular fa-circle-check"></i></td>
                                    <td class="coloru"><i class="fa-sharp fa-regular fa-circle-check"></i></td>
                                    <td class="coloru"><i class="fa-sharp fa-regular fa-circle-check"></i></td>
                                </tr>
                                <tr>
                                    <th scope="row">{{$t('devo_sucursal')}}</th>
                                    <td><strong><button class="btn-pagar">{{$t('b_devo_sucursal')}}</button></strong></td>
                                    <td><strong><button class="btn-pagar2">{{$t('b_devo_sucursal')}}</button></strong></td>
                                    <td class="coloru"><i class="fa-sharp fa-regular fa-circle-check"></i></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>                       
            </div>
        </div>
    </div>

    <div class="car-item-single py-120">
        <div class="container">
            <div class="car-single-wrapper">
                <div class="row">
                    <div class="tabla1a">
                        <table class="table caption-top">
                            <tbody>
                                <tr>
                                    <th>{{$t('tarifa_plan')}}</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><strong>{{$t('tarifa_plan_precio')}}</strong></td>
                                </tr>
                                <tr>
                                    <th>{{$t('sub_total')}}</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><strong>{{$t('sub_total_precio')}}</strong></td>
                                </tr>
                                <tr>
                                    <th>{{$t('total_pagar')}}</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><strong>{{$t('precio_total')}}</strong></td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="text-center mt-4">
                            <a href="#" class="theme-btn"> <strong>{{$t('Confirm')}}</strong></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
</LayoutWeb>
</template>