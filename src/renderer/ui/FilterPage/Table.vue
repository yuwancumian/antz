<template>
    <div>
        <editor :content="genCode"></editor>
        <div class="toolbar">
            <el-card>
                <h4>filter builder</h4>
                    <a href="#" @click="openExcel"><img src="~@/assets/open.png" alt="" id="openBtn" ></a>
                    <el-form ref="form1" :model="form" label-width="60px">
                        <el-form-item label="name">
                            <el-input type="text" v-model="form.name"  size="small"> </el-input>
                        </el-form-item>
                        <el-form-item label="field">
                            <el-input type="textarea" v-model="form.field"  size="small"> </el-input>
                        </el-form-item>
                    </el-form>
                <!-- <ul>
                
                    <li>
                      
                    </li>
                </ul>
               
                <!- <i class="el-icon-edit"></i> -->
                <p> 
                    <el-button size="small" @click="handleGenarate"> Generate </el-button>
                    <el-button type="primary" size="small" @click="handleCopy">复制</el-button>
                </p>
                 
            </el-card>
        </div>
    </div>
</template>

<script>
import {Card, Input, Button, Icon, Switch, Tabs, Form} from 'element-ui';
import SubMenu from '@/components/SubMenu/SubMenu';
import {remote, clipboard} from 'electron';
import XLSX from 'xlsx';
const {dialog} = remote;
import editor from '@/components/Editor/Index';
import ace from 'ace-builds';
import fs from 'fs';
import path from 'path';
require("ace-builds/webpack-resolver");
export default {
    components: { SubMenu, editor },
    data () {
        return {

            genCode: 'gen table code',
            form: {
                name: '',
                filed: ''
            },
            tableMenu: [
                {
                    id: 1,
                    title: 'table',
                    url: '/table-page',
                }
            ],
            valueArray: []
        }
    },

    created(){
        let filepath;
        const _this = this
        const openBtn = document.getElementById("openBtn");
   
        filepath = path.resolve(process.cwd(),__dirname, './lib/table.js');
        console.log(filepath)
        fs.readFile(filepath, 'utf-8', function(err, data){
            console.log('type',typeof(data));
           
            // var editor = ace.edit("editor", {
            //     mode: "ace/mode/jsx",
            //     selectionStyle: "line",
            //     autoScrollEditorIntoView: true
            // });
            // // ace.config.set("basePath", "ace-builds/src-noconflict");
            // editor.session.setTabSize(2);
            // editor.setValue(data);
            
        })
        
        console.log('ace',ace);
    },
    methods: {
        openExcel(){
            dialog.showOpenDialog((fileNames) => {
                if(fileNames === undefined){
                    console.log("No file selected");
                    return;
                }
                const filePath = fileNames[0];
                const workbook = XLSX.readFile(filePath);
                var data = [];
                for (var sheet in workbook.Sheets) {
                    if (workbook.Sheets.hasOwnProperty(sheet)) {
                        // fromTo = workbook.Sheets[sheet]['!ref'];
                        data = data.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));
                        break;
                    }
                }
                // Change how to handle the file content
                console.log("The file content is : " + JSON.stringify(data));

                for (var item in data[0]) {
                    console.log("item", item + ':' + data[0][item]);
                    this.valueArray.push(`{\n\ttitle: '${item}', \n\tdataIndex: ${data[0][item]}, \n\twidth: 120 \n}, \n`)
                }
                this.genCode=this.valueArray.join('');
            })
        },
        handleGenarate () {
            console.log('name',this.form.name)
            console.log('field', this.form.field)
            // const str = toInput(this.form.name,this.form.field)
            console.log(str);
            this.genCode = str;
        },
        handleCopy(){
            console.log('copied')
            console.log('genCode', this.genCode)
            clipboard.writeText(this.genCode);
        }
    }
}
</script>

<style lang="less">
  
  #openBtn{
      position: absolute;
      top: 90px;
      right: 30px;
      z-index: 3000;
      width: 20px;
      height: 15px;
  }
    
</style>

