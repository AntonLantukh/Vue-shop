<template>
  <div class="field__wrapper">
    <v-icon v-if="activated"
            :class="iconClass"
            class="field__icon"
            :key="iconName"
            :name="iconName"
    >
    </v-icon>
    <b-form-group :id="name"
                  :label="name"
                  label-for="exampleInput1"
                  :description="description">
      <b-form-input :id="name"
                    type="text"
                    :placeholder="placeholder"
                    @input="onChangeInput($event)"
      >
      </b-form-input>
    </b-form-group>
  </div>
</template>

<script>
  import bFormGroup from 'bootstrap-vue/es/components/form-group/form-group';
  import bFormInput from 'bootstrap-vue/es/components/form-input/form-input';
  import Icon from 'vue-awesome/components/Icon'
  import 'vue-awesome/icons/check-circle'
  import 'vue-awesome/icons/exclamation-circle'

  export default {
    name: "Field",
    components: {
      bFormGroup,
      bFormInput,
      'v-icon': Icon
    },
    props: ['name', 'description', 'placeholder', 'value', 'pattern'],
    data() {
      return{
        activated: false
      }
    },
    computed: {
      valid() {
        return this.pattern.test(this.value)
      },
      iconClass() {
        return this.valid ? 'text-success' : 'text-danger'
      },
      iconName() {
        return this.valid ? 'check-circle' : 'exclamation-circle';
      },
    },
    methods: {
      onChangeInput(evt) {
        this.activated = true;
        this.$emit('value-change', {
          value: evt
        })
      }
    },
    watch: {
      valid() {
        this.$emit('valid-change', {
          valid: this.valid
        })
      }
    },
    created() {
      if (this.value) {
        this.activated = true;
        this.$emit(`valid-change`, {
          valid: this.valid
        })
      }
    }
  }
</script>

<style scoped>
  .field__wrapper {
    position: relative;
  }

  .field__icon {
    position: absolute;
    right: 4%;
    bottom: 38%;
  }
</style>
