const post = (option) => {
	let data = option.param || {}
	let header = {'content-type': 'application/x-www-form-urlencoded'}
	return new Promise((resolve, reject) => {
		uni.request({
			url: option.url,
			method: option.method ? option.method : 'POST',
			header: header,
			data: data,
			success: (res) => {
				if (res.statusCode == 200) {
					if (res.data.success) {
						console.log(`${option.url}请求成功`, res.data)
						resolve(res.data)
					} else {
						console.log(`${option.url}请求失败`, res.data)
						reject(res.data.message)
					}
				}
			}
		})
	})
}

export {
	post
}
