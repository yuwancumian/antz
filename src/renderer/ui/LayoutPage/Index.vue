<template>
    <div class="content">
        <sub-menu title="Layout" :menuData="layoutMenu"></sub-menu>
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
            ]
        }
    }
}
</script>

<style>

</style>
