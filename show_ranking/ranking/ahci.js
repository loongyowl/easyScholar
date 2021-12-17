const ahci = {};



ahci.getRankingInfoEn = function(name) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';
	
	let ranking;
	let name_list = processNameEn(name);
	for(let i = 0; i < name_list.length; i++) {
		ranking = ahci.rankingFullNameEn[name_list[i]];
		if(ranking != null){
			break;
		}
	}
	if (ranking == null) {
		ranking = "";
	}else{
		ranking = "A&HCI 检索";
	}
	rankingInfo.rankings.push(ranking);
	

	return rankingInfo;
}




ahci.getRankingClass = function(rankings) {
	for (let result of rankings) { // 
		if (result == "A&HCI 检索") {
			return 'ahci-A';
		} 
	}
	return 'ahci-none';
}

// ahci.getRankingSpan = function(name) {
// 	let rankingInfo = ahci.getRankingInfo(name);
// 	let span = $('<span>').addClass(ahci.getRankingClass(rankingInfo.rankings)).text(
// 		rankingInfo.rankings.join('/'));
// 	if (ahci.getRankingClass(rankingInfo.rankings) != "ahci-none"){
// 		span.addClass("ccf-ranking");
// 	}
// 	return span;
// }

ahci.getRankingSpanEn = function(name) {
	let rankingInfo = ahci.getRankingInfoEn(name);
	let span = $('<span>').addClass(ahci.getRankingClass(rankingInfo.rankings)).text(
		rankingInfo.rankings.join('/'));
	if (ahci.getRankingClass(rankingInfo.rankings) != "ahci-none"){
		span.addClass("ccf-ranking");
	}
	return span;
}

