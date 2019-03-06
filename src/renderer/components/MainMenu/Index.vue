<template>
    <div class="main-menu">
        <ul>
            <li><router-link :to="{path: '/table-page'}">Table</router-link></li>
            <li><router-link :to="{path: '/filter-page'}">Filter</router-link></li>
            <li><router-link :to="{path: '/section-page'}">Section</router-link></li>
            <li><router-link :to="{path: '/layout-page'}">Layout</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
}
</script>


