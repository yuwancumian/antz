<template>
  <div id="app">
    <div class="head">
      <h3>Antz</h3>
    </div>
    <main-menu></main-menu>
    <div class="page">
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
  import MainMenu from '@/components/MainMenu/Index'
  export default {
    name: 'y111',
    components: { MainMenu }
  }
</script>

<style lang="less">
  /* CSS */
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  #app{
    height: 100vh;
  }
  .page{
    width: 100% ;
    height: 100vh;
  }
  .head {
    width: 100vw;
    background: #1CB2A4;
    height: 40px;
    box-shadow: 0 3px 5px 0 rgba(0,0,0,0.13);
    line-height: 40px;
    color: #fff;
    position: fixed;
    z-index: 1000;
    h3{
      padding-left: 12px;
    }
  } 
  .content {
      width: calc(100% - 100px);
      height: 100vh;
      position: absolute;
      padding-top: 40px;
      margin-left: 100px;
      overflow: hidden;
  }
  .main-menu {
      position: fixed;
      background: #022B35;
      border-right: 5px solid #09212A;
      padding-left: 12px;
      width: 100px;
      left: 0;
      top: 40px;
      bottom: 0;
      ul {
          margin-top: 40px;
          list-style: none;
          padding-left: 0;
          line-height: 30px;
      }
      a {
        color:#ccc;
        text-decoration: none;
      }
      a:hover{
        color: #fff;
      }
    }
</style>
