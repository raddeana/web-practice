<template>
<div class="login-panel">
    <div class="form-item">
        <label>直观</label>
        <input type="text" v-model="zg" />
    </div>
    <button @click="handleArt">艺术哲学</button>
</div>
</template>
<style scoped>
.login-panel {
    background: green;
}
</style>
<script>
export default {
    data: function () {
        return { zg: 111 };
    },
    methods: {
        handleArt () {
            this.zg = Math.random();
        }
    }
}
</script>