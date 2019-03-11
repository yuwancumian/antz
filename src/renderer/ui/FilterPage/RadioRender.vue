<template>
    <div>
        <editor :content="genCode"></editor>
        <div class="toolbar" id="filterToolbar">
            <el-card>
                <h4>filter builder</h4>
                <el-form ref="form1" :model="form" label-width="60px">
                    <el-form-item label="name">
                        <el-input type="text" v-model="form.name" class="toolbar-input" size="small"> </el-input>
                    </el-form-item>
                    <el-form-item label="field">
                        <el-input type="text" v-model="form.field" class="toolbar-input" size="small"> </el-input>
                    </el-form-item>
                </el-form>
                <div class="toolbar-footer">
                    <el-button size="small" @click="handleGenarate"> Generate </el-button>
                    <el-button size="small" @click="hanldeCopy"> Copy </el-button>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>
import {Button, Form, Card, Input} from 'element-ui';
import editor from '@/components/Editor/Index';
export default {
    components: {editor},
    data () {
        return {
            genCode: 'radio',
            form: {
                name: '',
                filed: ''
            }
        }
    },
    methods: {
        handleGenarate() {
            console.log(111)
        },
        hanldeCopy () {
            console.log(222)
        }
    }
}
</script>

<style>

</style>
