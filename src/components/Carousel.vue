<template>
    <div class="btt-carousel">
        <slot></slot>
        <button @click="next" class="button is-outlined carousel-next is-bttlightblue"> <span class="icon">
    <i class="fas fa-lg fa-chevron-right"></i>
  </span> </button> 
        <button @click="prev" class="button is-outlined  is-bttlightgreen carousel-prev"> <span class="icon">
    <i class="fas fa-lg fa-chevron-left"></i>
  </span></button>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        next() {
            this.$emit('next')
        },
        prev() {
            this.$emit('prev')
        }
    }
}
</script>
<style scoped>
    .btt-carousel {
        position: relative;
        height: 400px;
        overflow: hidden;
    }
    .btt-carousel button {
        position: absolute;
        height: 40px;
        width:40px;
        top: calc(50% - 20px);
    }

    button:focus, button:hover {
        outline: none;
        cursor: pointer;
    }

    .carousel-next {
        right: 1%;
    }
    
    .carousel-prev {
        left: 1%;
    }

</style>