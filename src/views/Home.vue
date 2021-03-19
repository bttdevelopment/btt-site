<template>
  <section class="section is-widescreen mt-4 has-text-left">
    <!-- <div class="container is-widescreen btt-margin has-text-left"> -->
    <div class="container is-max-widescreen mt-5">
      <h2 class="title has-text-bttgreen" style="margin-bottom:2em;">
        Brain Tunnelgenix Technologies, Corp.
      </h2>
    </div>
    <div class="container mb-6 is-max-widescreen">
      <div class="container parallax-bg">
        <div class="column parallax-bg-item"></div>
      </div>
      <div class="container is-max-widescreen">
        <div class="columns is-vcentered mt-6 has-text-justified">
          <div
            class="column is-6 extra-padding btt-lightblue-bg" style="margin-top: 130px;"
          >
            <h4 class="title is-4">Who we are</h4>
            <p>
              I’m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
            </p>
          </div>
          <div
            class="column is-6 extra-padding btt-lightblue-bg" style="margin-top: 130px;"
          >
            <h4 class="title is-4">What we do</h4>
            <p>
              I’m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
            </p>
          </div>
        </div>
        <div class="columns is-vcentered has-text-justified">
          <div
            class="column is-6 extra-padding btt-lightblue-bg"
          >
            <h4 class="title is-4">BTT wellness</h4>
            <p>
              I’m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
            </p>
          </div>
          <div
            class="column is-6 extra-padding btt-lightblue-bg"
          >
            <h4 class="title is-4">BTT Medical</h4>
            <p>
              I’m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
            </p>
          </div>
        </div>
        <div class="columns is-vcentered has-text-justified">
          <div
            class="column is-6 extra-padding btt-lightblue-bg"
          >
            <h4 class="title is-4">What we offer</h4>
            <p>
              I’m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
            </p>
          </div>
          <div
            class="column is-6 extra-padding btt-lightblue-bg"
          >
            <h4 class="title is-4">Brain Thermal Tunnel</h4>
            <p>
              I’m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
            </p>
          </div>
        </div>
      <!-- </div> -->
      <!-- <div class="block"></div> -->
    </div>
    </div>
  </section>
  <section id="parallax" class="section has-text-left">
    <div class="container is-max-widescreen mt-5">
      <h2 class="title has-text-bttgreen">
        What We Offer
      </h2>
    </div>
    <div
      class="container is-max-widescreen"
    >
      <div class="columns is-vcentered">
        <div class="column mt-6 has-text-right">
          <h1 class="subtitle">
            Our Products
          </h1>
          <p>
            I’m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
          </p>
        </div>
        <div class="column">
          <figure class="image has-text-centered" style="max-height:350px;">
            <img src="../assets/woman.jpg">
          </figure>
        </div>
        <div class="column mt-6 has-text-left">
          <h1 class="subtitle">
            Our Products
          </h1>
          <p>
            I’m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
          </p>
        </div>
      </div>
    </div>
    <div class="container is-italic is-max-desktop mt-6">
      <p class=" has-text-weight-bold" style="font-size:500%; height:80px;">
        "
      </p>
      <p class="has-text-centered is-size-3">
        To keep the body in good health is a duty, otherwise we shall not be able to
        keep our mind strong and clear
      </p>
      <p class=" has-text-weight-bold has-text-right is-offset-11" style="font-size:500%;  height:80px; position:relative; top: -25px;">
        "
      </p>
      <p class="has-text-centered is-size-4 has-text-weight-semibold">
        Buddha
      </p>
    </div>
  </section>
  <section class="section is-max-desktop mb-6  has-text-left">
    <div class="container notification btt-lightblue-bg is-max-desktop" style="height:500px">
    </div>
  </section>
</template>
<script>
export default {
  name: "Home"
};
</script>
<style scoped>
  .btt-hippocampus-img{
    background-image: url("../assets/green_hippocampus.png");
    background-position: 10% 100%;
    background-attachment: fixed;
    background-size: auto;
    background-repeat: no-repeat;
    min-height: 400px;
  }
  .text-indented {
    text-indent: 2em;
}
.parallax-bg{
  position: absolute;
  width: 100%;

}
#parallax {
  padding:1.25rem;
}
.parallax-bg-item {
  height: 100vh;
  width: 90%;
  margin-left: 15%;
  background-image: url("../assets/thermometer_bg.jpg");
  background-attachment: fixed;
  background-size: contain;
  /* background-repeat: no-repeat; */
  min-height: 500px;
  max-height: 700px;
}

@media (max-width: 1000px) {

      .parallax-bg {
            display:none;
       }

}
</style>
