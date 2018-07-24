<template>
	<div>
		<div class="banner" @click="handleShowGallary">
			<img class="banner-img" src="https://imgs.qunarzz.com/p/tts2/1804/97/382b3bd308aea002.jpg_750x440_43baa2df.jpg" >
			<div class="banner-info">
				<div class="banner-title">
					出发地:北京 北京旭冉之旅
				</div>
				<div class="banner-number">
					<span class="iconfont banner-icon">&#xe663;</span>
					39
				</div>
			</div>
		</div>	
		<common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>	
	</div>

</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
	name: 'DetailBanner',
	data () {
		return {
			showGallary: false,
			imgs: ['https://imgs.qunarzz.com/p/tts2/1804/97/382b3bd308aea002.jpg_750x440_43baa2df.jpg','https://imgs.qunarzz.com/p/tts4/1807/d1/87f9594327e9f602.jpg_750x440_2c325cee.jpg']
		}

		
	},
	methods: {
		handleShowGallary () {
			this.showGallary = true
		},
		handleGallaryClose () {
			this.showGallary = false
		}
	},
	components: {
		CommonGallary
	}
};
</script>
<style lang="stylus" scoped>
.banner
	position relative
	overflow hidden
	height 0
	padding-bottom 58.7%
	color #fff
	// height 0 + padding-bottom 58.7%(图片高度/图片宽度)得出的百分比数值，这种写法可避免初次加载页面时，此布局部分出现真空抖动
	.banner-img
		width 100%
	.banner-info
		display flex
		position absolute
		left 0
		right 0
		bottom 0
		line-height .6rem
		background-image linear-gradient(top,rgba(0,0,0,0,), rgba(0,0,0,0.4))
		.banner-title
			flex 1
			font-size .32rem
			padding 0 .2rem
		.banner-number
			margin-top .14rem
			padding 0 .4rem
			line-height .32rem
			height .32rem
			border-radius .2rem
			background-color rgba(0,0,0,0.2)
			font-size .24rem
			.banner-icon
				font-size .24rem
				
			
		
</style>