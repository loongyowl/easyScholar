const zhongguokejihexin = {};


zhongguokejihexin.getRankingInfo = function(name) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';

	let ranking;
	let name_list = processName(name);
	for(let i = 0; i < name_list.length; i++) {
		ranking = zhongguokejihexin.rankingFullName[name_list[i]];
		if(ranking != null){
			break;
		}
	}
	if (ranking == null) {
		ranking = "";
	}else{
		ranking = "中国科技核心期刊";
	}
	
	rankingInfo.rankings.push(ranking);

	return rankingInfo;
}

zhongguokejihexin.getRankingInfoEn = function(name) {
	
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';
	let ranking;
	let name_list = processNameEn(name);
	for(let i = 0; i < name_list.length; i++) {
		ranking = zhongguokejihexin.rankingFullNameEn[name_list[i]];
		if(ranking != null){
			break;
		}
	}
	if (ranking == null) {
		ranking = "";
	}else{
		ranking = "中国科技核心期刊";
	}
	rankingInfo.rankings.push(ranking);
	
	return rankingInfo;
}




zhongguokejihexin.getRankingClass = function(rankings) {
	for (let result of rankings) { // 
		if (result == "中国科技核心期刊") {
			return 'zhongguokejihexin-A';
		}
	}
	return 'zhongguokejihexin-none';
}

zhongguokejihexin.getRankingSpan = function(name) {
	let rankingInfo = zhongguokejihexin.getRankingInfo(name);
	let span = $('<span>').addClass(zhongguokejihexin.getRankingClass(rankingInfo.rankings)).text(
		rankingInfo.rankings.join('/'));
	if (zhongguokejihexin.getRankingClass(rankingInfo.rankings) != "zhongguokejihexin-none"){
		span.addClass("ccf-ranking");
	}
	return span;
}

zhongguokejihexin.getRankingSpanEn = function(name) {
	let rankingInfo = zhongguokejihexin.getRankingInfoEn(name);
	let span = $('<span>').addClass(zhongguokejihexin.getRankingClass(rankingInfo.rankings)).text(
		rankingInfo.rankings.join('/'));
	if (zhongguokejihexin.getRankingClass(rankingInfo.rankings) != "zhongguokejihexin-none"){
		span.addClass("ccf-ranking");
	}
	return span;
}

