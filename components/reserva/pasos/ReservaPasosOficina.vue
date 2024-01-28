<template>
    <div >
 

            <p style="font-size: 12px" v-if="props.status_open" ><span style="font-size: 18px; font-weight: 900; color: #E94B28">{{ textos.number }}</span> {{ textos.text }}</p>
     

        <div class="row">
            <div class="col-12">
                <div  class="form-group">
                    <div class="d-flex justify-content-between">
                        <label>Oficina de {{ type }}</label>
                        <a href="#" style="font-size: 12px" class="mt-1" v-if="oficina_id" >Ver en el Mapa <span class="fa fa-location-dot"></span> </a>
                    </div>
                    <select type="text" class="form-control" placeholder="Oficina" v-model="oficina_id">
                        <option value="0">Seleccione la oficina</option>
                        <option 
                            v-for="(oficina, key) in oficinas" 
                            :key="`oficina-${type}-${key}`"
                            :value="oficina.id" 
                        >{{ oficina.text }}</option>
                    </select>
                    <i class="far fa-location-dot"></i>
                </div>
            </div>
            <div class="col-6">
                <div class="form-group">
                    <label>Fecha de {{ type }}</label>
                    <input type="date" v-model="date" class="form-control date-picker px-3" placeholder="MM/DD/AA">
                    <!-- <i class="far fa-calendar-days"></i> -->
                </div>
            </div>
            <div class="col-6">
                <div class="form-group">
                    <label>Hora de {{ type }}</label>
                    <input type="time" v-model="time" class="form-control time-picker px-3" placeholder="00:00 AM">
                    <!-- <i class="far fa-clock"></i> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
  status_open: Boolean,
  oficinas: Array,
  type: String,
  textos:{
    type: Object,
    default(){
        return {
            number: '',
            text: ''
        }
    }
  }
})

const idOficina = ref(0)

const oficinaSeleccionada = computed( () => {
    return props.oficinas.find( (e) => e.id == idOficina.value )
})

const oficina_id = defineModel('oficina_id')
const date = defineModel('date')
const time = defineModel('time')

</script>