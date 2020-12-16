<template>
  <section class="container is-widescreen mb-6 mt-6 has-text-left">
    <!-- <div class="container is-widescreen btt-margin has-text-left"> -->
      <div class="container is-fluid">
        <h2 class="title has-text-bttgreen">
          Brain Tunnelgenix Technologies, Corp.
        </h2>
        
        <div class=" text-indented block">
          We are a MedTech company with a large portfolio of intellectual property based on Dr. Marc Abreu’s game-changing biological discovery, the brain thermal tunnel. The brain thermal tunnel is a bidirectional, insulated, pathway between the surface of the body, at the superomedial orbit, and the hypothalamus, our bodies thermal regulator. This discovery enables us to measure brain temperature continuously and noninvasively.
 
Our discovery allows us for the first time in history to measure brain temperature, as opposed to body temperature, giving us unparalleled insight into the understanding of the brain and its functionality.  The brain, a thermodynamic engine, is one of the last frontiers of science and we are on the precipice of understanding it in new and exciting ways.

        </div>
        <!-- <div class="block"></div> -->
      </div>
    <!-- </div> -->
  </section>
  <section
    class="container is-widescreen mb-6 has-text-left notification"
  >
    <div class="container">
      <div class="columns is-vcentered has-text-justified">
        <div class="column">
          <p class="text-indented content is-size-6">
            We have been granted 49 U.S. patents and 12 pending, with over 50 patents issued in other countries.  BTT™ Corp.’s technologies include advanced infrared sensors, software, and artificial intelligence that uniquely capture brain thermodynamic signatures. Specifically, through the brain thermal tunnel, we have been able to identify the brain wave pattern of Sars-CoVid-2, its unique signature, allowing us to design software to detect this invisible virus before people become symptomatic.

BTT™ Corp. anticipates a future of unprecedented breakthrough innovations using the brain thermal tunnel and thermodynamics of the brain. 

If you are interested in learning more about the disorders, we diagnosis and treat, please see information at <router-link to="/medical-institute">BTT™ Biomedical and Research Institute</router-link>
          </p>
        </div>
        <div class="column btt-hippocampus-img">
        </div>
      </div>
    </div>
  </section>
  <section class="container is-widescreen mb-6  has-text-left">
    <!-- <div class="container is-widescreen btt-margin has-text-left"> -->
      <div class="container is-fluid mb-6">
        <h2 class="title has-text-bttgreen">
          BTT™ Products
        </h2>
        <h5 class="subtitle">
          BTT™ Intelligent Wearables
        </h5>
        
        <div class=" text-indented block">
          BTT™ Corp. is the owner of the FDA-Cleared technology, BTT ™Abreu 700 System, our core technology was developed to monitor brain temperature continuously and noninvasively for long periods of time.  This technology has been gracefully reimagined and designed for wearable devices to detect fluctuations in brain temperature.  At BTT™ Corp., our team, using AI, IoT, and infrared sensors has designed wearable, intelligent glasses able to monitor brain temperature and brain wave patterns over time.  This information is then sent through Bluetooth via our BTT™ Health App alerting the user to exposure with an infectious agent.

        </div>
        <div class=" text-indented block">
        Research published in December 2020 shows that our wearable devices are
        able to detect mRNA viruses through the <strong>brain thermal tunnel</strong> with 100%
        accuracy. The mRNA viruses include Covid-19 and influenza. We are
        confident these devices will evolve in our research laboratory to
        include multiple other virus detection.<br />
        </div>
        <div class="block text-indented">Our tracker has the distinct advantage of being able to detect exposure before symptoms arise, thus helping to contain contagion of this deadly virus.</div>
        
      </div>
      <div class="container is-fluid mb-6">
        <h5 class="subtitle">
          BTT™ Intelligent Glasses
        </h5>
        
        <div class=" text-indented block">
         BTT™ Intelligent Glasses are made of zylonite and cellulose acetate propionate, high performance, light weight plastics and are hypoallergenic. The lens is made of polycarbonate. There is a tiny thermal imaging sensor, at the BTT™ site, that reads brain temperature and captures brain wave patterns with thermal imaging.  

        </div>
        <div class=" text-indented block">
        Wearables are paired with our BTT™ Health App, continually monitoring and storing your brain temperature and wave pattern information in the Cloud, ready to detect COVID-19 or any other mRNA virus.    
        </div>
        <div class="block text-indented">Our tracker has the distinct advantage of being able to detect exposure before symptoms arise, thus helping to contain contagion of this deadly virus.</div>
      </div>
        <div class="container is-fluid mb-6">
        <h5 class="subtitle">
          BTT™ Intelligent Nose Clip
        </h5>
        
        <div class=" text-indented block">
Much like the BTT™ Intelligent glasses the BTT™ Intelligent Nose Clip rests at the BTT™ site to assess precise brain temperature. The BTT™ Clip comes with biodegradable adhesives to hold the clip in place. This adhesive is for one time use only.  These wearables are paired with our BTT™ Health App, continually monitoring and storing your brain temperature and wave pattern information in the Cloud.
        </div>
        <div class=" text-indented block">
        These sensors continuously read information (thermal signatures) from the brain, and our software is programmed to identify characteristic fluctuations in brain wave patterns related to COVID-19 (or any other mRNA virus). When this thermal signature is detected, the user wearing the device will be alerted via their cell phone so he or she can act immediately to self-isolate and seek treatment.
        </div>
        <div class="block text-indented">Our tracker has the distinct advantage of being able to detect exposure before symptoms arise, thus helping to contain contagion of this deadly virus.</div>
        
      </div>
    <!-- </div> -->
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
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 300px;
  }
  .text-indented {
    text-indent: 2em;
}
</style>
