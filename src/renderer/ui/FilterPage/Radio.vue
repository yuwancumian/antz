<template>
    <div>
        <editor :content="genCode"></editor>
        <div class="toolbar" id="filterToolbar">
            <el-card>
                <h4>radio builder</h4>
                <el-form ref="form1" :model="form" label-width="60px">
                    <el-form-item label="名称">
                        <el-input type="text" v-model="form.name" class="toolbar-input" size="small"> </el-input>
                    </el-form-item>
                    <el-form-item label="字段">
                        <el-input type="text" v-model="form.field" class="toolbar-input" size="small"> </el-input>
                    </el-form-item>
                    <el-form-item label="值">
                        <el-input
                            type="textarea"
                            :rows="2"
                            placeholder="请输入内容"
                            v-model="form.textarea">
                        </el-input>
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
import toRadio from './lib/toRadio.js';
import { clipboard } from 'electron';
export default {
    components: {editor},
    data () {
        return {
            genCode: 'radio',
            form: {
                name: '',
                field: '',
                textarea: ''
            }
        }
    },
    methods: {
        handleGenarate() {
            console.log(111)
            console.log('name',this.form.name)
            console.log('field',this.form.field)
        },
        hanldeCopy () {
            let ind; 
            let arr = toRadio(this.form.name, this.form.field).split(/[\n]/);
            for (let i = 0; i < arr.length; i++) {
                const element = arr[i]
                if (element.indexOf('<Radio.Group>')>=0 ) {
                    ind = i;
                    console.log('index', ind)
                    console.log('index', element.indexOf('<Radio.Group>'))
                }
            }
            let firstPiece = arr.slice(0,ind+1);
            let lastPiece = arr.slice(ind+1);
            let valueArray = this.form.textarea.trim().split(/[\s]/);
            let strArray = [];
            for (let index = 0; index < valueArray.length; index++) {
                const element = valueArray[index];
                strArray.push(`\t\t\t<Radio value="${element.split('：')[0]}"> ${element.split('：')[1]}</Radio>`)
            }
            console.log('valueArray', valueArray);
            console.log('strArray',strArray);
            const totalArray = [...firstPiece,...strArray, ...lastPiece];
            console.log('totalArray',totalArray);
            this.genCode = totalArray.join('\n');
            clipboard.writeText(totalArray.join('\n'))
        }
    }
}
</script>

<style>

</style>
