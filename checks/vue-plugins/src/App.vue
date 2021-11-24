<template>
  <draggable
    tag="div"
    class="draggable-box"
    v-bind="{
      group: 'form-draggable',
      ghostClass: 'moving',
      animation: 180
    }"
    v-model="containers"
  >
    <div
      v-for="item in containers"
      class="container"
      @mousedown="handleMd"
      @pointerdown="handlePd"
    >
      <h4 style="position: absolute;">{{item.title}}</h4>
      <draggable-resizable
        v-for="item in list"
        :key="item.id"
        @mousedown.native.stop
        @pointerdown.native.stop
        :grid="[10,10]"
        :parent="true"
        h="auto"
        w="auto"
      >
        <item :item="item" :class="['form-col', 'sortable']" />
      </draggable-resizable>
    </div>
  </draggable>
</template>
<style lang="scss">
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
</style>
<script>
import draggable from './components/draggable';
import draggableResizable from './components/vue-draggable-resizable.vue';
import './components/vue-draggable-resizable.css'
import item from './components/item.vue'

export default {
  name: 'App',
  components: {
    draggable,
    draggableResizable,
    item
  },
  data: function () {
    return {
      list: [],
      containers: []
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
    }
  },
  created () {
    this.initData();
    window.draggable = draggable;
  }
}
</script>
