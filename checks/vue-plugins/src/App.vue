<template>
  <div id="app">
    <div class="test">
    </div>
    <draggable
      tag="div"
      class="draggable-box"
      v-bind="{
        group: 'form-draggable',
        ghostClass: 'moving',
        animation: 180,
        handle: '.draggable'
      }"
      v-model="list"
    >
      <transition-group tag="div" name="list" :class="['list-main']">
        <template v-for="item in list">
          <draggable-resizable
            v-if="item.id > 80000"
            :key="item.id"
            @mousedown.native.stop
            :parent="true"
            :h="100"
          >
            <item :item="item" />
          </draggable-resizable>
          <div
            v-else
            :key="item.id"
            :class="['form-col', 'draggable']"
          >
            <item :item="item" />
          </div>
        </template>
      </transition-group>
    </draggable>
  </div>
</template>
<style lang="scss">
#app {
  height: 500px;
  width: 500px;
  border: 1px solid #333;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
  flex-wrap: wrap;
  background-color: transparent;
}

.vdr{
  -ms-touch-action:none;
  touch-action:none;
  border:1px dashed #000
}
</style>
<script>
import draggable from './components/draggable';
import draggableResizable from 'vue-draggable-resizable';
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'
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
      list: []
    };
  },
  methods: {
    initData () {
      const list = [];

      for (let i = 0; i < 15; i ++) {
        list.push({
          id: Math.random() * 100000,
          title: (Math.random() * 100).toFixed(2),
          msg: Math.random() * 10000,
        });
      }

      this.list = list;
    }
  },
  created () {
    this.initData();
    window.draggable = draggable;
  }
}
</script>
