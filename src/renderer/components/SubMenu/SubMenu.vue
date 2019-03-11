<template>
    <div class="side-menu">
        <h3>{{title}}</h3>
        <div>
            <ul>
                <router-link v-for="item in menuData" :key="item.id" :to="item.url">
                    <li>
                        {{item.title}}
                    <!-- <img :src="getPicUrl(item.icon)" /> -->
                    </li>
                </router-link>
            </ul>
        </div>
        
    </div>
</template>

<script>
export default {
    props: ['title','menuData'],
    // methods: {
    //     getPicUrl(pic){
    //         return require('~@/assets/'+pic+'.png')
    //     }
    // }
}
</script>
