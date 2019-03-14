<template>
    <div class="content">
        <sub-menu title="Layout" :menuData="menuData"></sub-menu>
        page222222  layout
    </div>
</template>

<script>
import SubMenu from '@/components/SubMenu/SubMenu';
export default {
    components: { SubMenu },
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

</style>
