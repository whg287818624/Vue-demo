<template>
    <div id="app">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="slot-scope" name="first">
                <img alt="Vue logo" src="./assets/logo.png">
                <Test msg="Welcome to Your Vue.js App" />
            </el-tab-pane>
            <el-tab-pane label="slot插槽" name="second">
                <img alt="Vue logo" src="./assets/logo.png">
                <Test2>
                    <template v-slot:aa="dd">
                        <!-- v-slot必须放在template -->
                        <span>{{dd.data[0]}}</span>
                        <span>2</span>
                        <span>3</span>
                    </template>
                    <template #cc="ee">这里是CC{{ee.eee[4]}}</template>
                    <div slot="bb" slot-scope="dd">
                        这是这是{{dd.data[3]}}
                    </div>
                </Test2>
            </el-tab-pane>
            <el-tab-pane label="多重组嵌套" name="third">
                <img alt="Vue logo" src="./assets/logo.png">
                <aaa></aaa>
            </el-tab-pane>
            <!-- <el-tab-pane label="定时任务" name="fourth">定时任务</el-tab-pane> -->
        </el-tabs>
        
        
    </div>
</template>

<script>
    import Test from './components/test.vue'
    import Test2 from './components/test2.vue'
    import aaa from './components/ABC/AAA.vue'
    export default {
        name: 'app',
        components: {
            Test,
            Test2,
            aaa
        },
        data() {
            return {
                activeName: 'first'
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab.label);
            }
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

    h2 {
        color: skyblue;
    }
    .el-tabs{
        padding: 0 50px;
    }
</style>
