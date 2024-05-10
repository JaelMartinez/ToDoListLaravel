<template>
    <div> 
        <div v-for="(item, index) in items" :key="index">
            <listitem :item="item" class="item" v-on:itemchanged="$emit('reloadlist')"/>
        </div>
    </div>
</template>

<script>
import listitem from './listItem.vue';
export default {
    props: ['items'],
    components:{
        listitem
    }
}
</script>

<style scoped>
.item {
    background: #e6e6e6;
    padding: 5px;
    margin-top: 5px;
}
</style>