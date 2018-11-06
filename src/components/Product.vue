<template>
  <div>
    <b-card title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2">
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </p>
      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
  </div>
</template>

<script>
  import bCard from 'bootstrap-vue/es/components/card/card';
  import bButton from 'bootstrap-vue/es/components/button/button';

  export default {
      components: {
        bCard,
        bButton
      },
      name: "Product"
    }
</script>

<style scoped>

</style>
