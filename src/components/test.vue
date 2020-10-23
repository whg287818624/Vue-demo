<template>
    <div>
        <h2>理解vue之element-ui中的 slot-scope</h2>
        <el-table :data="tableData" style="width: 100%">
            <!-- :data="用于存放请求数据回来的数组" -->
            <el-table-column label="索引值" width="200">
                <template slot-scope="scope">
                    <!-- 这里取到当前单元格 -->
                    <span>{{ scope.$index }}</span> <!-- scope.$index就是索引 -->
                </template>
            </el-table-column>
            <el-table-column label="标题" width="200">
                <template slot-scope="scope"> <!-- 这里取到当前单元格 -->
                    <span>{{ scope.row.title }}</span>
                    <!-- scope.row 直接取到该单元格对象，就是数组里的元素对象，即是tableData[scope.$index] -->
                    <!-- .title 是对象里面的title属性的值 -->
                </template>
            </el-table-column>
        </el-table>
        <el-button @click="get">get</el-button>
        <div>res:'{{res.address}}'</div>
    </div>
    
</template>

<script>
    import {getData} from '../assets/api.js';
    export default {
        name: "demo",
        components: {

        },
        data() {
            return {
                tableData: [{
                        title: 123,
                        age: 11
                    },
                    {
                        title: 456,
                        age: 18
                    },
                ],
                res: ''
            }
        },
        props: {

        },
        methods: {
            get(){
                getData('/geo/',{}).then(res=>{
                    console.log(res);
                    this.res = res.data;
                });
            }
        },
        mounted(){
            var arr = this.tableData;
            [arr].map(el=>{
                console.log(el)
                console.log(el.age)
            })
            arr.map(el=>{
                console.log(el)
                console.log(el.age)
            })
        }

    }
</script>

<style scoped lang="scss">

</style>
