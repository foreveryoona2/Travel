import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)
//创建公共仓库

export default new Vuex.Store({
	state,
	actions,
	mutations,
	getters: {
		doubleCity (state) {
			return state.city + ' ' + state.city
		}
		//vuex里的getters，类似于组件里的computed计算属性
	}
})