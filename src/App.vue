<template>
  <div id="app">
    <main-header></main-header>
    <main-body></main-body>
    <main-footer></main-footer>
  </div>
</template>

<script>
  import mainHeader from './components/Header';
  import mainFooter from './components/Footer';
  import mainBody from './components/Body';

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
