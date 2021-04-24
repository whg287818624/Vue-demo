<template>
	<div>
		<hr>
		<h2>这是index</h2>
		<p>DI:{{$store.state.id}}</p>
		<router-link :to="{path:'/excel'}">excel</router-link>
	</div>
</template>

<script>
	export default {
		name: "index",
		components: {

		},
		data() {
			return {
				id: ''
			}
		},
		props: {

		},
		methods: {
			
		},
		created() {
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
