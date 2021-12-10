<template>
  <div id="app">
    <draggable
      tag="div"
      class="draggable-box"
      v-bind="{
        group: {
          name: 'form-draggable',
          pull: 'clone'
        },
        ghostClass: 'moving',
        animation: 180
      }"
      :emptyInsertThreshold="0"
      v-model="list1"
    >
    <transition-group tag="div" name="list" class="list-con">
      <div class="list-1-item" v-for="item in list1" :key="item.id">
        <p>{{ item.id }}</p>
        <p>{{ item.label }}</p>
      </div>
    </transition-group>
    </draggable>
    <draggable
      tag="div"
      class="draggable-box"
      v-bind="{
        group: {
          name: 'form-draggable',
          pull: 'clone'
        },
        ghostClass: 'moving',
        animation: 180
      }"
      :emptyInsertThreshold="0"
      v-model="list2"
    >
      <transition-group tag="div" name="list" class="list-con">
        <div class="list-2-item" v-for="item in list2" :key="item.id">
          <p>{{ item.id }}</p>
          <p>{{ item.label }}</p>
        </div>
      </transition-group>
    </draggable>
  </div>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


.draggable-box {
  width: 47%;
  border-left: 2px solid #f00;
  float: left;
}

.draggable-box:first-child {
  border-left: none;
}

.list-con {
  display: flex;
  flex-wrap: wrap;
}

.list-1-item,
.list-2-item {
  color: #fff;
  background: #23a647;
  width: 260px;
  padding: 15px;
  border: 1px solid #307ec2;
  margin: 10px 0 0 10px;
  height: 85px;
}
</style>
<script>
import draggable from 'vuedraggable';

export default {
  name: 'App',
  components: {
    draggable
  },
  data: function () {
    return {
      list1: [],
      list2: []
    };
  },
  created () {
    for (let i = 0; i < 15; i ++) {
      this.list1.push({
        id: Math.random(),
        label: Math.random()
      });

      this.list2.push({
        id: Math.random(),
        label: Math.random()
      });
    }
  }
}
</script>
