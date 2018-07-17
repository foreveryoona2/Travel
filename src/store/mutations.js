export default {
	changeCity2 (state,city) {
			state.city = city
			// 当用户改变state里的city数据时，
			//不但改变state里的数据，
			//并且保存一个localStorage本地数据
			try {
				localStorage.city = city
			} catch (e) {}
		}
}