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
  // require('~@/fonts/firacode/fira_code.css');
  export default {
    name: 'y111',
    components: { MainMenu }
  }
</script>

<style lang="less">
  @import './fonts/firacode/fira_code.css';
  /* CSS */
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    font-family:  sans-serif,Verdana, "Fira Code";
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
    .toolbar{
      width: 300px;
      height: 200px;
      position: absolute;
      right: 16px;
      top: 60px;
      h4 {
        border-bottom: 1px solid #f3f3f3;
        padding-bottom: 20px;
        margin-bottom: 20px;
      }
      ul {
          line-height: 32px;
          list-style: none;
      }
  }
  .side-menu{
        width: 200px;
        height: 200px;
        overflow: scroll;
        min-height: 95vh;
        background: #f8f8f8;
        float: left;
        h3 {
            height: 60px;
            line-height: 60px;
            padding-left: 12px;
        }
        li{
            padding-left: 60px;
            height: 140px;
        }
    }
    #editor{
        right: 0;
        width: calc(100% - 200px);
        min-height: 95vh;
        float: right;
    }
</style>
