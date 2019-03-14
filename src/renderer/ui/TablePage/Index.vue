<template>
    <div class="content">
        <sub-menu title="Table" :menuData="tableMenu"></sub-menu>
        <editor :content="genCode"></editor>
        <div class="toolbar">
            <el-card>
                <ul>
                    <li>
                        <a href="#" @click="openExcel"><img src="~@/assets/open.png" alt="" id="openBtn" ></a>
                        <el-input size="small">123</el-input>
                    </li>
                    <li>
                        <!-- <el-switch
                            size="small"
                            v-model="value3"
                            active-text=""
                            inactive-text="withborder">
                        </el-switch> -->
                    </li>
                    <li>
                        <!-- <el-switch
                            v-model="value2"
                            active-text=""
                            inactive-text="withborder">
                        </el-switch> -->
                    </li>
                </ul>
                <el-button type="primary" size="small" @click="handleCopy">复制</el-button>
                <!-- <i class="el-icon-edit"></i> -->

                
            </el-card>
        </div>
    </div>
</template>

<script>
import {Card, Input, Button, Icon, Switch, Tabs} from 'element-ui';
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
            genCode: '123',
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
                    this.valueArray.push(`{\n\ttitle: '${item}', \n\tdataIndex: ${data[0][item]}, \n\twidth: 120 \n},`)
                }
                this.genCode=this.valueArray.join('');
            })
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
      top: 30px;
      right: 30px;
      z-index: 3000;
      width: 20px;
      height: 15px;
  }
    
</style>

