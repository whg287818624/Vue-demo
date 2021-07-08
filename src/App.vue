<template>
    <div id="app">
        <router-view></router-view>  
    </div>
</template>

<script>
    
    export default {
        name: 'app',
        components: {
            
        },
        data() {
            return {
                
            };
        },
        methods: {
            
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    h1{
        margin: 0;
    }
    h2 {
        color: skyblue;
    }
    .el-tabs{
        padding: 0 50px;
    }
</style>
