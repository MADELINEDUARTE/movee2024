<template>
    
    
    <div  :class="cocheSeleccionado ? 'col-sm-4' : 'col-12'">
        <p style="font-size: 12px" v-if="props.status_open" ><span style="font-size: 18px; font-weight: 900; color: #E94B28">{{ textos.number }}</span> {{ textos.text }}</p>
        <div class="form-group">
            <label></label>
            <input type="text" v-model="filters" class="form-control" placeholder="Buscar modelo o marca">
            <i class="far fa-car"></i>
        </div>
            
        <div class="col-12 coches pt-4" >
            <!-- <p>{{ cocheSeleccionado }}</p> -->
            <!-- <p>Cargando...</p> -->
            <div class="row" v-if="!cocheSeleccionado">
                <div 
                    v-for="(coche, key) in filteredData" 
                    :key="`coche-${key}`" 
                    class="col-12 col-sm-4"
                >
                    <BoxCoche :coche="coche" @selectCoche="selectCoche" />
                </div> 
            </div>
            
            <div class="col-12" v-if="cocheSeleccionado">
                <BoxCoche :coche="cocheSeleccionado" @selectCoche="selectCoche" :plan_id="plan_id" />
                <div @click="reset" class="w-100 d-flex justify-content-end" style="cursor: pointer;">
                    <i class="fa fa-rotate mx-2" style="color: white"></i>
                    <p class="m-0">Cambiar de coche</p>
                </div>
            </div>
        </div>
    </div>
    
    
</template>

<script setup lang="ts">
    import type { Coche } from '~/composables/useCoche'

    const props = defineProps({
        status_open: Boolean,
        coches: Array,
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

    const cocheSeleccionado = ref<Coche>()
    const plan_id = defineModel('plan_id')
    const coche_id = defineModel('coche_id')


    const filters = ref('')

    const filteredData = computed(() => {
        if (!filters.value) {
            return props.coches
        } else {
            console.log('props.coches',props.coches)
            return props.coches.filter((item) => {
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
        plan_id.value = plan
        filters.value = coche.marca + ' '+ coche.modelo
    }

    const reset = () => {
        filters.value = ''
        plan_id.value = ''
        coche_id.value = ''
        cocheSeleccionado.value = undefined
    }

</script>