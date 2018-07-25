<template>
	<div>
		<router-link tag="div" :to="'/'" class="header-abs" v-show="showAbs">
			<div class="iconfont header-abs-back">&#xe624;</div>
		</router-link>
		<div 
			class="header-fixed" 
			v-show="!showAbs"
			:style="opacityStyle"
		>
			<router-link to="/">
				<div class="iconfont header-fixed-back">&#xe624;</div>
			</router-link>
			景点详情
		</div>
	</div>
</template>

<script>
export default {
	name: 'DetailHeader',
	data () {
		return {
			showAbs: true,
			opacityStyle: {
				opacity: 1
			}
		}
	},
	methods: {
		handleScroll () {
			console.log('scroll')
			const top = document.documentElement.scrollTop
			if (top > 60) {
				let opacity = top / 140
				opacity = opacity > 1 ? 1 : opacity
				this.opacityStyle = { opacity }
				this.showAbs = false
			} else {
				this.showAbs = true
			}
			console.log('lla')
		}
	},
	mounted () {
		//绑定scroll事件，一旦此事件执行，会触发handleScroll事件执行
		window.addEventListener('scroll',this.handleScroll)
		//全局事件的解绑，window是全局对象，会影响其他组件
	},
	unmounted () {
		//在页面即将被隐藏，或者即将被替换成新页面的时候会触发这个生命周期钩子
		window.removeEventListener('scroll',this.handleScroll)
	}
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header-abs
	position absolute
	left .2rem
	top .2rem
	width .7rem
	height .7rem
	text-align center
	line-height .7rem
	border-radius .35rem
	background-color rgba(0,0,0,0.5)
	.header-abs-back
		color #fff
		font-size .32rem
.header-fixed
	position fixed
	top 0
	left 0
	right 0
	height $headerHeight
	line-height $headerHeight
	text-align center
	color #333
	background-color #fff
	font-size .32rem
	z-index 2
	.header-fixed-back
		position absolute
		top 0
		left 0
		width .64rem
		text-align center
		font-size .3rem
		color #333
</style>