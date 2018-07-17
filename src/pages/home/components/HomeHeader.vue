<template>
	<div class="header">
		<div class="header-left">
			<div class="iconfont back-icon">&#xe624;</div>
		</div>
		<div class="header-input">
			<span class="iconfont">&#xe632;</span>
			输入城市/景点/国民主题
		</div>
		<router-link to="/city">
			<div class="header-right">
				{{this.doubleCity}}
				<span class="iconfont arrow-icon">&#xe64a;</span>
			</div>			
		</router-link>

	</div>
	
</template>

<script>
// vuex提供的高级api，mapState可将state里的数据映射到该组件的computed计算属性当中，因此不需要props接收来自父组件的传值
import  { mapState, mapGetters } from 'vuex'

export default {
	name: 'HomeHeader',
	computed: {
		//...用展开运算符，mapState是把state里的数据映射到该组件的计算属性当中
		...mapState(['city']),
		...mapGetters(['doubleCity'])
	}

};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
	display:flex
	line-height $headerHeight
	background $bgColor
	color:#fff
	.header-left
		width:.64rem
		float:left
		.back-icon
			text-align:center
			font-size .3rem
	.header-input
		flex:1
		height .64rem
		line-height .64rem
		margin-top .12rem
		margin-left .2rem
		border-radius:.1rem
		color:#ccc
		padding-left:.2rem
		background-color #fff
	.header-right
		min-width 1.04rem
		padding 0 .1rem
		float:right
		text-align:center
		color #fff
		.arrow-icon
			margin-left:.1
			text-align:center
			font-size:.24rem

</style>