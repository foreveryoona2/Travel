<template>
	<div class="list" ref="wrapper">
		<div>
			<div class="area">
				<div class="title">当前城市</div>
				<div class="button-list">
					<div class="button-wrapper">
						<div class="button">{{this.currentCity}}</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title">热门城市</div>
				<div class="button-list">
					<div class="button-wrapper" v-for="item of hot" :key="item.id" @click="handleChangeCity(item.name)">
						<div class="button">{{item.name}}</div>
					</div>
				</div>
			</div>
			<div 
				class="area" 
				v-for="(item, key) of cities" 
				:key="key"
				:ref="key"
			>
				<div class="title">{{key}}</div>
				<div class="item-list">
					<div class="item" v-for="innerItem of item" :key="innerItem.id" @click="handleChangeCity(innerItem.name)">{{innerItem.name}}</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
	name: 'CityList',
	props:{
		cities: Object,
		hot: Array,
		letter:String
	},
	computed: {
		...mapState({
			currentCity: 'city'
		})
	},
	mounted () {
		this.scroll = new Bscroll(this.$refs.wrapper)
	},
	watch: {
		letter () {
			if (this.letter) {
				const element = this.$refs[this.letter][0]//better scroll提供的获取数据的接口
				
				 this.scroll.scrollToElement(element)
			}
		
		}
	},
	methods: {
		handleChangeCity (city) {
			// 此处无异步操作或批量同步操作，因此直接跳过actions的dispatch方法，通过mutations的commit方法改变state里的数据
			//this.$store.commit('changeCity2',city)
			// 以上代码在调用了mapMutations之后，可简化为以下代码
			this.changeCity2(city)
			this.$router.push('/')
		},
		//把mutations里的changeCity2映射到该组件的methods中
		...mapMutations(['changeCity2'])
	}
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
	position absolute
	top 1.59rem
	left 0
	right 0
	bottom 0
	overflow hidden
	.title
		line-height .54rem
		background-color #eee
		padding-left .2rem
		color #666
		font-size .26rem
	.button-list
		padding .1rem .6rem .1rem .1rem
		overflow hidden
		.button-wrapper
			width 33.33%
			float left
			.button
				text-align center
				margin .1rem
				padding .1rem 0
				border .02rem solid #ccc
				border-radius .06rem
	.item-list
		.item
			line-height .76rem
			padding-left .2rem
			border-bottom 1px solid #ccc
</style>
