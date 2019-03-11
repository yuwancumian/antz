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
import editor from '@/components/Editor/Index';
import {Card, Input, Button, Select, Form} from 'element-ui';
import {toInput} from '@helper/renderFilter';
export default {
    components: {editor},
    data () {
        return {
            genCode: '123',
            form: {
                name: '',
                filed: ''
            }
        }
    },
    methods: {
        handleGenarate () {
            console.log('name',this.form.name)
            console.log('field', this.form.field)
            const str = toInput(this.form.name,this.form.field)
            console.log(str);
            this.genCode = str;
            // var editor = ace.edit("editor", {
            //     mode: "ace/mode/jsx",
            //     selectionStyle: "line",
            //     autoScrollEditorIntoView: true
            // });
            // // ace.config.set("basePath", "ace-builds/src-noconflict");
            // editor.session.setTabSize(2);
            // editor.setValue(str);
            // console.log("finished")
        },
        hanldeCopy(){
            var editor = ace.edit("editor")
            console.log('editor', editor);
            var result = editor.session.getValue()
            clipboard.writeText(result)
            console.log('result',result)
        }
    },
    mounted(){
        this.$forceUpdate()
    }
}
</script>

<style>

</style>
