<template>
    <div class="content">
        <div id="editor">

        </div>
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
                <el-button type="primary" size="small">复制</el-button>
                <!-- <i class="el-icon-edit"></i> -->

                
            </el-card>
        </div>
    </div>
</template>

<script>
import {Card, Input, Button, Icon, Switch, Tabs} from 'element-ui';
import {remote} from 'electron'
import XLSX from 'xlsx';
const {dialog} = remote;
import ace from 'ace-builds';
import fs from 'fs';
import path from 'path';
require("ace-builds/webpack-resolver");
export default {
    data () {
        return {
            codesnip: '123',
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
           
            var editor = ace.edit("editor", {
                mode: "ace/mode/jsx",
                selectionStyle: "line",
                autoScrollEditorIntoView: true
            });
            // ace.config.set("basePath", "ace-builds/src-noconflict");
            editor.session.setTabSize(2);
            editor.setValue(data);
            
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
                }
            })
        }  
    }
}
</script>

<style lang="less">
  .toolbar{
      width: 300px;
      height: 200px;
      position: absolute;
      right: 16px;
      top: 60px;
      ul {
          line-height: 32px;
          list-style: none;
      }
  }
  #editor{
      width: 100%;
      min-height: 720px;
  }
  #openBtn{
      position: absolute;
      top: 30px;
      right: 30px;
      z-index: 3000;
      width: 20px;
      height: 15px;
  }
    
</style>

