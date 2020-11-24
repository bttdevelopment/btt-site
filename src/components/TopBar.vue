<template>
  <div
    id="topbar-bg"
    class="navbar is-hidden-touch btt-border-radius-s"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container is-fullhd">
      <div class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item">
            <p class="has-text-weight-light is-size-7 has-text-white">
              Yale Univesity School of Medicine
            </p>
          </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <button
              class="button is-rounded is-small is-primary is-inverted is-outlined"
            >
              English
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TopBar"
}
</script>
<style scoped>
#topbar-bg {
  background: rgb(0, 143, 137);
  background: linear-gradient(90deg, #008f89 0%, #00924d 100%);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
