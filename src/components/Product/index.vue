<template>
  <div>
    <b-card :title="card.name"
            :img-src="card.src"
            img-alt="card.name"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="product__card">
        <span class="product__price">{{card.price}} USD</span>
        <p class="card-text">
          {{card.description}}
        </p>
        <div class="wrapper">
          <b-button href="#" variant="success">Add to cart</b-button>
          <input type="number" value="1">
          <b-button-group size="sm">
            <b-button>-</b-button>
            <b-button variant="primary">+</b-button>
          </b-button-group>
        </div>
    </b-card>
  </div>
</template>

<script>
  import bCard from 'bootstrap-vue/es/components/card/card';
  import bButton from 'bootstrap-vue/es/components/button/button';
  import bButtonGroup from 'bootstrap-vue/es/components/button-group/button-group';

  export default {
      name: "Product",

      components: {
        bCard,
        bButton,
        bButtonGroup
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

  .product__price {
    margin-left: 80px;
  }

  .card-title {
    display: inline-block;
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
  }

  input {
    width: 40px;
    padding: 5px;
  }

  img {
    height: 300px;
    width: 170px;
    margin: 0 auto;
    padding: 10px;
  }

</style>
