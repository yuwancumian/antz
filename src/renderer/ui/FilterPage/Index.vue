<template>
    <div class="content">
        <sub-menu title="Filter" :menuData="filterMenu"></sub-menu>
        <router-view></router-view>
       
        
    </div>
</template>

<script>
import {clipboard} from 'electron';
import {Card, Input, Button, Select, Form} from 'element-ui';
import ace from 'ace-builds';
require("ace-builds/webpack-resolver");
import SubMenu from '@/components/SubMenu/SubMenu';
import {toInput} from '@helper/renderFilter';
export default {
    components: { SubMenu },
    data(){
        return {
            filterMenu: [
                {
                    id: 1,
                    title: "table",
                    url: '/filter-page/table',
                    icon: "input-button"
                },
                {
                    id: 2,
                    title: "Input",
                    url: '/filter-page/input',
                    icon: "input-button"
                }, 
                {
                    id: 3,
                    title: "Radio",
                    url: '/filter-page/radio',
                    icon: "radio-button"
                },
                {
                    id: 4,
                    title: "Select",
                    url: '/filter-page/select',
                },
                {
                    id: 5,
                    title: "DateRange",
                    url: '/filter-page/dateRange',
                }
            ],
            form: {
                name: '',
                filed: ''
            }
        }
    },
    mounted (){
        // // ace.config.set("basePath", "ace-builds/src-noconflict");
        // editor.session.setTabSize(2);
        const a = document.getElementById('editor');
        console.log("a",a);
       
        // var editor = ace.edit("editor", {
        //     mode: "ace/mode/jsx",
        //     selectionStyle: "line",
        //     autoScrollEditorIntoView: true
        // });
    },
    
    
}
</script>

<style lang="less">
    #filterToolbar {
        ul {
        }
    }
    .toolbar-item{
        padding: 4px 0;
        margin: 6px 0;
        border-radius: 4px;
    }
    .toolbar-input{
        height: 18px !important;
        width: 195px !important;
    }
    .toolbar-footer {
        border-top: 1px solid #ccc;
    }
    
</style>
