<template>
  <div class="test">
    <my-item :p="sdcData" @kkk="handleKKK" ref="kkk" />
    <button @click="handleCNN">XY</button>
  </div>
</template>
<style lang="scss" scoped>
.container {
  height: 340px;
  width: 530px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  border: 1px solid #2c3e50;
}

.draggable-box {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #2c3e50;
}

.list-main {
  height: 100%;
  width: 100%;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  background-color: transparent;
}

.vdr{
  -ms-touch-action:none;
  touch-action:none;
}

button {
  color: red;
  line-height: 34px;
  font-size: 22px;
}
</style>
<script>
import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import item from './components/item.vue'
import './components/vue-draggable-resizable.css'


export default {
  name: 'App',
  components: {
    item
  },
  data: function () {
    return {
      list: [],
      containers: [],
      sdcData: {
        id: Math.random() * 100000,
        title: (Math.random() * 100).toFixed(2),
        msg: Math.random() * 10000
      },
      t: '11111',
      m: '22222'
    };
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

    handleKKK () {
      alert('kkkk');
    },

    handleCNN () {

    }
  },
  created () {
    this.initData();
    window.$app = this;
  }
}
</script>
