import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
	state:{
		id: 11001,
		name: '吴亦凡',
		num: 666
	},
	mutations:{
		setId(state,value){
			state.id = value;
		}
	},
	actions:{
		changeId({commit},res){
			commit('setId',res);
		},
		reset({commit},res){
			return new Promise(resolve=>{
				commit('setId',null)
				resolve()	//作用:将状态从“未完成”变为“成功”;
			})
		}
	}
})