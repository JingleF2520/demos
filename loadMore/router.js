// 服务器 router.js
// 后端伪造数据

app.get('/loadMores', function(req, res) {
	var curIdx = req.query.index
	var len = req.query.length
	var data = []

	for(var i = 0; i < len; i++) {
		data.push('新闻' + (parseInt(curIdx) + i))
	}

	res.send(data)
});