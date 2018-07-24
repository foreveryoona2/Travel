<template>
	<div>
		<div class="title">热销推荐</div>
		<ul>
			<router-link tag="li" class="item border-bottom" v-for="item of list" :key="item.id" :to="'/detail/' + item.id">
				<img class="item-img" :src="item.imgUrl" alt="">
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>
			</router-link>
		</ul>
	</div>
</template>
<script>
export default {
	name: 'HomeRecommend',
	props: {
		list: Array
	}
};
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
	line-height: .8rem
	background-color: #eee
	text-indent :.2rem
	margin-top:.2rem
.item
	display:flex
	height:1.9rem
	overflow:hidden
	border-bottom 1px solid #eee
	.item-img
		width 1.7rem
		height 1.7rem
		padding .1rem
	.item-info
		flex 1
		padding .1rem
		min-width 0 //父级助力实现点点点
		.item-title
			line-height .54rem
			font-size .32rem
			ellipsis() //点点点引用
		.item-desc
			line-height .4rem
			font-size .28rem
			color #ccc
			ellipsis()
		.item-button
			background-color #ff9300
			padding 0 .1rem
			border-radius .06rem
			margin-top .16rem
			color #fff
			line-height .44rem

	
</style>