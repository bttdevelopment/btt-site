<template>
        <div class="modal" :class="{ 'is-active': hyperIsActive}">
  <div class="modal-background" @click=" hyperIsActive = !hyperIsActive "></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">What Is Hyperthermia?</p>
      <button class="delete" @click=" hyperIsActive = !hyperIsActive " aria-label="close"></button>
    </header>
    <div class="modal-card-body">
      <HyperThermia />
    </div>
  </div>
</div>

    <section class="section is-max-desktop  has-text-left mt-6 ">
      <div class="container" style="max-width: 600px; margin-bottom: 80px;">
        <div class="content">
        <h1 class="title is-4 has-text-bttgreen">Brain Guided Heat Shock Protein Induction Treatment</h1>
        <p>The BTT™ Biomedical and Research Institute was created to harness the brain’s innate abilities, eliminating the need to penetrate the blood-brain barrier.  </p>
        <p>The human brain contains approximately 400 miles of blood vessels. These blood vessels are lined by closely linked endothelial cells to form the blood-brain barrier (BBB). The blood-brain barrier protects the brain from toxins by tightly regulating the transfer of proteins, nutrients, and waste products.</p>
        <p>Delivering therapeutics across the BBB has been a major obstacle to successful drug development in neurodegeneration and is crucial to providing effective treatment. </p>
        <p class="is-underlined">Working with the Brain, Not Against it.</p>
        <p>Through the Brain Thermal Tunnel we will be using those 400 miles of blood vessels to treat neurodegenerative diseases without impacting the natural barriers created to protect the brain. </p>
        <p class="is-size-5 my-6 has-text-centered is-italic ">We are providing treatment of the Future…Our treatment is noninvasive, no anesthesia and has no side effects.</p>
        <p class="has-text-centered"><span class="icon mt-4"><i class="fas fa-brain"></i></span> <span class="icon mt-4"><i class="fas fa-brain"></i></span> <span class="icon mt-4"><i class="fas fa-brain"></i></span></p>
        </div>
      </div>
    <div class="mt-6 container notification btt-lightblue-bg is-max-desktop">
      <div class="columns is-vcentered">
        <div class="column is-half" >
        <h1 class="title is-4 has-text-bttgreen">Hyperthermia Machine</h1>
        <p class="is-size-6 mb-5 has-text-grey-dark is-size-7">
            Using BTT™ Corp’s. innovative technology, the BTT™ Medical Institute
            successfully treats previously considered incurable
            neurodegenerative diseases with the objective of inducing heat shock
            protein production through brain guided hyperthermia.
          </p>
          <button class="button is-outlined is-bttgreen is-size-7" @click="hyperIsActive = !hyperIsActive">
            <span>Learn More  </span>
          <span class="icon"><i class="fas fa-arrow-alt-circle-right"></i></span>
        </button>
        </div>
        <div class="column is-half" style="max-height: 300px;">
          <figure class="image hyperthermia-img-figure">
            <img src="../assets/hyperthermia.png" >
          </figure>
        </div>
      </div>
    </div>
    <div class="container notification btt-lightblue-bg is-max-desktop" style="margin-bottom:70px;margin-top:100px;">
      <div class="columns is-vcentered">
        <div class="column is-half" >
        <h1 class="title is-4 has-text-bttgreen ">Hypothermia Machine</h1>
        <p class="is-size-6 mb-5 has-text-grey-dark is-size-7">
          BTT™ Corp. also treats patients through cooling, or hypothermia. One
          of the main applications of cooling is to treat Multiple Sclerosis
          (MS). Patients who have MS have damage to the sleeves of fatty tissue
          that protect nerve cells in their brain, called myelin sheaths.
          Cooling is believed to help restore the myelin sheath. Cooling the
          brain is also used to improve sleep, reduce anxiety, and depression.
        </p>
        <button class="button is-outlined is-bttgreen is-size-7">
          <span>Learn More  </span><span class="icon"><i class="fas fa-arrow-alt-circle-right"></i></span>
        </button>
        </div>
        <div class="column is-half" style="max-height: 300px;">
          <figure class="image hypothermia-img-figure">
            <img src="../assets/hypothermia.png" >
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import HyperThermia from "../components/HyperThermia.vue";
export default {
  name: "TheTreatments",
  components: {
      HyperThermia
  },
  data() {
    return {
      hyperIsActive: false,
      hypoIsActive: false
    }
  }
}
</script>

<style scoped>
.hypothermia-img-figure {
  min-width: 100px;
  max-width: 400px;
  left: 0;
  top: -100px;  
}
.hypothermia-img-figure {
  min-width: 100px;
  max-width: 400px;
}
</style>