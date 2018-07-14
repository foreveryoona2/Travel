<template>
	<div>
		<div class="title">周末去哪儿</div>
		<ul>
			<li class="item border-bottom" v-for="item of recommendList" :key="item.id">
				<div class="item-img-wrapper">
					<img class="item-img" :src="item.imgUrl" alt="">
				</div>
				
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	name: 'HomeWeekend',
	data () {
		return{
			recommendList:[{
				id: '0001',
				imgUrl: 'http://img1.qunarzz.com/sight/source/1505/92/580e9ea4f37a1b.jpg_r_640x214_72112761.jpg',
				title: '广州必游TOP10',
				desc: '感受现代与传统相融合的广州'
			},{
				id: '0002',
				imgUrl: 'http://img1.qunarzz.com/sight/source/1506/fd/08f524fa9455b4.jpg_r_640x214_b37dbb39.jpg',
				title: '暑期玩转粤港澳',
				desc: '这个假期开启最高大上的国内游'
			},{
				id: '0003',
				imgUrl: 'http://img1.qunarzz.com/sight/source/1606/88/56f7f4bd0493fe.jpg_r_640x214_f8c0994a.jpg',
				title: '签到广州长隆',
				desc: '来广州来长隆，就对了，就够了~'
			},{
				id: '0004',
				imgUrl: 'http://img1.qunarzz.com/sight/source/1505/50/07fa9343791682.jpg_r_640x214_c8c3d798.jpg',
				title: '自然户外好去处',
				desc: '快快来到户外，感受花城的魅力'
			}]
		}
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
.item-img-wrapper
	overflow:hidden
	height 0
	padding-bottom 33.4%
.item-info
	padding .1rem
.item-img
	width 100%
.item-title
	line-height .54rem
	font-size .32rem
	ellipsis() //点点点引用
.item-desc
	line-height .4rem
	font-size .28rem
	color #ccc
	ellipsis()

</style>