<template>
  <div class="item">
    <label>{{ item.title }}</label>
    <p>{{ item.msg }}</p>
  </div>
</template>
<style lang="scss" scoped>
.item {
  height: 60px;
  width: 180px;
  border: 1px solid #333;
  cursor: pointer;

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
export default {
  name: 'item',
  props: {
    item: Object
  }
}
</script>
