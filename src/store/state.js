//使用localStorage时需注意：在某些浏览器当中，如果用户关闭
//了本地存储的功能，或者使用隐身模式，使用localStore有可能
// 使得浏览器抛出异常，代码就会运行不了，所以要使用try-catch
let defaultCity = '上海'
try {
	if (localStorage.city) {
		defaultCity = localStorage.city
	}
} catch (e) {}

export default {
	city: defaultCity
}