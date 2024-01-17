<template>
    <div class="dropdown">
                                <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fa-regular fa-language"></i>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><a @click="cambioIdioma('es')"  class="dropdown-item" href="#"><i class="fas fa-caret-right"></i> Español</a></li>
                                    <li><a @click="cambioIdioma('en')" class="dropdown-item" href="#"><i class="fas fa-caret-right"></i>Inglés</a></li>
                                    <li><a @click="cambioIdioma('ca')" class="dropdown-item" href="#"><i class="fas fa-caret-right"></i> Catalán</a></li>
                                    <li><a @click="cambioIdioma('al')" class="dropdown-item" href="#"><i class="fas fa-caret-right"></i>Alemán</a></li>
                                </ul>
                            </div>
</template>
<script setup>
const { locale } = useI18n()
const cambioIdioma= (idioma)=>{
    locale=idioma
}
</script>
