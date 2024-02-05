<template>
    <div class="row flex-column-reverse p-0 m-0">
        <div class="car-item-single col-12">
            <p class="" style="font-size: 12px" ><span style="font-size: 18px; font-weight: 900; color: #E94B28">{{ textos.number }}</span> {{ textos.text }}</p>
            <div class="car-single-wrapper m-0 p-0" style="border-color: #464646">
                <div class="w-100 text-center p-2 " :style="{ backgroundColor: plan?.backgroundColor }" style="border-top-left-radius: 15px; border-top-right-radius: 15px;">
                    <p><strong>{{ plan?.nombre }}</strong></p>
                </div>
           
                <div class="p-3">
                    <table class="table caption-top">
                        <tbody>
                            <tr>
                                <th>{{$t('tarifa_plan')}}</th>
                                <td style="text-align: right;"><strong>{{ reserva.invoice.plan.amount }}{{$t('moneda')}} x {{ reserva.invoice.plan.dias }} día {{ reserva.invoice.plan.dias > 1 ? 's':'' }} </strong></td>   
                            </tr>
                            <tr>
                                <th>{{$t('sub_total')}}</th>    
                                <td style="text-align: right;"><strong>{{ reserva.invoice.subtotal }}€</strong></td>
                            </tr>
                            <tr v-for="(item, key) in reserva.mejoras" :key="`mejora-${key}`">
                                <th>{{ item.descripcion }}</th>    
                                <td style="text-align: right;"><strong>{{ item.precio }}€</strong></td>
                            </tr>
                            <tr>
                                <th>{{$t('total_pagar')}}  {{ reserva.invoice.plan.dias }} día {{ reserva.invoice.plan.dias > 1 ? 's':'' }}</th>
                                <td style="text-align: right; font-size: 20px;"><strong>{{ reserva.invoice.total }}€</strong></td>

                            </tr>
                                            
                        </tbody>
                    </table>
                    

                </div> 
                
            </div>
            <ul id="inline-popupss"><li class="text-right mt-3"><a href="#test-popup" data-effect="mfp-zoom-in" class="btn btn-success w-auto py-2">Confirmar</a></li></ul>
        </div>
        
        <div class="col-12">

            <p class="m-0" style="font-size: 12px" ><span style="font-size: 18px; font-weight: 900; color: #E94B28">5.</span> Mejora tu reserva</p>
            
            <div class="row mt-2">
                <div class="col-3 col-sm-2  pe-0">
                        <div @click="onSelectPlan(1)" :style="{ opacity: plan?.id == 1 ? '1':'.4' }" class="cardPaquete theme-btn1 m-0 mb-2 d-flex justify-content-center align-items-center">
                            <h4 class="">{{$t('basic')}}</h4>
                        </div>
                        <div @click="onSelectPlan(2)" :style="{ opacity: plan?.id == 2 ? '1':'.4' }" class="cardPaquete theme-btn2 m-0 mb-2 d-flex justify-content-center align-items-center">
                            <h4>{{$t('medium')}}</h4>
                        </div>
                        <div @click="onSelectPlan(3)" :style="{ opacity: plan?.id == 3 ? '1':'.4' }" class="cardPaquete theme-btn3 m-0 mb-2 d-flex justify-content-center align-items-center">
                            <h4>{{$t('premium')}}</h4>

                        </div>
                </div>
            
                <div class="col-sm-10 col-9 ">
                    <div class="owl-carousell owl-carousel owl-theme">
                        <div 
                            class="item"
                            v-for="(item,key) in mejoras.data"
                            :key="`item-${key}`"
                        >
                            <div @click="addBeneficio({plan: 1,item: item , incluido: item.basic})" :style="{ opacity: plan?.id == 1 ? '1':'.4', background: reserva.mejoras.map(e=>e.id).includes(item.id) && plan?.id == 1 ?  plan?.backgroundColor : '', border: plan?.id == 1 && !item.basic ? '1px solid white':'', }" class="cardPaquete card bgcard mb-2 ">
                               <p>{{ item.descripcion }}</p>
                                <div class="d-flex justify-content-center">
                                    <i v-if="item.basic" class="fa fa-check d-flex align-items-center justify-content-center p-0 m-0 circleC" style=""></i>
                                    <button v-else  type="button" class="btn btn-sm btn-outline-light">+{{ item.precio }}{{$t('moneda')}}</button>

                                </div> 
                            </div>
                            <div @click="addBeneficio({plan: 2,item: item , incluido: item.medium})" :style="{ opacity: plan?.id == 2 ? '1':'.4', background: reserva.mejoras.map(e=>e.id).includes(item.id) && plan?.id == 2 ?  plan?.backgroundColor : '', border: plan?.id == 2 && !item.medium  ? '1px solid white':'', }" class="cardPaquete card bgcard mb-2 ">
                                <p>{{ item.descripcion }}</p>
                                <div class="d-flex justify-content-center">
                                    <i v-if="item.medium" class="fa fa-check d-flex align-items-center justify-content-center p-0 m-0 circleC" style=""></i>
                                    <button v-else  type="button" class="btn btn-sm btn-outline-light">+{{ item.precio }}{{$t('moneda')}}</button>

                                </div> 
                            </div>
                            <div @click="addBeneficio({plan: 3,item: item , incluido: item.premium})" :style="{ opacity: plan?.id == 3 ? '1':'.4', background: reserva.mejoras.map(e=>e.id).includes(item.id) && plan?.id == 3 ?  plan?.backgroundColor : '', border: plan?.id == 3 && !item.premium ? '1px solid white':'', }" class="cardPaquete card bgcard mb-2">
                                <p>{{ item.descripcion }}</p>
                                <div class="d-flex justify-content-center">
                                    <i v-if="item.premium" class="fa fa-check d-flex align-items-center justify-content-center p-0 m-0 circleC" style=""></i>
                                    <button v-else  type="button" class="btn btn-sm btn-outline-light">+{{ item.precio }}{{$t('moneda')}}</button>

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

    import type { Calculo } from '~/composables/useReserva'

    import type { Mejora } from '~/composables/useMejoras'

    const { mejoras } = useMejoras()

    const { reserva } = useReserva()


    onMounted(()=>{
        // $('.owl-carousell')
        // const carousel = document.querySelector('.owl-carousell')
        
        $('.owl-carousell').owlCarousel({
            items: 4,
            loop:true,
            autoWidth:true,
            margin:5,
            merge:true,
            nav:true,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            // responsive:{
            //     678:{
            //         mergeFit:true
            //     },
            //     1000:{
            //         mergeFit:true
            //     }
            // }
        });

        setTimeout(()=>{
                $('#inline-popupss').magnificPopup({
                    delegate: 'a',
                    removalDelay: 500, //delay removal by X to allow out-animation
                    callbacks: {
                        beforeOpen: function() {
                            this.st.mainClass = this.st.el.attr('data-effect');
                        }
                    },
                    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
                });
        
            },1000)
    })
   

    const props = defineProps({
        plan_id: Number,
        coche: Object,
        reserva_devolucion: Object,
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
        return planes.data.find( e => e.id == plan_id.value )
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

    const plan_id = defineModel('plan_id')

    const emit = defineEmits(['selectPlan'])

    const onSelectPlan = (id: number) => {
        plan_id.value = id
    }

    watch(plan_id,(to)=>{
        reserva.mejoras = []
        onCalcularPrecios()
    })

    
    const onCalcularPrecios = () => {
        const dataCalculo = reserva.getDataCalculo()
        getCalculo(dataCalculo)
    }

    const getCalculo = async (calculo:Calculo) => {
        console.log(calculo)

        interface response {
            data: Object,
            status: String
        }

        const  { data, pending, error, refresh } = await useLazyFetch<response>('https://dev.api.123renting.es/api/calcular_costo', {
            body: calculo,
            method: 'POST'
        })

        if(data.value){
            reserva.putInvoice(data.value?.data)
        }

        // console.log(data)
    }

    

    const addBeneficio = (obj:any) => {
        
        if(obj.plan != plan.value?.id){
            return
        }

        if(obj.incluido){
            return
        }
        
        const mejora = mejoras.data.find((element) => element.id == obj.item.id)
        if(mejora){
            reserva.addMejora(mejora)   
            // onCalcularPrecios()
        }

    }

</script>

<style lang="scss">
.cardPaquete{
    margin-right: 10px;
    text-align: center;
    padding: 2px 8px;
    align-items: center;
    justify-content: center;
    width: auto;
    min-width: 80px;
    height: 80px;
    cursor: pointer;
    // border: 1px solid white;
    h4{
        color: white;
    }
    &:hover{
        background: #242323;
        h4{
            color: black;
        }
    }
    p{
        font-size: 10px;
    }
    button{
        font-size: 12px;
        border: none!important;
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