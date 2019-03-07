<template>
    <div class="side-menu">
        <h3>{{title}}</h3>
        <div>
            <ul>
                <li v-for="item in menuData" :key="item.id">
                    {{item.title}}
                </li>
            </ul>
        </div>
        
    </div>
</template>

<script>
export default {
    props: ['title','menuData']
}
</script>
