import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		//唯一数据源，我理解为声明全局变量
		loginCondition: 0,
		// 0 未登陆，在主页
		// 1 在登录页
		// 2 已经点击注册
		// 3 已登录 在主页
		token: "",
		// name:""
	},
	getters: {
		//针对state数据的过滤，
	},
	mutations: {
		//逻辑处理，但Mutation 必须是同步函数
		changeLoginCondition(state,payLoad) {
			// 变更状态
			console.log(payLoad);
			state.loginCondition=payLoad.loginCondition;
			console.log("更新后的logincondition",state.loginCondition);
		},
		saveToken(state,payLoad) {
			state.token=payLoad.token;
		},
		// saveName(state,payLoad) {
		// 	state.name=payLoad.name;
		// },
	},
	actions: {
		//Action 类似于 mutation,Action 提交的是 mutation，而不是直接变更状态;Action 可以包含任意异步操作.
		// setIncrement(context) {
		// 	context.commit("increment");
		// },
	},
})

export default store
