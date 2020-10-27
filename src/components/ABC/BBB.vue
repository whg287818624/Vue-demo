<template>
    <div class="bbb">
        <h3>这里是bbb</h3>
        <div>
            <span>{{numB}}</span>
        </div>
        <ccc :numC="numB" v-bind="$attrs" v-on="$listeners"></ccc>
        <!-- 通过 $listeners 将父作用域中的事件，传入 CCC 组件，使其可以获取到 AAA 中的事件 -->
    </div>
</template>

<script>
    import ccc from './CCC.vue'
    export default {
        components: {
            ccc
        },
        data() {
            return {
                
            }
        },
        props: ['numB'], //可是个数据或者对象!
        methods:{
            
        },
        created(){
            console.log(this.$attrs);
            // 父组件共传来name, num两个值，由于num被 props接收了，所以只有name属性
        }
    }
</script>

<style scoped lang="scss">
    
</style>