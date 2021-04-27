<template>
	<div class="">
		<el-table :data="list" border fit highlight-current-row>
			<el-table-column label="姓名">
				<template slot-scope="{row}">
					<template v-if="row.edit">
						<el-input v-model="row.name" class="edit-input" size="small" />
					</template>
					<span v-else>{{ row.name }}</span>
				</template>
			</el-table-column>
			<el-table-column label="ID">
				<template slot-scope="{row}">
					<template v-if="row.edit">
						<el-input v-model="row.id" class="edit-input" size="small" />
					</template>
					<span v-else>{{ row.id }}</span>
				</template>
			</el-table-column>
			<el-table-column label="城市">
				<template slot-scope="{row}">
					<template v-if="row.edit">
						<el-input v-model="row.city" class="edit-input" size="small" />
					</template>
					<span v-else>{{ row.city }}</span>
				</template>
			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="{row}">
					<el-button v-if="row.edit" class="cancel-btn" size="small" icon="el-icon-refresh" type="warning" @click="cancelEdit(row)" > cancel</el-button>
					<el-button v-if="row.edit" type="success" size="small" icon="el-icon-circle-check-outline" @click="confirmEdit(row)" > Ok </el-button>
					<el-button v-else type="primary" size="small" icon="el-icon-edit" @click="row.edit=!row.edit" > Edit </el-button>
					
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		components: {

		},
		data() {
			return {
				rowedit: false,
				list: [{
						name: '老纪',
						city: '上海',
						id: 200331,
						edit: false,
						oldName: '老纪',
						oldCity: '上海',
						oldId: 200331,
					},{
						name: '黄三',
						city: '北京',
						id: 200332,
						edit: false,
						oldName: '黄三',
						oldCity: '北京',
						oldId: 200332,
					},{
						name: '和二',
						city: '天津',
						id: 200333,
						edit: false,
						oldName: '和二',
						oldCity: '天津',
						oldId: 200333,
					}],
			}
		},
		props: {

		},
		created(){
			
		},
		methods: {
			cancelEdit(row) {
			  row.edit = false
			  row.name = row.oldName
			  row.city = row.oldCity
			  row.id = row.oldId
			  this.$message({
			    message: '已取消!',
			    type: 'warning'
			  })
			},
			confirmEdit(row) {
			  row.edit = false
			  row.oldName = row.name
			  row.oldCity = row.city
			  row.oldId = row.id
			  console.log(row) //同时,this.list已修改!
			  this.$message({
			    message: '修改成功!',
			    type: 'success'
			  })
			}
		}
	}
</script>

<style scoped lang="scss">

</style>
