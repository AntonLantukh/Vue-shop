<template>
  <div class="container">
    <div class="row">
      <b-nav fill pills>
          <b-nav-item :to="{ name: 'main'}">Main</b-nav-item>
          <b-nav-item :to="{ name: 'products'}">Products</b-nav-item>
          <b-nav-item :to="{ name: 'cart'}">Cart</b-nav-item>
          <b-nav-item :to="{ name: 'contacts'}">Contacts</b-nav-item>
      </b-nav>
    </div>
  </div>
</template>

<script>
  import bNav from 'bootstrap-vue/es/components/nav/nav';
  import bNavItem from 'bootstrap-vue/es/components/nav/nav-item';

  export default {
    name: "Navigation",
    components: {
      bNav,
      bNavItem,
    }
  }
</script>

<style scoped>

</style>
