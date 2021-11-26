<template>
  <div class="item">
    <label>{{ p.title }}</label>
    <p>{{ p.msg }}</p>
    <button class="btn" @click="handleClick">XXX</button>
    <subitem :q="p" />
  </div>
</template>
<style lang="scss" scoped>
.item {
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
}
</style>
<script>
import subitem from './subitem';
export default {
  name: 'item',
  props: {
    p: Object
  },
  components: {
    subitem
  },
  methods: {
    handleClick () {
      alert();
      this.$emit('kkk', '金暴的崛起');    
    }
  }
}
</script>
