<template>
	<div>
		<h2>FTP测试</h2>
		<input type="button" value="连接测试" @click="send" class="mb10">
		<!-- <form action="http://localhost:3000/api/upload" method="post" enctype="multipart/form-data">
			<input type="file" name="file[]" />
			<input type="submit" value="submit" />
		</form> -->
		<el-upload name="file" :show-file-list="false" action="http://localhost:3000/api/upload"
			:before-upload="beforeUpload" :limit="1" :auto-upload="true" :on-success="uploadEnd">
			<el-button slot="trigger">导入数据</el-button>
			<div slot="tip" class="el-upload__tip">{{fileName}}</div>
		</el-upload>
	</div>
</template>

<script>
	import axios from "axios";
	export default {
		name: "ftp",
		components: {

		},
		data() {
			return {
				fileName: ''
			}
		},
		props: {

		},
		methods: {
			beforeUpload(file) {
				console.log(file)
				this.fileName = file.name;
			},
			uploadEnd(res){
				console.log(res)
			},
			send() {
				axios.get("http://localhost:3000/api/link").then(
					res => {
						// console.log(res)
						console.log(res.data)
					},
					err => {
						console.log(err);
						this.$message("服务器异常");
					});
			}
		},
		created() {

		}
	}
</script>

<style>
	.mb10{
		margin-bottom: 10px;
	}
</style>
