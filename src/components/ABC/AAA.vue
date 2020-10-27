<template>
    <div class="aaa">
        <hr>
        <h2>多重组件嵌套:</h2>
        <h3>这里是aaa</h3>
        <div>
            <span>{{num}}</span>
            <input type="button" value="加" @click="add">
        </div>
        <bbb :numB="num" :name="name" @addInfo="addInfo"></bbb>
    </div>
</template>

<script>
    import bbb from './BBB.vue'
    export default {
        components: {
            bbb
        },
        data() {
            return {
                num:0,
                name:'whg'
            }
        },
        props: {
            
        },
        methods:{
            add(){
                this.num += 1;
            },
            addInfo () {
                console.log('add info')
            }
        }
    }
</script>

<style scoped lang="scss">
    
</style>