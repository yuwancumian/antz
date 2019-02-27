<template>
  <div id="app">
    <main-bar></main-bar>
    <router-view></router-view>
  </div>
</template>

<script>
  import MainBar from '@/components/MainBar/Index'
  export default {
    name: 'y111',
    components: { MainBar }
  }
</script>

<style>
  /* CSS */
</style>
