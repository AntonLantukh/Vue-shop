<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <main-header></main-header>
        <main-footer></main-footer>
      </div>
    </div>
  </div>
</template>

<script>
  import mainHeader from './components/Main-header';
  import mainFooter from './components/Main-footer';

  export default {
  name: 'app',
  components: {
    mainHeader,
    mainFooter
  }
}
</script>

<style>

</style>
