<template>
	<div class="list" ref="wrapper">
		<div>
			<div class="area">
				<div class="title">当前城市</div>
				<div class="button-list">
					<div class="button-wrapper">
						<div class="button">北京</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title">热门城市</div>
				<div class="button-list">
					<div class="button-wrapper">
						<div class="button">北京</div>
					</div>
					<div class="button-wrapper">
						<div class="button">北京</div>
					</div>
					<div class="button-wrapper">
						<div class="button">北京</div>
					</div>
					<div class="button-wrapper">
						<div class="button">北京</div>
					</div>
					<div class="button-wrapper">
						<div class="button">北京</div>
					</div>
					<div class="button-wrapper">
						<div class="button">北京</div>
					</div>
					<div class="button-wrapper">
						<div class="button">北京</div>
					</div>
					<div class="button-wrapper">
						<div class="button">北京</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title">A</div>
				<div class="item-list">
					<div class="item">阿拉尔</div>
					<div class="item">阿拉尔</div>
					<div class="item">阿拉尔</div>
					<div class="item">阿拉尔</div>
					<div class="item">阿拉尔</div>
					<div class="item">阿拉尔</div>
				</div>
			</div>
			<div class="area">
				<div class="title">A</div>
				<div class="item-list">
					<div class="item">阿拉尔</div>
					<div class="item">阿拉尔</div>
					<div class="item">阿拉尔</div>
					<div class="item">阿拉尔</div>
					<div class="item">阿拉尔</div>
					<div class="item">阿拉尔</div>
				</div>
			</div>
			<div class="area">
				<div class="title">A</div>
				<div class="item-list">
					<div class="item">阿拉尔</div>
					<div class="item">阿拉尔</div>
					<div class="item">阿拉尔</div>
					<div class="item">阿拉尔</div>
					<div class="item">阿拉尔</div>
					<div class="item">阿拉尔</div>
				</div>
			</div>
			<div class="area">
				<div class="title">A</div>
				<div class="item-list">
					<div class="item">阿拉尔</div>
					<div class="item">阿拉尔</div>
					<div class="item">阿拉尔</div>
					<div class="item">阿拉尔</div>
					<div class="item">阿拉尔</div>
					<div class="item">阿拉尔</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
	name: 'CityList',
	mounted () {
		this.scroll = new Bscroll(this.$refs.wrapper)
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
