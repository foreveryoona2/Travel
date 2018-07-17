import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

// Vue.use是在vue中使用插件的格式
Vue.use(Vuex)
export default new Vuex.Store({
	state,
	//当有异步操作或者批量同步操作时，要用到actions
	actions: {
		changeCity (ctx,city) {
			//console.log(city)
			ctx.commit('changeCity2',city)
		}
	},
	mutations,
	//在vuex当中，getters相当于组件当中的computed计算属性，
	//当我们需要根据state里的数据中计算出新的数据时
	//就要用到getters
	getters: {
		doubleCity (state) {
			return state.city + ' ' + state.city
		}
	}
})