<template>
    <div class="main-bar">
        <ul>
            <li><router-link :to="{path: '/gen-page'}">Gen</router-link></li>
            <li><router-link :to="{path: '/layout-page'}">Layout</router-link></li>
            <li><router-link :to="{path: '/thead-page'}">THead</router-link></li>
            <li><router-link :to="{path: '/form-page'}">Form</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
    .main-bar {
        position: fixed;
        background: #ccc;
        width: 64px;
        left: 0;
        top: 0;
        bottom: 0;
        ul {
            list-style: none;
            padding-left: 0;
        }
    }
</style>
