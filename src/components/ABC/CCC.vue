<template>
    <div class="ccc">
        <h3>这里是ccc</h3>
        <div>
            <span>{{numC}}
            </span><input type="button" value="删(误)" @click="del">
            <div>从aaa传来的:{{$attrs.name}}</div>
        </div>
        <hr>
    </div>
</template>

<script>
    export default {
        components: {
            
        },
        data() {
            return {
                
            }
        },
        props: ['numC'],
        methods:{
            del(){
                this.numC = -1;//不能直接改变父组件传下的值
            }
        },
        created(){
            console.log(this.$listeners);
        }
    }
</script>

<style scoped lang="scss">
    
</style>