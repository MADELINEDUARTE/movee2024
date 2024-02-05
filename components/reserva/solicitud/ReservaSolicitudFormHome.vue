<template>
    <div class="find-car px-0" :class="statusOpen ? 'fullscreen':''"  id="iniciatureserva">
        <div class="container">
            <div class="find-car-form" :class="statusOpen ? 'px-0':''">
                <div class="d-flex justify-content-between" :class="statusOpen ? 'mb-4':''">
                    <div class="d-flex justify-center flex-column ">
                        <h4 class="find-car-title m-0">{{$t('encuentra')}}</h4>
                        <p v-if="statusOpen">
                            {{$t('completainformacion')}}</p>
                    </div>
                    <div @click="onOpen" v-if="statusOpen" class="d-flex justify-center align-items-center p-3">
                        <i class="fa fa-times" style="color: white;font-size: 20px;"></i>
                    </div>
                </div>
                <!-- {{ reserva }} -->
                <form @click="onOpenaLL" action="#">

                    <div v-if="statusOpen" class="col-12 d-flex mb-4" :class="paso > 1 ? 'justify-content-between':'justify-content-end'">
                        <button type="button" v-if="paso > 1" @click="siguiente(paso-1)" class="theme-btn w-auto py-2 m-0">{{$t('volver')}}</button>
                        <button type="button" v-if="paso < 2" @click="siguiente(paso+1)" class="theme-btn w-auto py-2 m-0">{{$t('siguiente')}}</button>
                        <!-- <button type="button" id="inline-popups"  data-effect="mfp-zoom-in" v-show="paso == 2" @click="confirmar" class="btn btn-success w-auto py-2">Confirmar</button> -->
                        <ul v-show="paso == 2"  id="inline-popups"><li><a :style="{opacity: validateStatus ? '1':'.5', cursor: validateStatus ? 'pointer':'no-drop' }" href="#test-popup" data-effect="mfp-zoom-in" class="btn btn-success w-auto py-2">{{$t('siguiente')}}</a></li></ul>

                    </div>

                    <Transition>
                        <div class="row"  v-if="paso == 1">
                            <ReservaPasosOficina 
                                :status_open="statusOpen" 
                                :oficinas="oficinas.data" 
                                :type="$t('recogida')"
                                :textos="{
                                    number: '1.',
                                    text: $t('ofi_selecciona')
                                }"
                                class="col-paso mb-4" 
                                :class="statusOpen ? 'col-12 col-sm-6 offset-sm-3':'col-12 col-md-6'"
                                v-model:oficina_id="reserva.recogida.oficina_id"
                                v-model:date="reserva.recogida.fecha.date"
                                v-model:time="reserva.recogida.fecha.time"
                            />

                            <div v-if="statusOpen" class="col-12 col-sm-6 offset-sm-3 mb-4 mt-3" style="background: #ffffff;opacity:.2; height: 1px;"></div>

                            <ReservaPasosOficina 
                                :status_open="statusOpen" 
                                :oficinas="oficinas.data" 
                                :type="$t('devolucion')"
                                :textos="{
                                    number: '2.',
                                    text: $t('ofi_selecciona2')
                                }"
                                class="col-paso mb-4" 
                                :class="statusOpen ? 'col-12 col-sm-6 offset-sm-3':'col-12 col-md-6'"
                                v-model:oficina_id="reserva.devolucion.oficina_id"
                                v-model:date="reserva.devolucion.fecha.date"
                                v-model:time="reserva.devolucion.fecha.time"
                            />

                        </div>
                    </Transition>
                   
                    <div class="row" v-if="paso == 2">
                        <ReservaPasosCoches 
                            
                            :status_open="statusOpen"
                            :coches="coches.data"
                            :textos="{
                                number: '3.',
                                text: 'Elige un coche seleccionando el plan que prefieras.'
                            }"
                            
                            v-model:plan_id="reserva.coche.plan_id"
                            v-model:coche_id="reserva.coche.coche_id"
                        />

                        <ReservaPasosResumen 
                            class="col-12 col-sm-8"
                            :textos="{
                                number: '4.',
                                text: 'Resumen de la reserva.'
                            }"
                            v-show="reserva.coche.coche_id"
                            v-model:plan_id="reserva.coche.plan_id"
                            :coche="coches.data.find( e => e.id == reserva.coche.coche_id)"
                            :reserva_devolucion="reserva.devolucion"
                        />

                        
                    </div>

                </form>
            </div>
        </div>
        <!-- <ul id="inline-popups">
            <li><a href="#test-popup" data-effect="mfp-zoom-in">OPEN</a></li>
        </ul> -->
      
  

        <div id="test-popup" class="white-popup mfp-with-anim mfp-hide container card col-12 col-sm-8">
            <div class="card-body text-center">
                
                <Vue3Lottie
                    animationLink="/_nuxt/public/assets/lotties/creditcards.json"
                    :height="300"
                    :width="300"
                />

                <h2>Paga tu reserva</h2>
                <p class="mb-3">Total a pagar</p>
                <h1 class="mb-3">{{ reserva.invoice.total }}€</h1>
                <p><small>Disfruta de nuestro DESCUENTO del 5% e tu reserva pagando ahora mismo.</small></p>
                <p class="mb-4"><small>Si pagas en nuestras oficinas te descontamos 1€ en tu reserva.</small></p>

                <button type="button" class="col-12 col-sm-6 mx-auto mb-4 theme-btn d-flex justify-content-between" style="font-weight: 800;"><span>Pagar ahora </span> <span >{{ totalAhora }}€</span></button>
                <button type="button" class="col-12 col-sm-6 mx-auto mb-4 theme-btn d-flex justify-content-between" style="font-weight: 800; background: #3b3b3b"><span>Pagar en la oficina </span> <span >{{ totalOficina }}€</span></button>
       
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

    import type { Coche } from '~/composables/useCoche'
    import type { Mejora } from '~/composables/useMejoras'
    const { oficinas } = useOficina()
    const { reserva } = useReserva()
    const { coches } = useCoche()
    const { mejoras } = useMejoras()

    const totalAhora = computed(()=>{
        return reserva.invoice.total - ((reserva.invoice.total * 5) / 100)
    })

    const totalOficina = computed(()=>{
        return reserva.invoice.total - 1
    })

    const validateStatus = computed(()=>{
        if(reserva.coche.coche_id){
            return true
        }
        return false
    })


    watch(reserva.recogida,(to)=>{
        const response = getFlota()
    })
    watch(reserva.devolucion,(to)=>{
        const response = getFlota()
    })
    watch(()=>reserva.coche.coche_id,(to)=>{
        // console.log('to',to)
        setTimeout(()=>{
            // alert('SS')
            window.scrollTo(0, 0)
            // $(window).scrollTop(0)
        },5000)
    })

    const getFlota = async () => {

        interface Response {
            data: {
                // beneficios: number,
                flota: Coche[];
                beneficios: Mejora[]
            }
        }

        const  { data, pending, error, refresh } = await useLazyFetch<Response>('https://dev.api.123renting.es/api/buscar_coche', {
            query: { 
                idregion: 1,
                idoficina: reserva.recogida.oficina_id,
                start: reserva.getFechas().recogida,
                end: reserva.getFechas().devolucion
            }
        })
        
        coches.data =  data.value?.data.flota || []
        mejoras.data = data.value?.data.beneficios || []
        return { data, pending, error, refresh }
    }

    const cocheSeleccionado = computed(()=>{
        return coches.data.find( e => e.id == reserva.coche.coche_id)
    })
    
    const statusOpen = ref(false)

    const onOpenaLL = () => {
        if(!statusOpen.value){
            onOpen()
        }
    }

    watch(statusOpen,(to)=>{
        if(to){
            setTimeout(()=>{
                $('#inline-popups').magnificPopup({
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
        }
    })

    const onOpen = () => {
        statusOpen.value = !statusOpen.value

        if(statusOpen.value){
            $('body')[0].style.overflow = 'hidden'
            $('html')[0].style.overflow = 'hidden'
        }else{
            $('body')[0].style.overflow = ''
            $('html')[0].style.overflow = ''
        }

       
    }

    const paso = ref(1)

    const siguiente = (prox: number) => {
        
        if(prox == 2){
            if(coches.data.length){
                paso.value = 2
            }else{
                paso.value = 1
                alert('No se encontraron coches. pruebe con otra fecha')
            }
        }else{
            paso.value = prox

        }
    }

    const selectPlan = (id:number) => {
        reserva.coche.plan_id = id
    }

    const confirmar = () => {

    }

</script>

<style scoped lang="scss">

.white-popup{
    background: #1B1A1A;
    // max-width: 60%;
}
.find-car {
    /* position: relative;
    margin-top: -70px;
    z-index: 1; */
    transition: all .2s ease; /* Agregar una transición para una animación suave */
}
.find-car {
    &.fullscreen {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        margin: 0;
        z-index: 1000;
        background: #1B1A1A;

        // Media query para dispositivos pequeños
        // @media screen and (max-width: 767px) {
            overflow-y: scroll;
        // }

        /* Ancho de la barra de desplazamiento */
        &::-webkit-scrollbar {
            width: 8px;
        }

        /* Estilo del riel de la barra de desplazamiento */
        &::-webkit-scrollbar-track {
            background-color: transparent;
        }

        /* Estilo del pulgar de la barra de desplazamiento */
        &::-webkit-scrollbar-thumb {
            background-color: #424242;
            border-radius: 10px;
        }

        /* Estilo del pulgar de la barra de desplazamiento al pasar el ratón sobre él */
        &::-webkit-scrollbar-thumb:hover {
        background-color: #555;
        }

    }
}


.col-paso{
    &.disabled{
        opacity: .2;
    }
}
</style>