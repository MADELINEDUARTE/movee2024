<template>
    <a @click.prevent="cambioMode" href="#" button id="bdark" class="fa-regular fa-eclipse"></a>
</template>
<script setup>
    
    onMounted(()=>{
        load()
    })
const cambioMode=()=>{
    const bdark = document.querySelector('#bdark');
    const body = document.querySelector('body');
    body.classList.toggle('darkmode');
       store(body.classList.contains('darkmode')); 
}
const load=()=>{
        const darkmode = localStorage.getItem('darkmode');
        const bdark = document.querySelector('#bdark');
        const body = document.querySelector('body');
        if(!darkmode){
            store('false');
    }else if(darkmode == 'true'){
        body.classList.add('darkmode');
        }
    }
    const store=(value)=>{
        localStorage.setItem('darkmode', value);
    }
</script>


