<template>
	<div class="icons">
		<swiper>
			<swiper-slide v-for="(page,index) of pages" :key="index">
				<div class="icon" v-for ="item of page" :key="item.id">
					<div class="icon-img">
						<img class="icon-img-content" :src="item.imgUrl" alt="">
					</div>
					<p class="icon-desc">{{item.desc}}</p>
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>
<script>
export default {
	name: 'Icons',
	data () {
		return {
			iconsList: [{
				id: '0001',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
				desc: '热门景点'
			},{
				id: '0002',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
				desc: '必游榜单'
			},{
				id: '0003',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
				desc: '动植物园'
			},{
				id: '0004',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
				desc: '游乐场'
			},{
				id: '0005',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/89/55083b0f1951f302.png',
				desc: '游船游艇'
			},{
				id: '0006',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png',
				desc: '夏日玩水'
			},{
				id: '0007',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png',
				desc: '城市观光'
			},{
				id: '0008',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
				desc: '一日游'
			},{
				id: '0009',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
				desc: '玩转长隆玩转长隆'
			},{
				id: '00010',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
				desc: '全部玩乐'
			}]
		}
	},
	computed: {
		pages () {
			const pages = []
			this.iconsList.forEach((item,index) =>{
				const page = Math.floor(index / 8)
				if (!pages[page]) {
					pages[page] = []
				}
				pages[page].push(item)
			})
			return pages
		}
	}
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.icons >>> .swiper-container
	height:0
	padding-bottom:50%
	.icon
		position:relative
		float:left
		width:25%
		height:0
		padding-bottom:25%
		overflow:hidden
		.icon-img
			position:absolute
			top:0
			left:50%
			margin-left:-38%
			rihgt:0
			bottom:.44rem
			box-sizing:border-box
			padding:.1rem
			.icon-img-content
				display:block
				height:100%
				margin:0 auto
		.icon-desc
			position:absolute
			text-align:center
			left:0
			bottom:0
			height:.44rem
			line-height .44rem
			color:$darkTextColor
			width:100%
			ellipsis()
			
			
			










</style>