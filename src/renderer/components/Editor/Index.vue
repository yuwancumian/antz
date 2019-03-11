<template>
    <div>
        <div id="editor">
        editor component code {{content}}
        </div>
    </div>
</template>

<script>
import ace from 'ace-builds';
require("ace-builds/webpack-resolver");
export default {
    props: ['content'],
    mounted(){
        var editor = ace.edit("editor", {
            mode: "ace/mode/jsx",
            selectionStyle: "line",
            autoScrollEditorIntoView: true
        });
    },
    watch: {
        content: function(newVal, oldVal) {
            console.log('newVal',newVal);
            var editor = ace.edit("editor", {
                mode: "ace/mode/jsx",
                selectionStyle: "line",
                autoScrollEditorIntoView: true
            });
            editor.setValue(newVal);
        }
    }
}
</script>
