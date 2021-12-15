const sdufe = {};


sdufe.getRankingInfo = function(name) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';

	let ranking;
	let name_list = processName(name);
	for(let i = 0; i < name_list.length; i++) {
		ranking = sdufe.rankingFullName[name_list[i]];
		if(ranking != null){
			break;
		}
	}
	if (ranking == null) {
		ranking = "";
	}else{
		ranking = "SDUFE " + ranking;
	}
	
	rankingInfo.rankings.push(ranking);

	return rankingInfo;
}

sdufe.getRankingInfoEn = function(name) {
	
	
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';
	let ranking;
	
	let name_list = processNameEn(name);
	for(let i = 0; i < name_list.length; i++) {
		ranking = sdufe.rankingFullNameEn[name_list[i]];
		if(ranking != null){
			break;
		}
	}
	if (ranking == null) {
		ranking = "";
	}else{
		ranking = "SDUFE " + ranking;
	}
	rankingInfo.rankings.push(ranking);
	
	return rankingInfo;
}




sdufe.getRankingClass = function(rankings) {
	for (let result of rankings) { // 
		if (result == "SDUFE 特类期刊") {
			return 'sdufe-AAA';
		} else if (result == "SDUFE A1") {
			return 'sdufe-AA';
		} else if (result == "SDUFE A2") {
			return 'sdufe-A';
		} else if (result == "SDUFE B") {
			return 'sdufe-B';
		}else if (result == "SDUFE C") {
			return 'sdufe-C';
		}
	}
	return 'sdufe-none';
}

sdufe.getRankingSpan = function(name) {
	let rankingInfo = sdufe.getRankingInfo(name);
	let span = $('<span>').addClass(sdufe.getRankingClass(rankingInfo.rankings)).text(
		rankingInfo.rankings.join('/'));
	if (sdufe.getRankingClass(rankingInfo.rankings) != "sdufe-none"){
		span.addClass("ccf-ranking");
	}
	return span;
}

sdufe.getRankingSpanEn = function(name) {
	let rankingInfo = sdufe.getRankingInfoEn(name);
	let span = $('<span>').addClass(sdufe.getRankingClass(rankingInfo.rankings)).text(
		rankingInfo.rankings.join('/'));
	if (sdufe.getRankingClass(rankingInfo.rankings) != "sdufe-none"){
		span.addClass("ccf-ranking");
	}
	return span;
}

