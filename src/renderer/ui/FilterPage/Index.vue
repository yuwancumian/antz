<template>
    <div class="content">
        <sub-menu title="Filter" :menuData="filterMenu"></sub-menu>
         <div id="editor">
             123
        </div>
        <div class="toolbar" id="filterToolbar">
            <el-card>
                <h4>filter builder</h4>
                <ul>
                    <draggable v-model="filterMenu" v-bind="dragOptions" @start="isDragging = true"
        @end="isDragging = false">
                        <transition-group type="transition" :name="'flip-list'">
                            <li class="toolbar-item" v-for="item in filterMenu" :key="item.id">
                                {{item.title}}
                                <el-input type="text" class="toolbar-input" size="small"> </el-input>
                                <el-input type="text" class="toolbar-input" size="small"> </el-input>
                            </li>
                        <!-- <li class="toolbar-item">
                            名称 <el-input type="text" class="toolbar-input" size="small"> </el-input>
                            <el-input type="text" class="toolbar-input" size="small"> </el-input>
                        </li>
                        <li class="toolbar-item">456</li>
                        <li class="toolbar-item">123</li>
                        <li class="toolbar-item">456</li> -->
                        </transition-group>
                    </draggable>
                </ul>
                <div class="toolbar-footer">
                    <el-select size="small"></el-select>
                    <el-input type="text" class="toolbar-input" size="small"> </el-input>
                    <el-input type="text" class="toolbar-input" size="small"> </el-input>
                    <el-button size="small"> 增加 </el-button>
                </div>
            </el-card>
        </div>
        page222222a1111  form
    </div>
</template>

<script>
import {Card, Input, Button, Select} from 'element-ui';
import draggable from 'vuedraggable';
import SubMenu from '@/components/SubMenu/SubMenu';
export default {
    components: { SubMenu,  draggable},
    data(){
        return {
            filterMenu: [
                {
                    id: 1,
                    title: "filter1"
                }, 
                {
                    id: 2,
                    title: "fitler2"
                }
            ],
            filterData: []
        }
    },
    computed: {
        dragOptions() {
            return {
                animation: 0,
                group: "description",
                disabled: false,
                ghostClass: "ghost"
            };
        }
    }
}
</script>

<style lang="less">
    #filterToolbar {
        ul {
        }
    }
    .toolbar-item{
        border: 2px dashed #ccc;
        padding: 4px 0;
        margin: 6px 0;
        border-radius: 4px;
    }
    .toolbar-input{
        height: 18px !important;
        width: 95px !important;
    }
    .toolbar-footer {
        border-top: 1px solid #ccc;
    }
    .ghost {
        opacity: 0.5;
        background: #c8ebfb;
    }
    .flip-list-move {
    transition: transform 0.5s;
    }
    .no-move {
    transition: transform 0s;
    }
</style>
