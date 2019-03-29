<template>
    <div>
        <textarea id="demotext" class="code-input">/* your code here */</textarea>
    </div>
</template>

<script>
require('codemirror/lib/codemirror.css');
import CodeMirror from 'codemirror';
export default {
    mounted(){
        var editor = CodeMirror.fromTextArea(document.getElementById("demotext"), {
            lineNumbers: true,
            matchBrackets: true
        });
        editor.setValue('123')
    }
}
</script>

<style>

</style>
