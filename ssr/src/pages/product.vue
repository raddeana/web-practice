<template>
  <div class="">
    <h4>XXXXXXXXXXXX</h4>
    <div class="product">
        <p>{{ item.title }}</p>
        <p>{{ item.desc }}</p>
        <p>{{ item.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  asyncData ({ store, route }) {
    // 触发 action 后，会返回 Promise
    return store.dispatch('fetchItem', route.params.id)
  },
  computed: {
    // 从 store 的 state 对象中的获取 item。
    item () {
      return this.$store.state.items[this.$route.params.id]
    }
  }
}
</script>