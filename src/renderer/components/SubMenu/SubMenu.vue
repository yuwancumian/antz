<template>
    <div class="side-menu">
        <h3>{{title}}</h3>
        <div>
            <ul>
                <li v-for="item in menuData" :key="item.id">
                    {{item.title}}
                </li>
            </ul>
        </div>
        
    </div>
</template>

<script>
export default {
    props: ['title','menuData']
}
</script>

<style lang="less">
    .side-menu{
        width: 200px;
        height: 100vh;
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
</style>
