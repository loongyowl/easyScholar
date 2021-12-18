const cqu = {};


cqu.getRankingInfo = function(name) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';

	let ranking;
	let name_list = processName(name);
	for(let i = 0; i < name_list.length; i++) {
		ranking = cqu.rankingFullName[name_list[i]];
		if(ranking != null){
			break;
		}
	}
	if (ranking == null) {
		ranking = "";
	}else{
		ranking = "CQU " + ranking;
	}
	
	rankingInfo.rankings.push(ranking);

	return rankingInfo;
}

// cqu.getRankingInfoEn = function(name) {
//
// 	let rankingInfo = {};
// 	rankingInfo.rankings = [];
// 	rankingInfo.info = '';
// 	let ranking;
// 	let name_list = processNameEn(name);
// 	for(let i = 0; i < name_list.length; i++) {
// 		ranking = cqu.rankingFullNameEn[name_list[i]];
// 		if(ranking != null){
// 			break;
// 		}
// 	}
// 	if (ranking == null) {
// 		ranking = "";
// 	}else{
// 		ranking = "SWJTU " + ranking;
// 	}
// 	rankingInfo.rankings.push(ranking);
//
// 	return rankingInfo;
// }




cqu.getRankingClass = function(rankings) {
	for (let result of rankings) { // 
		if (result == "CQU A" || result == "CQU 权威期刊") {
			return 'cqu-A';
		} else if (result == "CQU B" || result == "CQU 重要期刊") {
			return 'cqu-B';
		} else if (result == "CQU C") {
			return 'cqu-C';
		}
	}
	return 'cqu-none';
}

cqu.getRankingSpan = function(name) {
	let rankingInfo = cqu.getRankingInfo(name);
	let span = $('<span>').addClass(cqu.getRankingClass(rankingInfo.rankings)).text(
		rankingInfo.rankings.join('/'));
	if (cqu.getRankingClass(rankingInfo.rankings) != "cqu-none"){
		span.addClass("ccf-ranking");
	}
	return span;
}

// cqu.getRankingSpanEn = function(name) {
// 	let rankingInfo = cqu.getRankingInfoEn(name);
// 	let span = $('<span>').addClass(cqu.getRankingClass(rankingInfo.rankings)).text(
// 		rankingInfo.rankings.join('/'));
// 	if (cqu.getRankingClass(rankingInfo.rankings) != "cqu-none"){
// 		span.addClass("ccf-ranking");
// 	}
// 	return span;
// }

