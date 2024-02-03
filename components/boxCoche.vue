<template>
    <div class="car-item w-100 m-0">
        <div class="car-content" v-if="coche">
            <div class="car-top">
                <h4><a class="letrac" href="#">{{ coche.marca }} <br>
                <h6 class="modelo">{{ coche.modelo }}</h6></a></h4>
                <br>
        
                <!--<span><i class="fas fa-star"></i> 5.0</span>-->
            </div>
        <div class="car-img">
            <img src="/assets/img/car/01.png" alt="">
        </div>

            <ul class="car-list" v-if="coche.config">
                <!-- <li><img src="/assets/img/car/euro.png" class="far fa-car">100/D.&nbsp;&nbsp;</li> -->
                <li v-if="coche.config.pasajeros"><img src="/assets/img/car/pasajeros.png"  class="far fa-user-tie">{{ coche.config.pasajeros }} {{$t('perso')}}&nbsp;</li>
                <li v-if="coche.config.puertas"><img src="/assets/img/car/puerta.png" class="far fa-gas-pump">&nbsp;&nbsp;&nbsp;{{ coche.config.puertas }} {{$t('puerta')}}&nbsp;&nbsp;</li>
            <!-- <li><i class="far fa-road"></i>10.15km / 1-litre</li>
                <li><i class="far fa-steering-wheel"></i>Automatic</li>-->
            </ul>
            <div class="car-footer row justify-content-center" v-if="coche.config">
                <!--<span class="car-price">$390 <sub>/ month</sub></span>
                <a href="#" class="car-favorite-btn"><i class="far fa-heart"></i></a>-->
                <button type="button" :style="{ width: plan_id == 1 ? '70%':'' }"   @click="selectCoche(1)" :class="plan_id == 1 ? 'col-auto' : 'col' " class="theme-btn1 py-2"><strong>{{ plan_id == 0 || plan_id == 1 ? 'Basic':'' }} {{ coche.config.basico }}{{$t('moneda')}}</strong></button>
                <button type="button" :style="{ width: plan_id == 2 ? '70%':'' }"   @click="selectCoche(2)" :class="plan_id == 2 ? 'col-auto' : 'col' " class="theme-btn2 py-2"><strong>{{ plan_id == 0 || plan_id == 2 ? 'Medium':'' }} {{ coche.config.medio }}{{$t('moneda')}}</strong></button>
                <button type="button" :style="{ width: plan_id == 3 ? '70%':'' }"   @click="selectCoche(3)" :class="plan_id == 3 ? 'col-auto' : 'col' " class="theme-btn3 py-2"><strong>{{ plan_id == 0 || plan_id == 3 ? 'Premium':'' }} {{ coche.config.premium }}{{$t('moneda')}}</strong></button>
            </div>
            
        </div>
    </div>
</template>

<script setup lang="ts">
    import type { Coche } from '~/composables/useCoche'

    const props = defineProps({
        coche: Object as () => Coche,
        plan_id: {
            type: Number,
            default: 0
        }
    })

    const emit = defineEmits(['selectCoche'])

    const coche = computed(() => props.coche);

    const plan_id = ref(props.plan_id)

    const selectCoche = (plan: number) => {
        plan_id.value = plan
        emit( 'selectCoche' , { coche: coche.value , plan: plan_id } )
    };


    const { planes } = usePlan()

    const planSeleccionado = computed(()=>{
        return planes.data.find((e)=> e.id == plan_id.value)
    })

    const precio = computed(()=>{

        const clave = planSeleccionado.value?.key || ''
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

                break;
        }

        return precio
    })

</script>