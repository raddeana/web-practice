<template>
  <div class="item">
    <label>{{ item.title }}</label>
    <p>{{ item.msg }}</p>
  </div>
</template>
<style scoped>
.item {
  border: 1px solid #333;
  cursor: pointer;
}
</style>
<script>
export default {
  name: 'item',
  props: {
    item: Object
  }
}
</script>
