<template>
    
    
    <div  :class="cocheSeleccionado ? 'col-sm-4' : 'col-12'">
        <p style="font-size: 12px" v-if="props.status_open" ><span style="font-size: 18px; font-weight: 900; color: #E94B28">{{ textos.number }}</span> {{ textos.text }}</p>
        <div class="form-group">
            <label></label>

            <input type="text" :readonly="cocheSeleccionado ? true: false" v-model="filters" class="form-control" :placeholder="$t('modelo_marca')">

            <i class="far fa-car"></i>
        </div>
            
        <div class="col-12 coches pt-4" >
            <!-- <p>{{ cocheSeleccionado }}</p> -->
            <!-- <p>Cargando...</p> -->
            <div class="row" v-show="!cocheSeleccionado">
                <div 
                    v-for="(coche, key) in filteredData" 
                    :key="`coche-${key}`" 
                    class="col-12 col-sm-4"
                >
                    <BoxCoche :coche="coche" @selectCoche="selectCoche" v-model:plan_id="plan_id" />
                </div> 
            </div>
           
            <div class="col-12" v-show="cocheSeleccionado">
                
                <BoxCoche :coche="cocheSeleccionado" @selectCoche="selectCoche"  v-model:plan_id="plan_id" />
                <div @click="reset" class="w-100 d-flex justify-content-end" style="cursor: pointer;">
                    <i class="fa fa-rotate mx-2" style="color: white"></i>
                    <p class="m-0">{{$t('cambio_coche')}}</p>
                </div>
            </div>
        </div>
    </div>
    
    
</template>

<script setup lang="ts">
    import type { Coche } from '~/composables/useCoche'

    const cocheSeleccionado = ref<Coche>()
    const plan_id = defineModel<Number>('plan_id',{ default: 0 })
    const coche_id = defineModel('coche_id')

    onMounted(()=>{
        reset()
    })

    const props = defineProps({
        status_open: Boolean,
        coches: Array<Coche>,
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

    const filters = ref('')

    const filteredData = computed(() => {
        if (!filters.value) {
            return props.coches
        } else {
            return props.coches?.filter((item) => {
                return (
                    item.marca.match(new RegExp(filters.value, 'i')) ||
                    item.modelo.match(new RegExp(filters.value, 'i'))
                )
            })
        }
    })

    const selectCoche = ({ coche, plan }: { coche: Coche, plan: number } ) => {
       
        cocheSeleccionado.value = coche
        coche_id.value = coche.id
        filters.value = coche.marca + ' '+ coche.modelo
    }

    const reset = () => {
        filters.value = ''
        plan_id.value = 0
        coche_id.value = ''
        cocheSeleccionado.value = undefined
    }

</script>