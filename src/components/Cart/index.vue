<template>
  <div class="container">
    <div class="row">
      <b-form class="cart__wrapper" @submit="" @reset="" v-if="">
        <field v-for="(item, i) in fields"
               :name="item.name"
               :description="item.description"
               :placeholder="item.placeholder"
               :pattern="item.pattern"
               :value="item.value"
               :key="i"
               @valid-change="onValidHandler($event, i)"
               @value-change="onValueHandler($event, i)"
        >
        </field>
        <b-button variant="success" @click="" :disabled="true">Proceed to checkout</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
  import bForm from 'bootstrap-vue/es/components/form/form';
  import bButton from 'bootstrap-vue/es/components/button/button';
  import field from '../Field';

  export default {
    name: "cart",
    components: {
      bForm,
      bButton,
      field
    },
    data() {
      return {
        fields:
        [
          {
            name: 'Name',
            placeholder: 'Enter your name',
            description: 'It should contain name and surname',
            value: '',
            valid: '',
            pattern: /^[a-zA-Z ]{2,30}$/,
          },
          {
            name: 'Phone',
            placeholder: 'Enter phone',
            description: 'It should be a valid phone number',
            value: '',
            valid: '',
            pattern: /^[0-9]{7,14}$/,
          },
          {
            name: 'Email',
            placeholder: 'Enter email',
            description: 'It should be a valid email',
            value: '',
            valid: '',
            pattern: /.+/,
          },
          {
            name: 'Address',
            placeholder: 'Enter address',
            description: 'It should contain city, street and apt. number',
            value: '',
            valid: '',
            pattern: /.+/,
          },
        ]
      }
    },
    methods: {
      onValueHandler(event, i) {
        this.fields[i].value = event.value;
      },
      onValidHandler(event, i) {
        this.fields[i].valid = event.valid;
      }
    }
  }
</script>

<style scoped>
  .cart__wrapper {
    width: 600px;
    margin: 0 auto;
  }
</style>
