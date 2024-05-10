<template>
    <div class= "addItem"> 
        <input type="text" v-model="item.name" />
        <font-awesome-icon icon="plus-square"
            @click="addItem()"
  
        :class="[item.name ? 'active' : 'inactive', 'plus']"
         />
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            item: {
                name: ''
            },
            token: ''
        }
    },
    created() {
        // Suponiendo que has almacenado el token en el almacenamiento local
        this.token = localStorage.getItem('token');
    },
    methods: {
        addItem() {
            if(this.item.name == "") {
                return;
            }
            axios.post('/api/item/store', {
                item: this.item
            }, {
                headers: {
                    'Authorization': `Bearer ${this.token}`,
                }
            })
            .then(response => {
                if(response.status == 201) {
                    this.item.name = "";
                    this.$emit('reloadlist');
                }
            })
            .catch(error => {
                console.log(error);
            });
        }
    }
}
</script>

<style scoped>
.addItem {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
}
input{
    background-color: #f9f9f9;
    border: none;
    outline: none;
    padding: 10px;
    margin-right: 10px;
    width: 100% ;
}
.plus {
    font-size:20px;

}
.active {
    color: green;
}
.inactive {
    color: grey;
}
</style>