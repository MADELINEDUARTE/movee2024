<template>
    <div class="find-car" :class="statusOpen ? 'fullscreen':''" @click="onOpen" id="iniciatureserva">
        <div class="container">
            <div class="find-car-form">
                <h4 class="find-car-title">Encuentra la Furgoneta perfecta</h4>
                <form action="#">
                    <div class="row">

                        <div class="col-paso" :class="statusOpen ? 'col-6':'col-4'">
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <label>Oficina de recogida</label>
                                        <input type="text" class="form-control" placeholder="Oficina">
                                        <i class="far fa-location-dot"></i>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label>Fecha de recogida</label>
                                        <input type="text" class="form-control date-picker" placeholder="MM/DD/AA">
                                        <i class="far fa-calendar-days"></i>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label>Hora de recogida</label>
                                        <input type="text" class="form-control time-picker" placeholder="00:00 AM">
                                        <i class="far fa-clock"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-paso" :class="statusOpen ? 'col-6':'col-4'" >
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <label>Oficina de devolución</label>
                                        <input type="text" class="form-control" placeholder="Oficina">
                                        <i class="far fa-location-dot"></i>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label>Fecha de devolución</label>
                                        <input type="text" class="form-control date-picker" placeholder="MM/DD/AA">
                                        <i class="far fa-calendar-days"></i>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label>Hora de devolución</label>
                                        <input type="text" class="form-control time-picker" placeholder="00:00 AM">
                                        <i class="far fa-clock"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-4 col-paso">
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <label>Elige un coche</label>
                                        <input type="text" class="form-control" placeholder="Furgoneta">
                                        <i class="far fa-car"></i>
                                    </div>
                                </div>
                                <div class="col-12">

                                    <div class="form-group">
                                        <label></label>
                                        <div class="">
                                            <a href="car-single.html" class="theme-btn" type="submit"><strong>Inicia tu reserva</strong> </a>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>

                        </div>
                        
                        
                        <!-- 
                        
                        
                        
                         -->
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>

const statusOpen = ref(false)

const pasos = ref(
    {
        recogida: {
            inputs: [
                {
                    name: 'oficina_recodiga',
                    type: 'select_list',
                    label: '',
                    model: '',
                    col: '4',
                    colOpen: '6',
                    icon: ''
                },
                {
                    name: 'fecha_recodiga',
                    type: 'date',
                    label: '',
                    model: '',
                    col: '4',
                    colOpen: '6',
                    icon: ''
                },
                {
                    name: 'hora_recodiga',
                    type: 'time',
                    label: '',
                    model: '',
                    col: '4',
                    colOpen: '6',
                    icon: ''
                },
            ]
        },
        devolucion: {
            inputs: [
                {
                    name: 'oficina_devolucion',
                    type: 'select_list',
                    label: '',
                    model: '',
                    col: '4',
                    colOpen: '6',
                    icon: ''
                },
                {
                    name: 'fecha_devolucion',
                    type: 'date',
                    label: '',
                    model: '',
                    col: '4',
                    colOpen: '6',
                    icon: ''
                },
                {
                    name: 'hora_devolucion',
                    type: 'time',
                    label: '',
                    model: '',
                    col: '4',
                    colOpen: '6',
                    icon: ''
                },
            ]
        },
        coche:{
            inputs: [{}]
        }
    }
    
)

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

console.log('ddd',)

</script>

<style scoped lang="scss">
.find-car {
    /* position: relative;
    margin-top: -70px;
    z-index: 1; */
    transition: all .2s ease; /* Agregar una transición para una animación suave */
}
.find-car.fullscreen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    z-index: 999999999;
    background:#1B1A1A;
}

.col-paso{
    &.disabled{
        opacity: .2;
    }
}
</style>