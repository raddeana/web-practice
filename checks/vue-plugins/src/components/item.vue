<template>
  <div class="item">
    <label>{{ title }}</label>
    <p>{{ msg }}</p>
    <button class="btn" @click="handleClick">XXX</button>
    <subitem :sdc="{ title, msg }" />
  </div>
</template>
<style scoped>
.btn {
  color: red;
  font-size: 18px;
}

label {
  margin: 5px 0 0 0;
  display: block;
}

p {
  margin: 10px 0 0 0;
} 
</style>
<script>
import subitem from './subitem';

export default {
  name: 'item',
  components: {
    subitem
  },
  props: {
    sdc: {
      type: Object,
      default: () => {}
    },
    title: {
      type: String,
      default: ''
    },
    msg: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick () {
      this.$emit('kkk', '金暴的崛起');    
    }
  },
  mounted () {
    window.$item = this;
  }
}
</script>
