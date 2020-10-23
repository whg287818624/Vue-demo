<template>
    <div class="test2">
        <h3>这里是子组件</h3>
        <slot :data="list" name="aa"></slot>
        <slot :data="list" name="bb"></slot>
        <slot :eee="list" name="cc"></slot>
    </div>
</template>

<script>
    export default {
        name: 'test2',
        components: {
            
        },
        data() {
            return {
                list:["这","是","个","数","组"]
            }
        },
        props: {
            
        },
        methods:{
            
        }
    }
</script>

<style scoped lang="scss">
    
</style>