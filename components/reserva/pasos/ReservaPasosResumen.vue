<template>
    <div class="row">
        <div class="car-item-single col-12">
            <p class="" style="font-size: 12px" ><span style="font-size: 18px; font-weight: 900; color: #E94B28">{{ textos.number }}</span> {{ textos.text }}</p>
            <div class="car-single-wrapper mt-4 p-0" style="border-color: #464646">
                <div class="w-100 text-center p-2 " :style="{ backgroundColor: plan.backgroundColor }" style="border-top-left-radius: 15px; border-top-right-radius: 15px;">
                    <p><strong>{{ plan.nombre }}</strong></p>
                </div>
                <div class="p-3">
                    <table class="table caption-top">
                        <tbody>
                            <tr>
                                <th>Precio Plan tarifa Basic</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><strong>700€</strong>
                                </td>   
                            </tr>
                            <tr>
                                <th>Sub-total</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><strong>{{ precio }}€</strong>
                                    </td>
                            </tr>
                            <tr>
                                <th>Total a pagar por 7 días</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><strong>724€</strong></td>
                            </tr>
                                            
                        </tbody>
                    </table>
                </div> 
                
            </div>
        </div>
        
        <div class="col-12">
            <p class="mt-4" style="font-size: 12px" ><span style="font-size: 18px; font-weight: 900; color: #E94B28">5</span> Mejora tu reserva</p>
            
            <div class="row mt-2">
                <div class="col-2 pe-0">
                        <div class="cardPaquete theme-btn1 m-0 mb-2 d-flex justify-content-center align-items-center">
                            <h4 class="">Basic</h4>
                        </div>
                        <div class="cardPaquete theme-btn2 m-0 mb-2 d-flex justify-content-center align-items-center">
                            <h4>Medium</h4>
                        </div>
                        <div class="cardPaquete theme-btn3 m-0 mb-2 d-flex justify-content-center align-items-center">
                            <h4>Premium</h4>
                        </div>
                </div>
            
                <div class="col-10 ">
                    <div class="owl-carousell owl-carousel owl-theme">
                        <div 
                            class="item"
                            v-for="(item,key) in mejoras.data"
                            :key="`item-${key}`"
                        >
                            <div class="cardPaquete card bgcard mb-2 ">
                               <p>{{ item.descripcion }}</p>
                               
                                <div class="d-flex justify-content-center pt-2">
                                    <i v-if="item.basic" class="fa fa-check d-flex align-items-center justify-content-center p-0 m-0 circleC" style=""></i>
                                    <button v-else type="button" class="btn btn-sm btn-outline-light">+{{ item.precio }}€</button>
                                </div> 
                            </div>
                            <div class="cardPaquete card bgcard mb-2 ">
                                <p>{{ item.descripcion }}</p>
                                <div class="d-flex justify-content-center pt-2">
                                    <i v-if="item.medium" class="fa fa-check d-flex align-items-center justify-content-center p-0 m-0 circleC" style=""></i>
                                    <button v-else type="button" class="btn btn-sm btn-outline-light">+{{ item.precio }}€</button>
                                    
                                </div> 
                            </div>
                            <div class="cardPaquete card bgcard mb-2">
                                <p>{{ item.descripcion }}</p>

                                <div class="d-flex justify-content-center pt-2">
                                    <i v-if="item.premium" class="fa fa-check d-flex align-items-center justify-content-center p-0 m-0 circleC" style=""></i>
                                    <button v-else type="button" class="btn btn-sm btn-outline-light">+{{ item.precio }}€</button>
                                    
                                </div> 
                            </div>
                            
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    const { mejoras } = useMejoras()


    onMounted(()=>{
        // $('.owl-carousell')
        // const carousel = document.querySelector('.owl-carousell')
        
        $('.owl-carousell').owlCarousel({
            items: 3,
            loop:true,
            margin:5,
            merge:true,
            nav:true,
            responsive:{
                678:{
                    mergeFit:true
                },
                1000:{
                    mergeFit:true
                }
            }
        });
    })
   

    const props = defineProps({
        plan_id: Number,
        coche: Object,
        textos:{
            type: Object,
            default(){
                return {
                    number: '',
                    text: ''
                }
            }
        },
    })

    const { planes } = usePlan()

    const plan = computed(()=>{
        return planes.data.find( e => e.id == props.plan_id )
    })

    const precio = computed(()=>{

        const clave = plan.value?.key || ''

        let precio = null
        switch (clave) {
            case 'basico':
                precio = props.coche?.config.basico 
                break;
            case 'medio':
                precio = props.coche?.config.medio 
                break;
            case 'premium':
                precio = props.coche?.config.premium 
                break;
            default:
                precio = 0
                break;
        }

        return precio
    })

</script>

<style lang="scss">
.cardPaquete{
    margin-right: 10px;
    text-align: center;
    padding: 10px 8px;
    width: auto;
    height: 80px;
    h4{
        color: white;
    }
    &:hover{
        h4{
            color: black;
        }
    }
    p{
        font-size: 10px;
    }
    button{
        font-size: 12px;
    }
}

.bgcard{
    background:#373535;
}

/* Estilo para ocultar la barra de desplazamiento en un div con overflow-auto */
.overflow-auto-scroll-hidden {
  overflow: auto;
}

.overflow-auto-scroll-hidden::-webkit-scrollbar {
  width: 6px; /* ajusta según sea necesario */
  border-radius: 10px;
}

.overflow-auto-scroll-hidden::-webkit-scrollbar-thumb {
  background-color: transparent; /* oculta el pulgar de la barra de desplazamiento */
}

.overflow-auto-scroll-hidden:hover::-webkit-scrollbar-thumb {
  background-color: #999; /* color del pulgar al pasar el mouse sobre el área de desplazamiento */
  border-radius: 10px;
 
}

.circleC{
    font-size: 10px; 
    background: green; 
    color: white; 
    border-radius: 100%; 
    border: 1px solid green;  
    width: 20px; 
    height: 20px;
}

.owl-nav{
    display: flex;
    justify-content: flex-end;
    button{
        font-size: 30px!important;
        background:#373535 !important;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        margin-left: 10px;
    }
}

</style>