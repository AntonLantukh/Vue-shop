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
          <div class="wrapper__button">
            <b-button v-if="!disableButton" variant="success" @click="addProduct">Add to cart</b-button>
            <pulse-loader v-else ></pulse-loader>
          </div>
          <input type="number" v-model="count">
          <b-button-group size="sm">
            <b-button @click="onInputMinusHandler">-</b-button>
            <b-button @click="onInputPlusHandler" variant="primary">+</b-button>
          </b-button-group>
        </div>
    </b-card>
  </div>
</template>

<script>
  import bCard from 'bootstrap-vue/es/components/card/card';
  import bButton from 'bootstrap-vue/es/components/button/button';
  import bButtonGroup from 'bootstrap-vue/es/components/button-group/button-group';
  import pulseLoader from 'vue-spinner/src/PulseLoader.vue'
  import { mapActions } from 'vuex'
  import { mapState } from 'vuex';

  export default {
    name: "Product",

    components: {
      bCard,
      bButton,
      bButtonGroup,
      pulseLoader
    },

    props: ['card'],

    data() {
      return {
        count: 1
      }
    },

    computed: {
      ...mapState([
        'isFetching'
      ]),

      disableButton() {
        return this.isFetching.status && this.isFetching.id === this.card['id_num']
      }
    },

    methods: {
      ...mapActions([
        'addToCart'
      ]),

      onInputPlusHandler() {
        this.count++;
      },

      onInputMinusHandler() {
        if (this.count === 1) {
          return;
        }
        this.count--
      },

      addProduct() {
        this.addToCart({id: this.card['id_num'], count: this.count})
      }
    }
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

  .wrapper__button {
    width: 100px;
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
