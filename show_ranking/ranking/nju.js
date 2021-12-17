const nju = {};


nju.getRankingInfo = function(name) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';

	let ranking;
	let name_list = processName(name);
	for(let i = 0; i < name_list.length; i++) {
		ranking = xmu.rankingFullName[name_list[i]];
		if(ranking != null){
			break;
		}
	}
	
	if (ranking == null) {
		ranking = ""
	}
	else {
		ranking = "nju " + ranking;
	}
	
	

	rankingInfo.rankings.push(ranking);

	return rankingInfo;
}

nju.getRankingInfoEn = function(name) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';
	
	let ranking;
	let name_list = processNameEn(name);
	for(let i = 0; i < name_list.length; i++) {
		ranking = nju.rankingFullNameEn[name_list[i]];
		if(ranking != null){
			break;
		}
	}
	if (ranking == null) {
		ranking = "";
	}else{
		ranking = "NJU " + ranking;
	}
	rankingInfo.rankings.push(ranking);
	

	return rankingInfo;
}




nju.getRankingClass = function(rankings) {
	for (let result of rankings) { // 
		if (result == "NJU 超一流期刊" || result == "NJU 学科群一流期刊") {
			return 'nju-S';
		} else if (result == "NJU A") {
			return 'nju-A';
		} else if (result == "NJU B") {
			return 'nju-B';
		} 
	}
	return 'nju-none';
}

nju.getRankingSpan = function(name) {
	let rankingInfo = nju.getRankingInfo(name);
	let span = $('<span>').addClass(nju.getRankingClass(rankingInfo.rankings)).text(
		rankingInfo.rankings.join('/'));
	if (nju.getRankingClass(rankingInfo.rankings) != "nju-none"){
		span.addClass("ccf-ranking");
	}
	return span;
}

nju.getRankingSpanEn = function(name) {
	let rankingInfo = nju.getRankingInfoEn(name);
	let span = $('<span>').addClass(nju.getRankingClass(rankingInfo.rankings)).text(
		rankingInfo.rankings.join('/'));
	if (nju.getRankingClass(rankingInfo.rankings) != "nju-none"){
		span.addClass("ccf-ranking");
	}
	return span;
}

