<template>
    <div class="content">
        <div class="layout-editor">
            <with-editor></with-editor>
        </div>
        <div class="layout-browser">
            <webview src="build/cache/index.html" frameborder="0"></webview>
        </div>
    </div>
</template>

<script>
import SubMenu from '@/components/SubMenu/SubMenu';
import WithEditor from './withEditor/index';
export default {
    components: { SubMenu, WithEditor },
    data () {
        return {
            layoutMenu: [
                {
                    id: 1,
                    title: 'layout1'
                }
            ],
            menuData: [
                {
                    id: 1,
                    title: 'table',
                    url: '/table-page',
                }
            ]
        }
    }
}
</script>

<style>
.layout-editor{
    width: 50%;
    float: left;
    min-height: 100vh;
    border-right: 1px solid #ccc;
}
.layout-browser {
    width: 50%;
    float: right;
}

</style>
