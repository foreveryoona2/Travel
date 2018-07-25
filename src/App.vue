<template>
  <div id="app">
  	<!-- keep-alive是vue自带的标签，包裹router-view的意思是，路由的内容被加载过一次之后，就把路由里的内容放到内存之中，下次重新进入这个路由时，不需要重新渲染这个组件，不需要重新执行钩子函数，只需要把之前存储的内容显示到页面即可，就可避免重复发送ajax请求，提高网站性能 -->
  	<keep-alive exclude="Detail">
  		<router-view/>
  	</keep-alive>
    
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>

</style>
