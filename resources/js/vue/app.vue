<template>
    <div  class= "todoListContainer">
        <div class = "heading">
            <h2 id="title">Todo List</h2>
            <addItemForm v-on:reloadlist="getList()"/>
        </div>
        <list-view :items ="items" v-on:reloadlist="getList()"/> 
    </div>
</template>

<script>
import addItemForm from './addItemForm.vue';
import listView from './listView.vue';

export default {
    components: {
        addItemForm,
        listView
    },
    data: function () {
        return {
            items: []
        }
    },
    methods: {
        getList() {
            axios.get('/api/items')
                .then(response => {
                    this.items = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
    created() {
        this.getList();
    }
}
</script>

<style scoped>
.todoListContainer {
    width: 350px;
    margin: 0 auto;

}
.heading {
    background-color: #354ef2;
    padding: 10px;
}
#title {
    text-align: center;
}

</style>