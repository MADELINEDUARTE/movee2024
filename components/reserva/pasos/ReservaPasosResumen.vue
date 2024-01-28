<template>
    <div class="car-item-single">
        <p style="font-size: 12px" ><span style="font-size: 18px; font-weight: 900; color: #E94B28">{{ textos.number }}</span> {{ textos.text }}</p>
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
</template>

<script setup lang="ts">

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