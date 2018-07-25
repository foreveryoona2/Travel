<template>
	<div>
		<div class="banner" @click="handleShowGallary">
			<img class="banner-img" :src="bannerImg" >
			<div class="banner-info">
				<div class="banner-title">
					{{this.sightName}}
				</div>
				<div class="banner-number">
					<span class="iconfont banner-icon">&#xe663;</span>
					{{this.bannerImgs.length}}
				</div>
			</div>
		</div>	
		<common-gallary :imgs="bannerImgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>	
	</div>

</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
	name: 'DetailBanner',
	props: {
		sightName: String,
		bannerImg: String,
		bannerImgs: Array
	},
	data () {
		return {
			showGallary: false
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