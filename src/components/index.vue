<template>
	<div class="index">
		<div>
			<h1>Vue相关测试</h1>
			<el-tabs v-model="activeName" @tab-click="handleClick">
				<el-tab-pane label="FTP测试" name="first">
				    <ftp></ftp>
				</el-tab-pane>
				<el-tab-pane label="table编辑" name="second">
				    <tableEdit></tableEdit>
				</el-tab-pane>
			    <el-tab-pane label="slot-scope" name="third">
			        <img alt="Vue logo" src="@/assets/logo.png">
			        <Test msg="Welcome to Your Vue.js App" />
			    </el-tab-pane>
			    <el-tab-pane label="slot插槽" name="four">
			        <img alt="Vue logo" src="@/assets/logo.png">
			        <Test2>
			            <template v-slot:aa="dd">
			                v-slot必须放在template
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
			    <el-tab-pane label="多重组件嵌套" name="five">
			        <img alt="Vue logo" src="@/assets/logo.png">
			        <aaa></aaa>
			    </el-tab-pane>
				
			    <!-- <el-tab-pane label="定时任务" name="five">定时任务</el-tab-pane> -->
			</el-tabs>
		</div>
		<hr>
		<h2>这是index</h2>
		<p>DI:{{$store.state.id}}</p>
		<router-link :to="{path:'/excel'}">excel</router-link>
	</div>
</template>

<script>
	import Test from './test.vue'
	import Test2 from './test2.vue'
	import aaa from './ABC/AAA.vue'
	import ftp from './ftp.vue'
	import tableEdit from './tableEdit.vue'
	export default {
		name: "index",
		components: {
			Test,
			Test2,
			aaa,
			ftp,
			tableEdit
		},
		data() {
			return {
				activeName: 'second',
				id: ''
			}
		},
		props: {

		},
		methods: {
			handleClick(tab, event) {
			    console.log(tab.label);
			}
		},
		created() {
			console.log('index')
			this.$store.dispatch('changeId', 1234);
			this.$store.commit('setId', 66666);
			this.$store.dispatch('reset', 66666).then(res => {
				console.log(res)
			});
		}
	}
</script>

<style>
</style>
