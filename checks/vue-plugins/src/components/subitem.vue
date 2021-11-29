<template>
  <button class="btn btn1">{{ sdc.title }}</button>
</template>
<style scoped>
button.btn.btn1 {
  font-size: 36px;
}
</style>
<script>
export default {
  name: 'subitem',
  props: {
    sdc: {
      type: Object,
      default: () => {}
    }
  },
  created () {
    window.$subitem = this;
  }
}
</script>
