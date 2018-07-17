<template>
	<div>
		<home-header></home-header>
		<home-swiper :list="swiperList"></home-swiper>
		<home-icons :list="iconList"></home-icons>
		<home-recommend :list="recommendList"></home-recommend>
		<home-weekend :list="weekendList"></home-weekend>
	</div>
	
</template>

<script>
import HomeHeader from './components/HomeHeader.vue'
import HomeSwiper from './components/HomeSwiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeRecommend from './components/Recommend.vue'
import HomeWeekend from './components/Weekend.vue'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
	name: 'Home',
	components:{
		HomeHeader,
		HomeSwiper,
		HomeIcons,
		HomeRecommend,
		HomeWeekend
	},
	data () {
		return {
			lastCity: '',
			swiperList: [],
			iconList: [],
			recommendList: [],
			weekendList: []
		}
	},
	computed: {
		...mapState(['city'])
	},
	methods: {
		getHomeInfo () {
			axios.get('/api/index.json?city=' + this.city)
			.then(this.getHomeInfoSucc)
		},
		getHomeInfoSucc (res) {
			res = res.data
			if(res.ret && res.data){
				const data = res.data
				this.swiperList = data.swiperList
				this.iconList = data.iconList
				this.recommendList = data.recommendList
				this.weekendList = data.weekendList
			}
		}
	},
	mounted () {
		this.lastCity = this.city
		//console.log('mounted')
		this.getHomeInfo()
	},
	// 当使用keep-alive的时候，选择城市之后返回至首页，首页显示的是缓存里的数据，这样就无法在变更城市跳转之后发送新的ajax请求，
	// 	而当使用keep-alive时，会'多出'一个生命周期函数activated()
	activated () {
		// 定义一个临时缓冲数据用来跟新数据做对比，当两个值不相等时，重新发送ajax请求
		if (this.lastCity !== this.city) {
			this.lastCity = this.city
			this.getHomeInfo()
		}
	}
};
</script>
<style>

</style>