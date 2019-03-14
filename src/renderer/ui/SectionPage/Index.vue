<template>
    <div class="content">
        <sub-menu title="Section" :menuData="menuData"></sub-menu>
        <div class="center-code">
            123
        </div>
    </div>
</template>

<script>
import SubMenu from '@/components/SubMenu/SubMenu';
import sectionData from '@config/section.js';

export default {
    components: { SubMenu },
    data (){
        return{
            sectionData: null,
            menuData: [
                {  
                    id: 1,
                    title: 'table',
                    url: '/table-page',
                }
            ]
        }
    },
    created () {
        let _this = this;
        _this.sectionData = sectionData;
        console.log('123', sectionData)
    }
}
</script>

<style>
    .center-code{
        float: left;
    }
</style>
