<template>
  <div class="container">
    <div class="row">
      <b-jumbotron class="contacts__wrapper" bg-variant="primary" text-variant="white"  header="Vue Phone" lead="Only best iPhones" >
        <p>Our phone: +0 777 77 77 77</p>
        <p>Our e-mail: vuephone@vuephone.com</p>
        <hr>
        <span>Contact us any time!</span>
      </b-jumbotron>
    </div>
  </div>
</template>

<script>
  import bJumbotron from 'bootstrap-vue/es/components/jumbotron/jumbotron';
  export default {
    name: "Contacts",
    components: {
      bJumbotron
    }
  }
</script>

<style scoped>
  .contacts__wrapper {
    margin: 0 auto;
  }
</style>
