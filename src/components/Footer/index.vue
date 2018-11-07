<template>
  <div class="wrapper">
    <div class="container">
      <div class="row">
        <div class="col-4">&#169;	2018 - 2019</div>
        <div class="col-4">
          <b-button variant="secondary">Vkontakte</b-button>
          <b-button variant="warning">Instagram</b-button>
          <b-button variant="primary">Facebook</b-button>
        </div>
        <div class="col-4">All Rights Reserved. May not be copied, scanned, or duplicated, in whole orinpart.</div>
      </div>
    </div>
  </div>
</template>

<script>
  import bButton from 'bootstrap-vue/es/components/button/button';
    export default {
        components: {
          bButton
        },
        name: "Footer"
    }
</script>

<style scoped>
  .wrapper {
    width: 100%;
    margin-top: 10px;
    background-color: aliceblue;
  }

  .container {
    margin: 0 auto 0 auto;
    padding: 15px;
    vertical-align: center;
  }

</style>
