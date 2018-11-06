<template>
  <div id="app">
    <main-header></main-header>
    <main-body></main-body>
    <main-footer></main-footer>
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
