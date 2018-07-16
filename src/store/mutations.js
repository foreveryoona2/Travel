export default {
	changeCity2 (state,city) {
			state.city = city
			try {
				localStorage.city = city
			} catch (e) {}
			localStorage.city = city
		}
}