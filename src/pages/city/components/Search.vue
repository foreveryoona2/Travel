<template>
	<div>
		<div class="search">
			<input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
		</div>
		<div v-show="show">
			<div class="search-content" ref="wrapper" v-show="keyword">
				<ul>
					<li class="search-item" v-for="item of list" :key="item.id" @click="handleChangeCity(item.name)">{{item.name}}</li>
					<li class="search-item" v-show="hasNoData">没有找到匹配数据</li>
				</ul>
			</div>
		</div>
		
	</div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
	name: 'CitySearch',
	props:{
		cities: Object
	},
	methods: {
		handleChangeCity (city) {
			this.$store.dispatch('changeCity',city)
			this.show = !this.show
			this.keyword = ''
			// 使用router的api跳转
			//this.$router.push('/')
		}

	},
	data () {
		return {
			list: [],
			keyword: '',
			timer: null,
			show: true
		}
	},
	computed: {
		hasNoData () {
			return !this.list.length
		}
	},
	mounted () {
		this.scroll = new Bscroll(this.$refs.wrapper)
	},
	watch: {
		keyword () {
			if (this.timer) {
				clearTimeout(this.timer)
			}
			if(!this.keyword) {
				this.list = []
				return

			}
			if (this.keyword) {
				this.show = true
			}
			this.timer = setTimeout(() => {
				const result = []
				for (let i in this.cities) {
					this.cities[i].forEach((value) => {
						if(value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) >-1){
							result.push(value)
						}
					})
				}
				this.list = result
			},100)
		}
	}
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
	height .72rem
	background-color $bgColor
	padding 0 .1rem
	.search-input
		width 99%
		height .62rem
		line-height .62rem
		text-align center
		border-radius .06rem
		outline-style none
		color #666
		box-sizing border-box
		padding 0 .1rem
.search-content
	position absolute
	z-index 1
	top 1.58rem
	right 0
	left 0
	bottom 0
	background-color #eee
	overflow hidden
	.search-item
		line-height .62rem
		padding-left .2rem
		color #666
		background-color #fff
		border-bottom 1px solid #eee
</style>
