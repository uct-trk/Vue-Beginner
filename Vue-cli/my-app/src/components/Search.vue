<template>
    <div class="search">
    <input type="text" v-model="query" @keypress.enter="handleSearch"/>
    <button v-on:click="handleSearch">Search</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            query: ""
        }
    },
    methods: {
        handleSearch(){
            this.$emit("SearchRequested", this.query)
        }
    },
}
</script>

<style>
    .search input{
        padding: 10px 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        width: 400px;
    }
    .search button {
        padding: 15px 15px;
        border: 1px solid #ccc;
        border-radius: 5px;
        cursor: pointer;
    }
</style>