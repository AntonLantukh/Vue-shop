<template>
  <div>
    <b-card :title="card.name"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="product__card">
      <p class="card-text">
        {{card.description}}
      </p>
      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
  </div>
</template>

<script>
  import bCard from 'bootstrap-vue/es/components/card/card';
  import bButton from 'bootstrap-vue/es/components/button/button';

  export default {
      name: "Product",

      components: {
        bCard,
        bButton
      },

      props: ['card']

    }
</script>

<style scoped>
  .product__card {
    margin: 0 20px 20px 0;
  }

  .product__card:nth-child(3n) {
    margin-right: 0;
  }

</style>
