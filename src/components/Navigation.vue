<template>
  <div class="container">
    <div class="row">
      <b-nav fill pills>
        <b-nav-item active>Главная</b-nav-item>
        <b-nav-item>Продукты</b-nav-item>
        <b-nav-item>Корзина</b-nav-item>
        <b-nav-item>Контакты</b-nav-item>
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
