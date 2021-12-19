let default_translateWhere = "google";
let default_translateKeycode = "84";
let default_translateHideKeycode = "89";
let default_translateColor = "#55aaff";
let default_translatePosition = "after";

let default_cnkiDefaultUrl = "https://zhangxiangnan.work";
let default_cnkiAdvUrl = "https://zhangxiangnan.work";
let default_springerUrl = "https://zhangxiangnan.work";
let default_wosOldUrl = "https://zhangxiangnan.work";
let default_wosNewUrl = "https://zhangxiangnan.work";
let default_pubmedUrl = "https://zhangxiangnan.work";
let default_ieeeUrl = "https://zhangxiangnan.work";

$(function () {
  $('[data-toggle="tooltip"]').tooltip();  // 生成工具提示
})

// translation.html
$(function(){
	let translateWhere ;
	let translateKeycode ;
	let translateHideKeycode ;
	let translateColor ;
	let translatePosition ;
	
	chrome.storage.sync.get({"translateWhere": default_translateWhere, "translateKeycode": default_translateKeycode, 
	"translateColor": default_translateColor, "translatePosition": default_translatePosition, "translateHideKeycode": default_translateHideKeycode}, function(items) {
		translateWhere = items.translateWhere;
		translateKeycode = items.translateKeycode;
		translateColor = items.translateColor;
		translatePosition = items.translatePosition;
		translateHideKeycode = items.translateHideKeycode;
		
		// 回显
		$("input[name=translateKeycode]").val(String.fromCharCode(translateKeycode) );
		$("input[name=translateHideKeycode]").val(String.fromCharCode(translateHideKeycode) );
		$("input[name=translateColor]").val(translateColor) ;
		if(translateWhere == "google"){
			$("#googletranslate").prop("checked",true);
		}else if (translateWhere == "baidu"){
			$("#baidutranslate").prop("checked",true);
		}else if(translateWhere == "tengxun"){
			$("#tengxuntranslate").prop("checked",true);
		}
		if(translatePosition == "after"){
			$("#translateResultPositionAfter").prop("checked", true);
		}else{
			$("#translateResultPositionBefore").prop("checked", true);
		}
	});
	
})

$(function (){
	let cnkiDefaultUrl ;
	let cnkiAdvUrl ;
	let springerUrl ;
	let wosOldUrl ;
	let wosNewUrl ;
	let pubmedUrl ;
	let ieeeUrl ;

	chrome.storage.sync.get({"cnkiDefaultUrl": default_cnkiDefaultUrl, "cnkiAdvUrl": default_cnkiAdvUrl,
		"springerUrl": default_springerUrl, "wosOldUrl": default_wosOldUrl, "wosNewUrl": default_wosNewUrl, "pubmedUrl": default_pubmedUrl,
		"ieeeUrl":default_ieeeUrl}, function(items) {

		cnkiDefaultUrl = items.cnkiDefaultUrl;
		cnkiAdvUrl = items.cnkiAdvUrl;
		springerUrl = items.springerUrl;
		wosOldUrl = items.wosOldUrl;
		wosNewUrl = items.wosNewUrl;
		pubmedUrl = items.pubmedUrl;
		ieeeUrl = items.ieeeUrl;

		// 回显
		if(cnkiDefaultUrl != "https://zhangxiangnan.work"){
			$("#cnkiDefaultUrl").val(cnkiDefaultUrl);
		}
		if(cnkiAdvUrl != "https://zhangxiangnan.work"){
			$("#cnkiAdvUrl").val(cnkiAdvUrl);
		}
		if(springerUrl != "https://zhangxiangnan.work"){
			$("#springerUrl").val(springerUrl);
		}
		if(wosOldUrl != "https://zhangxiangnan.work"){
			$("#wosOldUrl").val(wosOldUrl);
		}
		if(wosNewUrl != "https://zhangxiangnan.work"){
			$("#wosNewUrl").val(wosNewUrl);
		}
		if(pubmedUrl != "https://zhangxiangnan.work"){
			$("#pubmedUrl").val(pubmedUrl);
		}
		if(ieeeUrl != "https://zhangxiangnan.work"){
			$("#ieeeUrl").val(ieeeUrl);
		}
	});
})

$("#saveTranslateSetting").click(function(){
	let translateWhere = $("input[name=translateWhere]:checked").val();
	let translatePosition = $("input[name=translatePosition]:checked").val();
	let translateKeycodeChar = $("input[name=translateKeycode]").val().toUpperCase();
	let translateHideKeycodeChar = $("input[name=translateHideKeycode]").val().toUpperCase();
	let keyCodeList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	let translateKeycode = "84";
	
	if(translateKeycodeChar.length != 1){
		translateKeycodeChar = "T";
	}
	for(let i = 0; i < keyCodeList.length; i++){
		if(translateKeycodeChar == keyCodeList[i]){
			translateKeycode = 65+i + "";
		}
	}
	
	if(translateHideKeycodeChar.length != 1){
		translateHideKeycodeChar = "Y";
	}
	for(let i = 0; i < keyCodeList.length; i++){
		if(translateHideKeycodeChar == keyCodeList[i]){
			translateHideKeycode = 65+i + "";
		}
	}
	
	
	let translateColor = $("input[name=translateColor]").val();
	if(translateColor.indexOf("#") == -1 || translateColor.length != 7){
		translateColor = "#55aaff";
	}
	chrome.storage.sync.set({
			"translateWhere": translateWhere,
			"translateKeycode":translateKeycode,
			"translateHideKeycode":translateHideKeycode,
			"translateColor":translateColor,
			"translatePosition":translatePosition
		}, function() {
			setTimeout(function() {
				document.getElementById("saveTranslateSetting").innerHTML="保存该页面所有设置";
			}, 500);
			document.getElementById("saveTranslateSetting").innerHTML="Success!";
		});	
});

$("#saveSetting").click(function () {

	let cnkiDefaultUrl = $("#cnkiDefaultUrl").val().trim().length > 0 ? $("#cnkiDefaultUrl").val().trim() :"https://zhangxiangnan.work" ;
	let cnkiAdvUrl = $("#cnkiAdvUrl").val().trim().length > 0 ? $("#cnkiAdvUrl").val().trim() :"https://zhangxiangnan.work" ;
	let springerUrl = $("#springerUrl").val().trim().length > 0 ? $("#springerUrl").val().trim() :"https://zhangxiangnan.work" ;
	let wosOldUrl = $("#wosOldUrl").val().trim().length > 0 ? $("#wosOldUrl").val().trim() :"https://zhangxiangnan.work" ;
	let wosNewUrl = $("#wosNewUrl").val().trim().length > 0 ? $("#wosNewUrl").val().trim() :"https://zhangxiangnan.work" ;
	let pubmedUrl = $("#pubmedUrl").val().trim().length > 0 ? $("#pubmedUrl").val().trim() :"https://zhangxiangnan.work" ;
	let ieeeUrl = $("#ieeeUrl").val().trim().length > 0 ? $("#ieeeUrl").val().trim() :"https://zhangxiangnan.work" ;

	chrome.storage.sync.set({
		"cnkiDefaultUrl": cnkiDefaultUrl,
		"cnkiAdvUrl":cnkiAdvUrl,
		"springerUrl":springerUrl,
		"wosOldUrl":wosOldUrl,
		"wosNewUrl":wosNewUrl,
		"pubmedUrl":pubmedUrl,
		"ieeeUrl":ieeeUrl
	}, function() {
		setTimeout(function() {
			document.getElementById("saveSetting").innerHTML="保存该页面所有设置";
		}, 500);
		document.getElementById("saveSetting").innerHTML="Success!";
	});

});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse){
	if(request.action == "trans_google"){
		let row_data = request.data;
		let flag = 0;
		let tl2 ;
		let re=/[\u4E00-\u9FA5]/;
		
		if (re.test(row_data)){
			flag = 1;
		} 
		tl2 = (flag == 0)?"zh-CN" :"en"; 
		$.ajax({
		    url: 'https://translate.googleapis.com/translate_a/single',
		    method: 'GET',
		    data: {
		        client:"gtx",
				sl:"auto",
				tl: tl2,
				dt:"t",
				q:row_data
		    },
		}).then(function(result){
			let all_result = "";
			for(let i = 0; i < result[0].length; i++){
				all_result += result[0][i][0] ;
			}
			sendResponse(all_result);
		}, function(){
			sendResponse("服务暂时不可用，有可能被谷歌禁止，请等3小时后再试，若长时间未恢复，请及时和开发者联系：zhangxiangnan0906@outlook.com");
		});
	}else {
		let url2 ;
		if(request.action == "trans_baidu"){
			url2 = 'http://47.115.128.78:7060/baidutranslate';
		}else if(request.action == "trans_tengxun"){
			url2 = 'http://47.115.128.78:7060/tengxuntranslate';
		}else if (request.action == "trans_caiyun"){
			url2 = 'http://47.115.128.78:7060/caiyuntranslate';
		}
		
		let row_data = request.data;
		if(row_data.length > 1500){
			return "当前选择的字符数为" + row_data.length + "，已经超过1500，请缩小范围选择。";
		}
		$.ajax({
		    url: url2,
		    method: 'GET',
		    data: {
		        s: row_data,
		    },
		}).then(function(result){
			sendResponse(result);
		}, function(){
			sendResponse("服务暂时不可用，请稍后再试，若长时间未恢复，请及时和开发者联系：zhangxiangnan0906@outlook.com，或更换谷歌翻译接口");
		});	
	}
	return true;
});

// translation.html