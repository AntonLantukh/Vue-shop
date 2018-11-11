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
        <b-badge v-if="getProductIsInCart(card['id_num'])" class="product__badge" variant="info">
          In cart: {{getProductCountInCart(card['id_num'])}}
        </b-badge>
        <p class="card-text">
          {{card.description}}
        </p>
        <div class="wrapper">
          <div class="wrapper__button" v-if="!disableButton">
            <b-button variant="success" @click="addProduct">Add</b-button>
            <b-button v-if="getProductIsInCart(card['id_num'])" variant="warning" @click="removeProduct">Remove</b-button>
          </div>
          <pulse-loader v-else ></pulse-loader>
          <input type="number" v-model="count" @input="onInputHandler($event)"/>
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
  import bBadge from 'bootstrap-vue/es/components/badge/badge';
  import bButton from 'bootstrap-vue/es/components/button/button';
  import bButtonGroup from 'bootstrap-vue/es/components/button-group/button-group';
  import pulseLoader from 'vue-spinner/src/PulseLoader.vue'
  import { mapActions, mapState, mapGetters } from 'vuex'

  export default {
    name: "Product",

    components: {
      bCard,
      bBadge,
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

      ...mapGetters([
        'getProductIsInCart', 'getProductCountInCart'
      ]),

      disableButton() {
        return this.isFetching.status && this.isFetching.id === this.card['id_num']
      }
    },

    methods: {
      ...mapActions([
        'addToCart', 'removeFromCart'
      ]),

      onInputHandler(evt) {
        if (this.count < 0) {
          this.count = 0;
        }
      },

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
      },

      removeProduct() {
        this.removeFromCart({id: this.card['id_num']})
      }
    }
  }
</script>

<style scoped>
  .product__card {
    position: relative;
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
    display: inline-block;
    margin-bottom: 10px;
    margin-left: 70px;
  }

  .product__badge {
    font-size: 15px;
    position: absolute;
    bottom: 60px;
    right: 20px;
    padding: 5px 3px;
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .wrapper__button {
    display: flex;
    width: 100px;
  }

  .btn {
    margin-right: 2px;
  }

  h4 {
    display: inline-block;
  }

  input {
    width: 40px;
    padding: 4px 7px;
    margin-left: auto;
    margin-right: 5px;
  }

  img {
    height: 300px;
    width: 170px;
    margin: 0 auto;
    padding: 10px;
  }

</style>
