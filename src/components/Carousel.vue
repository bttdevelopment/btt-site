<template>
    <div class="btt-carousel">
        <slot></slot>
        <button @click="next" class="carousel-next"> <span class="icon">
    <i class="fas fa-arrow-right"></i>
  </span> </button> 
        <button @click="prev" class="carousel-prev"> <span class="icon">
    <i class="fas fa-arrow-left"></i>
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
        background-image: url("../assets/treatment.jpg");
        background-attachment: fixed;
        background-size: auto;
        background-repeat: no-repeat;
        background-position: 40% 0;
    }
    .btt-carousel button {
        position: absolute;
        height: 40px;
        width:40px;
        top: calc(50% - 20px);
        background-color:#096047;
        border: none;
        color: #fff;
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