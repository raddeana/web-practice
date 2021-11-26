<template>
<button class="btn btn1">{{ q.title || '111111111' }}</button>
</template>
<style lang="scss" scoped>
button.btn.btn1 {
  font-size: 36px;
}
</style>
<script>
export default {
  name: 'subitem',
  props: {
    q: Object
  }
}
</script>
