<template>
    <div class="find-car" :class="statusOpen ? 'fullscreen':''"  id="iniciatureserva">
        <div class="container">
            <div class="find-car-form">
                <div class="d-flex justify-content-between" :class="statusOpen ? 'mb-4':''">
                    <div class="d-flex justify-center flex-column ">
                        <h4 class="find-car-title m-0">Encuentra la Furgoneta perfecta</h4>
                        <p v-if="statusOpen">Completa la siguiente informacion para iniciar tu reserva.</p>
                    </div>
                    <div @click="onOpen" v-if="statusOpen" class="d-flex justify-center align-items-center p-3">
                        <i class="fa fa-times" style="color: white;font-size: 20px;"></i>
                    </div>
                </div>
                <!-- {{ reserva }} -->
                <form @click="onOpenaLL" action="#">

                    <div v-if="statusOpen" class="col-12 d-flex mb-4" :class="paso > 1 ? 'justify-content-between':'justify-content-end'">
                        <button type="button" v-if="paso > 1" @click="siguiente(paso-1)" class="theme-btn w-auto py-2">Volver</button>
                        <button type="button" @click="siguiente(paso+1)" class="theme-btn w-auto py-2">Siguiente</button>
                    </div>
                    <Transition>
                        <div class="row"  v-if="paso == 1">
                            <ReservaPasosOficina 
                                :status_open="statusOpen" 
                                :oficinas="oficinas.data" 
                                :type="'recogida'"
                                :textos="{
                                    number: '1.',
                                    text: 'Selecciona la oficina y fecha donde deseas recoger tu coche.'
                                }"
                                class="col-paso mb-4" 
                                :class="statusOpen ? 'col-12 col-md-6 offset-3':'col-12 col-md-6'"
                                v-model:oficina_id="reserva.recogida.oficina_id"
                                v-model:date="reserva.recogida.fecha.date"
                                v-model:time="reserva.recogida.fecha.time"
                            />

                            <div v-if="statusOpen" class="col-12 col-sm-6 offset-sm-3 mb-4 mt-3" style="background: #ffffff;opacity:.2; height: 1px;"></div>

                            <ReservaPasosOficina 
                                :status_open="statusOpen" 
                                :oficinas="oficinas.data" 
                                :type="'devolución'"
                                :textos="{
                                    number: '2.',
                                    text: 'Selecciona la oficina y fecha donde deseas devolver el coche.'
                                }"
                                class="col-paso mb-4" 
                                :class="statusOpen ? 'col-12 col-md-6 offset-3':'col-12 col-md-6'"
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
                                v-if="reserva.coche.coche_id"
                                :plan_id="reserva.coche.plan_id"
                                :coche="coches.data.find( e => e.id == reserva.coche.coche_id)"
                            />

                            
                        </div>
                  
                    
                    
                </form>
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


    watch(reserva.recogida,(to)=>{
        const response = getFlota()
    })
    watch(reserva.devolucion,(to)=>{
        const response = getFlota()
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


</script>

<style scoped lang="scss">
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
        z-index: 999999999;
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