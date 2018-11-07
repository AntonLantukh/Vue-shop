<template>
  <div>
    <b-card :title="card.name"
            :img-src="card.src"
            img-alt="card.name"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="product__card">
      <p class="card-text">
        {{card.description}}
      </p>
      <b-button href="#" variant="success">Add to cart</b-button>
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

  .product__card:hover {
    box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.18);
    transition: box-shadow 0.5s;
  }

  .product__card:nth-child(3n) {
    margin-right: 0;
  }

  img {
    height: 300px;
    width: 170px;
    margin: 0 auto;
    padding: 10px;
  }

</style>
