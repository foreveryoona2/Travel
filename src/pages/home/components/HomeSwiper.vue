<template>
	<div class="wrapper">
		<swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
		<swiper-slide
		  v-for="item of swiperList"
		  :key="item.id"

		>
			<img class="swiper-img" :src="item.imgUrl" alt="">
		</swiper-slide>
		<div class="swiper-pagination"  slot="pagination"></div>
		</swiper>			
	</div>

</template>
<script>
export default{
	name: 'HomeSwiper',
	data (){
		return {
			swiperOption: {
				pagination: '.swiper-pagination',
				loop: true
			},
			swiperList:[{
				id: '0001',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1806/de/df09fa61aed2d502.jpg_750x200_67472739.jpg'

			},{
				id: '0002',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1807/c6/44fce1467be17702.jpg_750x200_406f5fc3.jpg'
			}
			]
		}
		
	}
};
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
		background:#fff !important
.wrapper
	overflow:hidden
	width:100%
	height:0
	background:#eee
	padding-bottom:26.67% 
	
	//宽高比，height为0，用padding撑开，或者写height:26.67vw(考虑兼容性还是选择前者)
	.swiper-img
		width:100%
</style>