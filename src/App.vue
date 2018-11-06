<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <main-header></main-header>
        <main-body></main-body>
        <main-footer></main-footer>
      </div>
    </div>
  </div>
</template>

<script>
  import mainHeader from './components/Main-header';
  import mainFooter from './components/Main-footer';
  import mainBody from './components/Main-body';

  export default {
  name: 'app',
  components: {
    mainHeader,
    mainFooter,
    mainBody
  }
}
</script>

<style>

</style>
