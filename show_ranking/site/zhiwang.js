const zhiwang = {};

zhiwang.rankingSpanProvider = [];

zhiwang.start = function() {
	setInterval(function() {
		zhiwang.addRankings();
	}, 2000);
}


zhiwang.addRankings = function() {
	var results = $("td.source");	//

	results.each(function(index) {
		let result = $(this);
		let node ;
		let title ;
		swufe_list = result.parent().find("span[class$='none']");
		swufe_list2 = result.parent().find("span.ccf-ranking");
		if (swufe_list.length == 0 && swufe_list2.length == 0) {
			if(result.find("a").length != 0){
				title = result.find("a").text();
				node = result.find("a");
				
				if (title.length != 0) {
					for (let getRankingSpan of zhiwang.rankingSpanProvider) {
						node.after(getRankingSpan(title));	//中文
					}
				}
				
			}else{
				title = result.text();
				node = result;
				
				if (title.length != 0) {
					for (let getRankingSpan of zhiwang.rankingSpanProvider) {
						node.append(getRankingSpan(title.toUpperCase()));	//英文
					}
				}
			}

		}
	});
};
