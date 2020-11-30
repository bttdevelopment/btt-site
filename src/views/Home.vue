<template>
<section>
    <div class="container">
        <div id="example-1">
  <button @click="show = !show">
    Toggle render
  </button>
  <transition name="slide-fade">
    <p v-if="show">hello</p>
  </transition>
</div>
    </div> 
</section>
</template>
<script>
    export default {
        name: "Home",
        data() {
            return {
                show: true
            }
        }
    }
</script>
<style>
    #example-1{
        height: 300px;
    }
    .slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter-from, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px) !important;
  opacity: 0 !important;
}
</style>