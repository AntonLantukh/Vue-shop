<template>
  <div class="container">
    <div class="row">
      <product v-for="item in products" :card="item" :key="item['id_num']"></product>
    </div>
  </div>
</template>

<script>
  import product from '../Product/';
  export default {
    name: "Product",

    components: {
      product
    },

    data() {
      return {
        products: [
          {
            id_num: 10,
            name: 'iPhone SE',
            description: 'Apple iPhone SE smartphone with 4.00-inch 640x1136 display ' +
              'alongside 2GB of RAM and 12-megapixel rear camera.',
            price: 250,
            src: './src/assets/iphone_se.jpeg'
          },
          {
            id_num: 11,
            name: 'iPhone 7',
            description: 'Apple iPhone 7 smartphone with 4.70-inch ' +
              '750x1334 display powered by 2.34GHz quad-core processor ' +
              'alongside 2GB of RAM',
            price: 400,
            src: './src/assets/iphone_7.jpeg'
          },
          {
            id_num: 12,
            name: 'iPhone 8',
            description: 'The iPhone 8 and 8 Plus feature glass bodies that ' +
              'enable wireless charging, faster A11 processors, upgraded cameras, ' +
              'and True Tone',
            price: 750,
            src: './src/assets/iphone_8.jpeg'
          },
          {
            id_num: 13,
            name: 'iPhone X',
            description: 'The iPhone X is Apples new flagship 10th anniversary `' +
              'iPhone featuring a 5.8-inch OLED display, facial recognition ' +
              'and 3D cam ',
            price: 1000,
            src: './src/assets/iphone_x.jpeg'
          },
          {
            id_num: 14,
            name: 'iPhone XS',
            description: 'The iPhone XS is an upgraded version of the 2017 iPhone X, ' +
              'keeping the same design, 5.8" OLED display and dimensions,',
            price: 1200,
            src: './src/assets/iphone_xs.jpeg'
          },
          {
            id_num: 15,
            name: 'iPhone XR',
            description: 'Apple iPhone XR smartphone with 6.10-inch 828x1792 ' +
              'display powered by hexa-core processor and 12-megapixel rear camera. ',
            price: 1500,
            src: './src/assets/iphone_xr.jpeg'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
