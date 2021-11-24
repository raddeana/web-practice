<template>
  <div id="app" @mousedown="handleAppMD">
    <div class="test">
    </div>
    <draggable
      tag="div"
      class="draggable-box"
      v-bind="{
        group: 'form-draggable',
        ghostClass: 'moving',
        animation: 180,
        handle: '.sortable'
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
            <item :item="item" :class="['form-col', 'sortable']" />
          </draggable-resizable>
          <item v-else :key="item.id" :item="item" :class="['form-col', 'sortable']" @mousedown.native.stop />
        </template>
      </transition-group>
    </draggable>
  </div>
</template>
<style lang="scss">
#app {
  height: 540px;
  width: 730px;
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
  align-content: flex-start;
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
    },

    handleAppMD () {
      console.log('app recive mousedown');
    }
  },
  created () {
    this.initData();
    window.draggable = draggable;
  }
}
</script>
