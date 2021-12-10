<template>
  <div class="test">
    <wc-item :sdcstr="sdcstr" @kkk="handleKKK" ref="kkk" />
    <spring />
    <button @click="handleCNN">XY</button>
  </div>
</template>
<style scoped lang="scss">
  button {
    color: green;
    font-size: 24px;
    line-height: 24px;
  }
</style>
<script>
import spring from './spring';

export default {
  name: 'App',
  components: {
    spring
  },
  data: function () {
    return {
      list: [],
      containers: []
    };
  },
  computed: {
    sdcstr () {
      return JSON.stringify(this.$store.state.sdc);
    }
  },
  methods: {
    initData () {
      const list = [];
      const containers = [];

      for (let i = 0; i < 15; i ++) {
        list.push({
          id: Math.random() * 100000,
          title: (Math.random() * 100).toFixed(2),
          msg: Math.random() * 10000,
        });

        containers.push({
          id: Math.random() * 100000,
          title: (Math.random() * 100).toFixed(2),
          msg: Math.random() * 10000,
        });
      }

      this.list = list;
      this.containers = containers;
    },

    handleMd () {
      console.log('container recive mousedown');
    },

    handlePd () {
      console.log('container recive pointerdown');
    },

    handleKKK (e) {
      alert(e.detail);
    },

    handleCNN () {

    }
  },
  created () {
    console.log(this.$refs.kkk);
    this.initData();
    window.$app = this;
  }
}
</script>
