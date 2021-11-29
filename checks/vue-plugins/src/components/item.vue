<template>
  <div class="item">
    <label>{{ sdc.title }}</label>
    <p>{{ sdc.content }}</p>
    <button class="btn" @click="handleClick">XXX</button>
    <subitem :sdc="sdc" />
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
    sdcstr: {
      type: String,
      default: ''
    }
  },
  computed: {
    sdc: function () {
      if (this.sdcstr) {
        return JSON.parse(this.sdcstr);
      } else {
        return {};
      }
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
