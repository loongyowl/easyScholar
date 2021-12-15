const scholar = {};
scholar.rankSpanList = [];
scholar.rankSpanListSwufe = [];

scholar.run = function() {
	let url = window.location.pathname;
	if (url == "/scholar") { // 查找文献
		scholar.appendRank();
	} else if (url == "/citations") { // 学者的页面
		setInterval(function() {
			scholar.addRankings();
		}, 500);
	}
};


scholar.appendRank = function() {
	let elements = $("#gs_res_ccl_mid > div > div.gs_ri"); // 获得每一行搜索项目
	elements.each(function() {
		let node = $(this).find("h3 > a:first"); // 加first，不然和sci-hub 插件冲突

		let pattern = /(?<=- ).*?(?=, [0-9]{4})/;
		let journal = $(this).find("div.gs_a").text().match(pattern);
		if (journal != undefined) {
			title = journal[0];
		} else {
			return true; // 跳过本次循环
		}

		if (title.indexOf("…") != -1) {
			let el = document.createElement("span");
			el.innerHTML = " 查询文献来源中... ";
			$(el).css("color", "#ff0000");
			$(el).css("font-weight", "bold");
			$(el).attr("class", "easyScholarTemp");
			$(this).addClass("easyScholarPrepareFind");
			node.after($(el));
			return true;
		}

		for (let getRankSpan of scholar.rankSpanListSwufe) {
			node.after(getRankSpan(title.toUpperCase()));
		}
	});

	// 二次启动，对之前有...的再此进行发起请求查找
	let prepareFindElement = $("div.easyScholarPrepareFind");
	prepareFindElement.each(function(k, v) {

		let delay = Math.floor(Math.random() * (2000 - 1000 + 1) + 1500);
		let singlePrepareFindElement = $(this);
		let node = singlePrepareFindElement.find("h3 > a:first");
		setTimeout(function() {
			let code = singlePrepareFindElement.find(".gs_fl a:nth-child(4)").attr('href')
				.toString().match(/(?<=related:).*?(?=:scholar)/);
			let url = cite_api_format = document.location.hostname + "?q=info:" + code +
				":scholar.google.com/&output=cite&scirp=0&hl=zh-CN";
			$.ajax({
				url: url,
				method: "get"
			}).then(function(resp) {
				singlePrepareFindElement.find("span.easyScholarTemp").hide();
				let $divAppendContents = $('<div></div>').append(resp);
				let temp = $divAppendContents.find("tr");
				let title;
				$.each(temp, function() {
					if ($(this).find("th.gs_cith").text() == "MLA" || $(this).find(
							"th.gs_cith").text() == "APA") {
						title = $(this).find("div.gs_citr i:first").text();
						return false;	// break
					}
				});
				for (let getRankSpan of scholar.rankSpanListSwufe) {
					$(node).after(getRankSpan(title.toUpperCase()));
				}
			});
		}, delay * k);
	});
}




scholar.addRankings = function() {

	let results = $("tr.gsc_a_tr");
	results.each(function(index) {
		let result = $(this);
		swufe_list = result.find("span[class$='none']");
		swufe_list2 = result.find("span.ccf-ranking");
		if (swufe_list.length == 0 && swufe_list2.length == 0) {
			let node = result.find("td.gsc_a_t > a:first"); // 加first，防止和其他插件发送冲突
			let title = $(this).find("div.gs_gray")[1].textContent + " 1";	// 让正则可以匹配上
			let title2 = title.match(/.*?(?= [0-9])/);
			
			if(title2 != undefined){
				if(title2[0].charAt(title2[0].length-1) == ","){
					title = title2[0].substr(0, title2[0].length -1);
				}else{
					title = title2[0];
				}
			}else{
				return true;	// continue
			}
			for (let getRankSpan of scholar.rankSpanListSwufe) {
				node.after(getRankSpan(title.toUpperCase()));
			}
		}
	})
}
