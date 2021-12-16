const eii = {};


eii.getRankingInfo = function(name) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';

	let ranking;
	let name_list = processName(name);
	for(let i = 0; i < name_list.length; i++) {
		ranking = eii.rankingFullName[name_list[i]];
		if(ranking != null){
			break;
		}
	}
	if (ranking == null) {
		ranking = "";
	}else{
		ranking = "EI检索";
	}
	
	rankingInfo.rankings.push(ranking);

	return rankingInfo;
}

eii.getRankingInfoEn = function(name) {
	
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';
	let ranking;
	let name_list = processNameEn(name);
	for(let i = 0; i < name_list.length; i++) {
		ranking = eii.rankingFullNameEn[name_list[i]];
		if(ranking != null){
			break;
		}
	}
	if (ranking == null) {
		ranking = "";
	}else{
		ranking = "EI检索";
	}
	rankingInfo.rankings.push(ranking);
	
	return rankingInfo;
}




eii.getRankingClass = function(rankings) {
	for (let result of rankings) { // 
		if (result == "EI检索") {
			return 'eii-A';
		} 
	}
	return 'eii-none';
}

eii.getRankingSpan = function(name) {
	let rankingInfo = eii.getRankingInfo(name);
	let span = $('<span>').addClass(eii.getRankingClass(rankingInfo.rankings)).text(
		rankingInfo.rankings.join('/'));
	if (eii.getRankingClass(rankingInfo.rankings) != "eii-none"){
		span.addClass("ccf-ranking");
	}
	return span;
}

eii.getRankingSpanEn = function(name) {
	let rankingInfo = eii.getRankingInfoEn(name);
	let span = $('<span>').addClass(eii.getRankingClass(rankingInfo.rankings)).text(
		rankingInfo.rankings.join('/'));
	if (eii.getRankingClass(rankingInfo.rankings) != "eii-none"){
		span.addClass("ccf-ranking");
	}
	return span;
}

